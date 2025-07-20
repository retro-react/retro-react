/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import {
	PasswordInputContainer,
	PasswordInputField,
	PasswordToggleButton,
} from './PasswordInput.styled';

export type PasswordInputVariants =
	| 'outlined'
	| 'filled'
	| 'terminal'
	| 'classic';
export type PasswordInputSizes = 'small' | 'medium' | 'large' | string;

export interface PasswordInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	/**
	 * The variant of the PasswordInput.
	 * - classic: Deep sunken Windows 95/98 dialog style with heavy inset shadow
	 * - filled: Prominent raised 3D button-like appearance with outer shadow
	 * - outlined: Clean flat design with simple border and focus ring
	 * - terminal: Subtle dark terminal aesthetic with soft green text
	 *
	 * @default 'filled'
	 */
	variant?: PasswordInputVariants;

	/**
	 * The size of the PasswordInput.
	 * Supports predefined sizes: 'small', 'medium', 'large'
	 * Or custom size string for font-size
	 *
	 * @default 'medium'
	 */
	size?: PasswordInputSizes;

	/**
	 * Whether to show a toggle button to reveal/hide the password.
	 *
	 * @default true
	 */
	showToggle?: boolean;

	/**
	 * A function to be called when the password changes.
	 */
	onPasswordChange?: (password: string) => void;

	/**
	 * Theme-UI sx prop for additional styling
	 */
	sx?: ThemeUICSSObject;
}

/**
 * Retro-themed password input inspired by classic 90s computing aesthetics.
 *
 * Features four distinct authentic variants:
 * - Classic: Deep sunken Windows 95/98 dialog inputs with heavy inset shadows
 * - Filled: Prominent raised 3D button-style with outer drop shadows
 * - Outlined: Clean flat design with simple borders and focus rings
 * - Terminal: Subtle dark console style with soft phosphor green text
 *
 * @example
 * // Deep Windows 95 sunken style
 * <PasswordInput variant="classic" placeholder="Enter password..." />
 *
 * // Prominent 3D raised input (default)
 * <PasswordInput placeholder="Enter password..." />
 *
 * // Clean flat outlined style
 * <PasswordInput variant="outlined" placeholder="Password..." />
 *
 * // Subtle terminal style
 * <PasswordInput variant="terminal" placeholder="Enter passphrase..." />
 */
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	(
		{
			id,
			className,
			variant = 'filled',
			size = 'medium',
			showToggle = true,
			sx,
			onPasswordChange,
			onChange,
			...rest
		},
		ref,
	) => {
		const [showPassword, setShowPassword] = useState(false);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onPasswordChange?.(e.target.value);
			onChange?.(e);
		};

		const togglePasswordVisibility = () => {
			setShowPassword(!showPassword);
		};

		return (
			<PasswordInputContainer
				className={classNames(
					'password-input-root',
					className,
					commonClassNames,
				)}
				sx={sx}
			>
				<PasswordInputField
					{...rest}
					ref={ref}
					id={id}
					type={showPassword ? 'text' : 'password'}
					$variant={variant}
					$size={size}
					onChange={handleChange}
					className="password-input-field"
				/>
				{showToggle && (
					<PasswordToggleButton
						type="button"
						$variant={variant}
						onClick={togglePasswordVisibility}
						className="password-toggle-button"
						aria-label={showPassword ? 'Hide password' : 'Show password'}
						tabIndex={-1}
					>
						{showPassword ? '●' : '○'}
					</PasswordToggleButton>
				)}
			</PasswordInputContainer>
		);
	},
);

PasswordInput.displayName = 'PasswordInput';
