/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
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
			...rest
		},
		ref,
	) => {
		const ariaProps = {};
		if (!label) {
			ariaProps['aria-label'] = rest.placeholder || 'Select an option';
		}
		if (disabled) {
			ariaProps['aria-disabled'] = true;
		}
		if (errorMessage) {
			ariaProps['aria-errormessage'] = errorMessage;
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
				<Sc.Select
					id={id}
					ref={ref}
					$color={color}
					$size={size}
					className="select-input"
					disabled={disabled}
					{...ariaProps}
					{...rest}
				>
					{children}
				</Sc.Select>
			</Sc.SelectWrapper>
		);
	},
);

Select.displayName = 'Select';
