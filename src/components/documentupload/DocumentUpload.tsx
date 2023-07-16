/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { alterColorEnhanced } from '@src/utils/alterColor';
import { classNames } from '@src/utils/classNames';
import getColorScheme from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import { WHITE } from '@src/constants/colors';
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
	extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
	/**
	 * The color of the DocumentUpload.
	 *
	 * @default 'primary'
	 */
	color?: UploadColor;
	/**
	 * The pattern of the DocumentUpload.
	 *
	 * @default 'noise'
	 */
	pattern?: ComponentPatterns;
	/**
	 * The file types that the DocumentUpload accepts.
	 *
	 * @example '.jpg,.png,.doc,.pdf'
	 */
	accept?: string;
	sx?: ThemeUICSSObject;
	onChange?: (file: File | null) => void;
}

/**
 * The DocumentUpload component is used to create a document upload input field. It returns a File object in the onChange callback.
 *
 * @example
 * <DocumentUpload color="primary" pattern="noise" onChange={file => console.log(file)} />
 */
export const DocumentUpload = forwardRef<HTMLInputElement, DocumentUploadProps>(
	(
		{
			id,
			sx,
			className,
			color = 'primary',
			pattern = 'noise',
			onChange,
			...rest
		},
		ref,
	) => {
		const [file, setFile] = useState<File | null>(null);

		const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setFile(event.target.files?.[0] || null);
			if (onChange) onChange(event.target.files?.[0] || null);
		};

		const removeFile = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
			e.stopPropagation();
			e.preventDefault();
			setFile(null);
			if (onChange) onChange(null);
		};

		return (
			<Sc.DocumentUploadWrapper
				sx={sx}
				$color={color}
				$pattern={pattern}
				role="button"
				tabIndex={0}
				aria-label={file ? `Selected file, ${file.name}` : 'No file selected'}
			>
				<Sc.DocumentUpload
					type="file"
					ref={ref}
					id={id}
					onChange={handleFileChange}
					className={classNames(
						'documentupload-root',
						className,
						commonClassNames,
					)}
					{...rest}
					tabIndex={-1}
				/>

				<Sc.DisplayWrapper>
					{!file ? (
						<Sc.UploadIcon
							$color={color}
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								fill={alterColorEnhanced(getColorScheme(color), 70)}
								d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-7 4v-5h2v3h12v-3h2v5H4Z"
							/>
						</Sc.UploadIcon>
					) : (
						<div
							style={{
								position: 'relative',
								maxWidth: '100%',
							}}
						>
							<Sc.FileName $color={color}>
								<span>{file.name}</span>
								<span>({file.size} bytes)</span>
							</Sc.FileName>
							<Sc.StyledSVG
								color={color}
								onClick={removeFile}
								aria-hidden="true"
							>
								<line
									x1="6"
									y1="6"
									x2="18"
									y2="18"
									style={{ stroke: WHITE }}
								></line>
								<line
									x1="6"
									y1="18"
									x2="18"
									y2="6"
									style={{ stroke: WHITE }}
								></line>
							</Sc.StyledSVG>
						</div>
					)}
				</Sc.DisplayWrapper>
			</Sc.DocumentUploadWrapper>
		);
	},
);

DocumentUpload.displayName = 'DocumentUpload';
