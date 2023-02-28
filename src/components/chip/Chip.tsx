import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Chip.styled';

export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warn';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The color of the Chip component..
	 *
	 * @default 'primary'
	 */
	color?: Color;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
	({ id, className, color = 'primary', children, ...rest }) => {
		return (
			<Sc.Chip
				id={id}
				$color={color}
				className={classNames('chip-root', className)}
				{...rest}
			>
				{children}
			</Sc.Chip>
		);
	},
);

Chip.displayName = 'Chip';
