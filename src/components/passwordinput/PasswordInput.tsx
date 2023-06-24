/** @jsxImportSource theme-ui */
import { createRef, forwardRef, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import {
	PasswordInputBlock,
	PasswordInputContainer,
} from './PasswordInput.styled';

export type PasswordInputSizes = 'small' | 'medium';

export interface BasePasswordInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	/**
	 * Defines the pattern of the input fields. Can be a pattern from ComponentPatterns or 'none'.
	 *
	 * @default 'noise'
	 */
	pattern?: ComponentPatterns | 'none';

	/**
	 * Defines if the corners of the input fields should be rounded.
	 *
	 * @default true
	 */
	rounded?: boolean;

	/**
	 * Defines the color of the input fields. Can be a color from ComponentColors or 'greyscale'.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale';

	/**
	 * Defines the size of the input fields. Can be 'small' or 'medium'.
	 *
	 * @default 'medium'
	 */
	size?: PasswordInputSizes;

	/**
	 * Defines the number of input fields.
	 *
	 * @default 6
	 */
	length?: number;

	/**
	 * A function to be called when the password changes.
	 */
	onPasswordChange?: (password: string) => void;

	/**
	 * A theme-ui prop to pass custom styles.
	 */
	sx?: ThemeUICSSObject;
}

/**
 * PasswordInputs are used to collect user provided information. They are used to collect passwords.
 * The component creates a number of input fields that can be filled with a password.
 * Use the `onPasswordChange` prop to get the password when it changes.
 *
 * @example
 * <PasswordInput
 * 		pattern="noise"
 * 		color="primary"
 * 		size="medium"
 * 		rounded={true}
 * 		length={6}
 * 		onPasswordChange={(newPass: string) => console.log(newPass)}
 * />
 */
export const PasswordInput: React.FC<BasePasswordInputProps> = ({
	id,
	className,
	pattern = 'noise',
	color = 'primary',
	size = 'medium',
	rounded = true,
	length = 6,
	sx,
	onPasswordChange,
	value = '',
	...rest
}) => {
	length = Math.max(length, 1);
	const [values, setValues] = useState<string[]>(
		Array.from({ length }, (_, i) => value[i] || ''),
	);

	const inputRefs = useRef(
		new Array(length).fill(0).map(() => createRef<HTMLInputElement>()),
	);

	const focusInput = (inputIndex: number) => {
		if (inputRefs.current[inputIndex]) {
			inputRefs.current[inputIndex].current?.focus();
		}
	};

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		const target = event.target as HTMLInputElement;

		switch (event.key) {
			case 'Backspace':
				if (index > 0 && values[index] === '') {
					focusInput(index - 1);
				}
				break;
			case 'ArrowLeft':
				if (index > 0) {
					focusInput(index - 1);
				}
				break;
			case 'ArrowRight':
				if (index < length - 1) {
					focusInput(index + 1);
				}
				break;
			default:
				break;
		}

		// move the cursor to the end if the user tries to type
		if (index < length - 1 && target.value.length > 0) {
			target.setSelectionRange(1, 1);
		}
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const newValue = event.currentTarget.value;

		setValues((oldValues) => {
			const newValues = [...oldValues];
			newValues[index] = newValue;
			return newValues;
		});

		if (onPasswordChange) {
			const newValues = [...values];
			newValues[index] = newValue;
			const newPassword = newValues.join('');
			onPasswordChange(newPassword);
		}

		const isDeleting = newValue.length < 1;
		if (!isDeleting && index < length - 1) {
			focusInput(index + 1);
		}
	};

	const inputs = Array.from({ length }, (_, index) => (
		<PasswordInputBlock
			key={index}
			ref={inputRefs.current[index]}
			id={`${id}-${index}`}
			type="password"
			$pattern={pattern}
			$rounded={rounded}
			$color={color}
			$size={size}
			maxLength={1}
			className={classNames('password-input-root', className, commonClassNames)}
			sx={sx}
			onKeyDown={(e) => handleKeyDown(e, index)}
			onChange={(e) => handleChange(e, index)}
			{...rest}
		/>
	));

	return <PasswordInputContainer>{inputs}</PasswordInputContainer>;
};

PasswordInput.displayName = 'PasswordInput';
