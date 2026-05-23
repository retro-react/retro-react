/** @jsxImportSource theme-ui */
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { uniqueId } from '../../utils/uniqueId';
import * as Sc from './DocumentUpload.styled';

const mergeRefs =
	<T,>(...refs: Array<ForwardedRef<T> | undefined>) =>
	(node: T | null) => {
		refs.forEach((ref) => {
			if (!ref) return;
			if (typeof ref === 'function') {
				ref(node);
			} else {
				ref.current = node;
			}
		});
	};

export type UploadColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn'
	| 'greyscale'
	| 'greyscale-dark';

export interface DocumentUploadProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	/**
	 * The color of the DocumentUpload.
	 * @default 'primary'
	 */
	color?: UploadColor;
	/**
	 * The file types that the DocumentUpload accepts.
	 * @example '.jpg,.png,.doc,.pdf'
	 */
	accept?: string;
	/**
	 * Custom styles for the component.
	 */
	sx?: ThemeUICSSObject;
	/**
	 * Callback function that is called when a file is selected or removed.
	 */
	onChange?: (file: File | null) => void;
	/**
	 * Show retro loading animation when uploading
	 */
	isUploading?: boolean;
}

const FileIcon = ({ type }: { type: string }) => {
	const getFileColor = () => {
		if (type.includes('image')) return '#FF6B6B';
		if (type.includes('pdf')) return '#FF5555';
		if (type.includes('text') || type.includes('document')) return '#4ECDC4';
		if (type.includes('video')) return '#45B7D1';
		if (type.includes('audio')) return '#96CEB4';
		return '#95A5A6';
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			aria-hidden="true"
		>
			<rect
				x="4"
				y="2"
				width="18"
				height="28"
				fill={getFileColor()}
				stroke="#000"
				strokeWidth="2"
			/>
			<path
				d="M22 2L22 10L14 10L22 2Z"
				fill="#FFF"
				stroke="#000"
				strokeWidth="2"
			/>
			<rect x="6" y="14" width="14" height="2" fill="#000" />
			<rect x="6" y="18" width="10" height="2" fill="#000" />
			<rect x="6" y="22" width="12" height="2" fill="#000" />
		</svg>
	);
};

const LoadingDots = () => {
	const [dots, setDots] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => {
				if (prev.length >= 3) return '';
				return prev + '.';
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return <span>{dots}</span>;
};

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) return 0;
				return prev + Math.random() * 15;
			});
		}, 200);

		return () => clearInterval(interval);
	}, []);

	const filled = Math.floor((progress / 100) * 20);
	const empty = 20 - filled;

	return (
		<Sc.ProgressWrapper>
			<Sc.ProgressText>
				Uploading <LoadingDots />
			</Sc.ProgressText>
			<Sc.ProgressBar>
				[{'█'.repeat(filled)}
				{'░'.repeat(empty)}] {Math.floor(progress)}%
			</Sc.ProgressBar>
		</Sc.ProgressWrapper>
	);
};

/**
 * A DocumentUpload component with authentic retro computing aesthetics,
 * complete with classic icons, sounds, and old-school UI elements.
 */
export const DocumentUpload = forwardRef<HTMLInputElement, DocumentUploadProps>(
	(
		{
			sx,
			className,
			color = 'primary',
			onChange,
			isUploading = false,
			...rest
		},
		ref,
	) => {
		const [file, setFile] = useState<File | null>(null);
		const [isDragOver, setIsDragOver] = useState(false);
		const [isPressed, setIsPressed] = useState(false);
		const inputRef = useRef<HTMLInputElement>(null);
		const generatedId = useRef(uniqueId('retro-doc-upload-'));
		const fieldId = rest.id || generatedId.current;

		const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const selectedFile = event.target.files?.[0] || null;
			setFile(selectedFile);
			if (onChange) onChange(selectedFile);
		};

		const handleDragOver = (e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragOver(true);
		};

		const handleDragLeave = (e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragOver(false);
		};

		const handleDrop = (e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragOver(false);

			const droppedFile = e.dataTransfer.files[0];
			if (droppedFile && inputRef.current) {
				const dt = new DataTransfer();
				dt.items.add(droppedFile);
				inputRef.current.files = dt.files;

				setFile(droppedFile);
				if (onChange) onChange(droppedFile);
			}
		};

		const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			e.preventDefault();

			if (inputRef.current) {
				inputRef.current.value = '';
			}
			setFile(null);
			if (onChange) onChange(null);
		};

		const formatBytes = (bytes: number, decimals = 2) => {
			if (bytes === 0) return '0 bytes';
			const k = 1024;
			const dm = decimals < 0 ? 0 : decimals;
			const sizes = ['bytes', 'KB', 'MB', 'GB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));
			return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
		};

		const getFileExtension = (filename: string) => {
			return filename.split('.').pop()?.toUpperCase() || 'FILE';
		};

		return (
			<Sc.DropzoneWrapper
				as="label"
				htmlFor={fieldId}
				sx={sx}
				$hasFile={!!file}
				$isDragOver={isDragOver}
				$isPressed={isPressed}
				$isUploading={isUploading}
				$color={color}
				className={classNames(commonClassNames, className)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onMouseDown={() => setIsPressed(true)}
				onMouseUp={() => setIsPressed(false)}
				onMouseLeave={() => setIsPressed(false)}
			>
				<Sc.HiddenInput
					type="file"
					ref={mergeRefs(inputRef, ref)}
					onChange={handleFileChange}
					{...rest}
					id={fieldId}
				/>

				{isUploading ? (
					<ProgressBar />
				) : !file ? (
					<Sc.UploadPrompt>
						<Sc.UploadText>
							{isDragOver ? 'Drop file here' : 'Click to browse'}
						</Sc.UploadText>
						<Sc.SubText>or drag and drop</Sc.SubText>
					</Sc.UploadPrompt>
				) : (
					<Sc.FileSelectedWrapper>
						<FileIcon type={file.type} />
						<Sc.FileInfo>
							<Sc.FileHeader>
								<Sc.FileType $color={color}>
									[{getFileExtension(file.name)}]
								</Sc.FileType>
								<Sc.FileStatus>Ready</Sc.FileStatus>
							</Sc.FileHeader>
							<Sc.FileName title={file.name}>{file.name}</Sc.FileName>
							<Sc.FileSize>{formatBytes(file.size)}</Sc.FileSize>
							<Sc.FileDate>
								{new Date(file.lastModified).toLocaleDateString('en-US', {
									year: '2-digit',
									month: '2-digit',
									day: '2-digit',
								})}
							</Sc.FileDate>
						</Sc.FileInfo>
						<Sc.RemoveButton
							type="button"
							onClick={removeFile}
							title="Remove file"
							aria-label="Remove file"
							$color={color}
						>
							<Sc.ButtonLabel>Remove</Sc.ButtonLabel>
						</Sc.RemoveButton>
					</Sc.FileSelectedWrapper>
				)}
			</Sc.DropzoneWrapper>
		);
	},
);

DocumentUpload.displayName = 'DocumentUpload';
