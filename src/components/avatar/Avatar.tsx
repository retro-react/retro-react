/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Avatar.styled';

export type AvatarColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn'
	| 'greyscale'
	| 'greyscale-dark';

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
	 * Determines if the Avatar should have rounded edges.
	 *
	 * @default false
	 */
	rounded?: boolean;
	/**
	 * The content of the Avatar.
	 *
	 * @default undefined
	 */
	children?: string;
	/**
	 * The image source of the Avatar. If not provided, a pattern with text will be used.
	 *
	 * @default undefined
	 */
	src?: string;
	sx?: ThemeUICSSObject;
}

/**
 * Avatars are used to represent a user or entity.
 * They can be used to display a user's profile picture, initials or icon.
 *
 * @example
 * <Avatar color="success" size="large" variant="circle">
 * 	AB
 * </Avatar>
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	(
		{
			id,
			className,
			src,
			color = 'primary',
			size = 'medium',
			variant = 'circle',
			rounded = false,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		const [hasError, setHasError] = useState(false);

		useEffect(() => {
			setHasError(false);
		}, [src]);

		const resolvedSrc = src && !hasError ? src : undefined;

		return (
			<Sc.Avatar
				id={id}
				sx={sx}
				ref={ref}
				$src={resolvedSrc}
				$color={color}
				$size={size}
				$rounded={rounded}
				$variant={variant}
				className={classNames('avatar-root', className, commonClassNames)}
				aria-label={children}
				{...rest}
			>
				{src && !hasError && (
					<img
						src={src}
						alt=""
						onError={() => setHasError(true)}
						style={{ display: 'none' }}
						aria-hidden="true"
					/>
				)}
				<span>{children}</span>
			</Sc.Avatar>
		);
	},
);

Avatar.displayName = 'Avatar';
