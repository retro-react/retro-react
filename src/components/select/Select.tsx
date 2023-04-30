/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Select.styled';

export type SelectColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

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
	 * The options of the Select.
	 *
	 * @default undefined
	 */
	children?: React.ReactNode;
	sx?: any;
}

/**
 * Selects are used to select an option from a set of options.
 *
 * @example
 * <Select label="Select an option">
 * 	<option value="1">Option 1</option>
 * 	<option value="2">Option 2</option>
 * 	<option value="3">Option 3</option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({
		id,
		className,
		color = 'primary',
		size = 'medium',
		sx,
		label,
		children,
		...rest
	}) => {
		return (
			<Sc.SelectWrapper
				$color={color}
				sx={sx}
				className={classNames('select-root', className)}
			>
				{label && (
					<Sc.Label
						htmlFor={id}
						$color={color}
						$size={size}
						className="select-label"
					>
						{label}
					</Sc.Label>
				)}
				<Sc.Select
					id={id}
					$color={color}
					$size={size}
					className="select-input"
					{...rest}
				>
					{children}
				</Sc.Select>
			</Sc.SelectWrapper>
		);
	},
);

Select.displayName = 'Select';
