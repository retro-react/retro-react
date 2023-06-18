/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Card.styled';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The library colors or hex color for background of the Card.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | string;
	/**
	 * The pattern of the Card.
	 *
	 * @default 'noise'
	 */
	pattern?: ComponentPatterns;
	/**
	 * The header of the Card.
	 *
	 * @default undefined
	 *
	 */
	header?: React.ReactNode;
	/**
	 * The image of the Card.
	 *
	 * @default undefined
	 */
	image?: string;
	/**
	 * The alt text of the Card image.
	 *
	 * @default ''
	 */
	alt?: string;
	/**
	 * The footer of the Card.
	 *
	 * @default undefined
	 */
	footer?: React.ReactNode;

	sx?: ThemeUICSSObject;
}

/**
 * Cards serve as a container for rich content, such as images and text.
 *
 * @example
 * <Card header="Hello World" image="getImageUrl()" footer="Goodbye World">
 * 		Content
 * </Card>
 *
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			id,
			sx,
			className,
			children,
			header,
			image,
			footer,
			color = 'primary',
			pattern = 'noise',
			alt = '',
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Card
				$pattern={pattern}
				$color={color}
				ref={ref}
				id={id}
				role="group"
				aria-labelledby={id ? `${id}-title` : undefined}
				aria-describedby={id ? `${id}-content` : undefined}
				className={classNames('card-root', className, commonClassNames)}
				sx={sx}
				{...rest}
			>
				{header && (
					<Sc.CardTitle
						id={id ? `${id}-title` : undefined}
						className="card-header"
					>
						{typeof header === 'string' ? header : header}
					</Sc.CardTitle>
				)}
				{image && (
					<Sc.CardImageWrapper className="card-image-wrapper">
						<Sc.CardImage className="card-image" src={image} alt={alt} />
					</Sc.CardImageWrapper>
				)}
				<Sc.CardContent
					$color={color}
					id={id ? `${id}-content` : undefined}
					className="card-content"
				>
					{children}
				</Sc.CardContent>
				{footer && (
					<Sc.CardFooter className="card-footer">
						{typeof footer === 'string' ? footer : footer}
					</Sc.CardFooter>
				)}
			</Sc.Card>
		);
	},
);

Card.displayName = 'Card';
