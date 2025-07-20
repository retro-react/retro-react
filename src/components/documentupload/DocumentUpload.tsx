/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './DocumentUpload.styled';

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

// TODO: Uncomment and implement the floppy disk icon if needed
// const FloppyDiskIcon = () => (
// 	<svg
// 		xmlns="http://www.w3.org/2000/svg"
// 		width="48"
// 		height="48"
// 		viewBox="0 0 48 48"
// 		fill="currentColor"
// 		aria-hidden="true"
// 	>
// 		<rect x="4" y="6" width="40" height="36" rx="2" fill="currentColor" />
// 		<rect x="6" y="8" width="36" height="32" fill="#C0C0C0" />
// 		<rect x="8" y="10" width="32" height="8" fill="currentColor" />
// 		<rect x="30" y="12" width="8" height="4" fill="#C0C0C0" />
// 		<rect x="12" y="24" width="24" height="14" fill="currentColor" />
// 		<circle cx="38" cy="14" r="2" fill="currentColor" />
// 		<rect x="10" y="14" width="4" height="4" fill="currentColor" />
// 	</svg>
// );

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
				UPLOADING <LoadingDots />
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
		const resolvedRef = ref || inputRef;

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
			if (
				droppedFile &&
				resolvedRef &&
				'current' in resolvedRef &&
				resolvedRef.current
			) {
				// Create a new FileList and assign it to the input
				const dt = new DataTransfer();
				dt.items.add(droppedFile);
				resolvedRef.current.files = dt.files;

				setFile(droppedFile);
				if (onChange) onChange(droppedFile);
			}
		};

		const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			e.preventDefault();

			if (resolvedRef && 'current' in resolvedRef && resolvedRef.current) {
				resolvedRef.current.value = '';
			}
			setFile(null);
			if (onChange) onChange(null);
		};

		const formatBytes = (bytes: number, decimals = 2) => {
			if (bytes === 0) return '0 BYTES';
			const k = 1024;
			const dm = decimals < 0 ? 0 : decimals;
			const sizes = ['BYTES', 'KB', 'MB', 'GB'];
			const i = Math.floor(Math.log(bytes) / Math.log(k));
			return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
		};

		const getFileExtension = (filename: string) => {
			return filename.split('.').pop()?.toUpperCase() || 'FILE';
		};

		return (
			<Sc.DropzoneWrapper
				as="label"
				htmlFor={rest.id || 'retro-doc-upload'}
				sx={sx}
				$color={color}
				$hasFile={!!file}
				$isDragOver={isDragOver}
				$isPressed={isPressed}
				$isUploading={isUploading}
				className={classNames(commonClassNames, className)}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onMouseDown={() => setIsPressed(true)}
				onMouseUp={() => setIsPressed(false)}
				onMouseLeave={() => setIsPressed(false)}
			>
				<Sc.HiddenInput
					id={rest.id || 'retro-doc-upload'}
					type="file"
					ref={resolvedRef}
					onChange={handleFileChange}
					{...rest}
				/>

				{isUploading ? (
					<ProgressBar />
				) : !file ? (
					<Sc.UploadPrompt>
						<Sc.UploadIconWrapper $color={color}>
							{/* <FloppyDiskIcon /> */}
						</Sc.UploadIconWrapper>
						<Sc.UploadText>
							{isDragOver ? 'DROP FILE HERE' : 'CLICK TO BROWSE'}
						</Sc.UploadText>
						<Sc.SubText>OR DRAG AND DROP</Sc.SubText>
						<Sc.BlinkingCursor>_</Sc.BlinkingCursor>
					</Sc.UploadPrompt>
				) : (
					<Sc.FileSelectedWrapper>
						<FileIcon type={file.type} />
						<Sc.FileInfo>
							<Sc.FileHeader>
								<Sc.FileType $color={color}>
									[{getFileExtension(file.name)}]
								</Sc.FileType>
								<Sc.FileStatus>● READY</Sc.FileStatus>
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
							title="Remove file [DEL]"
							aria-label="Remove file"
							$color={color}
						>
							<Sc.ButtonLabel>DEL</Sc.ButtonLabel>
						</Sc.RemoveButton>
					</Sc.FileSelectedWrapper>
				)}

				{/* Retro scan line effect */}
				<Sc.ScanLine />
			</Sc.DropzoneWrapper>
		);
	},
);

DocumentUpload.displayName = 'DocumentUpload';
