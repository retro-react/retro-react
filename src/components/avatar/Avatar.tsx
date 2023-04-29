/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import * as Sc from './Avatar.styled';

export type AvatarColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarVariant = 'circle' | 'square';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of the Avatar.
	 *
	 * @default 'medium'
	 */
	size?: AvatarSize;
	/**
	 * The variant of the Avatar.
	 *
	 * @default 'circle'
	 */
	variant?: AvatarVariant;
	/**
	 * The color of the Avatar.
	 *
	 * @default 'primary'
	 */
	color?: AvatarColor;
	/**
	 * The content of the Avatar.
	 *
	 * @default undefined
	 */
	children?: string;
	sx?: any;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	({
		id,
		className,
		color = 'primary',
		size = 'medium',
		variant = 'circle',
		children,
		sx,
		...rest
	}) => {
		return (
			<Sc.Avatar
				id={id}
				sx={sx}
				$color={color}
				$size={size}
				$variant={variant}
				className={classNames('avatar-root', className)}
				{...rest}
			>
				{children}
			</Sc.Avatar>
		);
	},
);

Avatar.displayName = 'Avatar';
