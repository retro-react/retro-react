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
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({
		id,
		className,
		color = 'primary',
		size = 'medium',
		label,
		children,
		...rest
	}) => {
		return (
			<Sc.SelectWrapper $color={color}>
				{label && (
					<Sc.Label htmlFor={id} $color={color} $size={size}>
						{label}
					</Sc.Label>
				)}
				<Sc.Select
					id={id}
					$color={color}
					$size={size}
					className={classNames('select-root', className)}
					{...rest}
				>
					{children}
				</Sc.Select>
			</Sc.SelectWrapper>
		);
	},
);

Select.displayName = 'Select';
