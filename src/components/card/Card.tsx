/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Card.styled';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The hex color background of the Card.
	 *
	 * @default '#8fbc8f'
	 */
	color?: string;
	/**
	 * The pattern of the Card.
	 *
	 * @default 'stripes'
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
	 * The footer of the Card.
	 *
	 * @default undefined
	 */
	footer?: React.ReactNode;
	sx?: any;
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
			color = '#8fbc8f',
			pattern = 'stripes',
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
				className={classNames('card-root', className, commonClassNames)}
				sx={sx}
				{...rest}
			>
				{typeof header === 'string' ? (
					<Sc.CardTitle className="card-header">{header}</Sc.CardTitle>
				) : (
					header
				)}
				{image && (
					<Sc.CardImageWrapper className="card-image-wrapper">
						<Sc.CardImage className="card-image" src={image} />
					</Sc.CardImageWrapper>
				)}
				<Sc.CardContent className="card-content">{children}</Sc.CardContent>
				{typeof footer === 'string' ? (
					<Sc.CardFooter className="card-footer">{footer}</Sc.CardFooter>
				) : (
					footer
				)}
			</Sc.Card>
		);
	},
);

Card.displayName = 'Card';
