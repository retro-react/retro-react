/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import closeIcon from '../../assets/svg/close_icon.svg';
import * as Sc from './Select.styled';

export type SelectColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn'
	| 'greyscale';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
	/**
	 * The label for the Select.
	 *
	 * @default undefined
	 */
	label?: string;
	/**
	 * The size of the Select.
	 *
	 * @default 'medium'
	 */
	size?: SelectSize;
	/**
	 * The color of the Select.
	 *
	 * @default 'primary'
	 */
	color?: SelectColor;
	/**
	 * If disabled is passed, the Select will be disabled.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * If required is passed, the Select will be required.
	 *
	 * @default false
	 */
	required?: boolean;
	/**
	 * The error message of the Select. Used for accessibility.
	 *
	 * @default undefined
	 */
	errorMessage?: string;
	/**
	 * The options of the Select.
	 *
	 * @default undefined
	 */
	children?: React.ReactNode;
	sx?: ThemeUICSSObject;
}

/**
 * Select components are used to pick an option from a set of options.
 *
 * @example
 * <Select label="Select an option">
 * 	<option value="1">Option 1</option>
 * 	<option value="2">Option 2</option>
 * 	<option value="3">Option 3</option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			id,
			className,
			color = 'primary',
			size = 'medium',
			sx,
			label,
			children,
			disabled = false,
			errorMessage,
			required = false,
			onChange,
			defaultValue,
			...rest
		},
		ref,
	) => {
		const [selectValue, setSelectValue] = useState(defaultValue);

		const handleChange = (event) => {
			if (onChange) onChange(event);
			setSelectValue(event.target.value);
		};

		const handleClear = () => {
			const event = {
				target: {
					value: '',
					id: id || '',
				},
			} as React.ChangeEvent<HTMLSelectElement>;

			setSelectValue('');
			if (onChange) onChange(event);
		};

		const ariaProps = {};
		if (!label) {
			ariaProps['aria-label'] = rest.placeholder || 'Select an option';
		}
		if (disabled) {
			ariaProps['aria-disabled'] = true;
		}
		if (errorMessage) {
			ariaProps['aria-errormessage'] = errorMessage;
			ariaProps['aria-invalid'] = true;
		}
		if (required) {
			ariaProps['aria-required'] = true;
		}

		return (
			<Sc.SelectWrapper
				$color={color}
				sx={sx}
				className={classNames('select-root', className, commonClassNames)}
			>
				{label && (
					<Sc.Label
						htmlFor={id}
						$color={color}
						$size={size}
						className="select-label"
						title={label}
						$disabled={disabled}
					>
						{label}
					</Sc.Label>
				)}
				<Sc.SelectContainer>
					<Sc.Select
						id={id}
						ref={ref}
						$color={color}
						$size={size}
						className="select-input"
						disabled={disabled}
						$required={required}
						value={selectValue}
						onChange={handleChange}
						{...ariaProps}
						{...rest}
					>
						{children}
					</Sc.Select>
					{selectValue && !required && (
						<Sc.ClearButton
							onClick={handleClear}
							$icon={closeIcon}
							aria-label="Remove button"
						/>
					)}
				</Sc.SelectContainer>
				{errorMessage && <Sc.Error>{errorMessage}</Sc.Error>}
			</Sc.SelectWrapper>
		);
	},
);

Select.displayName = 'Select';
