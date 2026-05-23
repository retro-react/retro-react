/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Card.styled';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
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
		{ id, sx, className, children, header, image, footer, alt = '', ...rest },
		ref,
	) => {
		const [imageError, setImageError] = useState(false);

		useEffect(() => {
			setImageError(false);
		}, [image]);

		return (
			<Sc.Card
				ref={ref}
				id={id}
				role="group"
				aria-labelledby={id && header ? `${id}-title` : undefined}
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
						{header}
					</Sc.CardTitle>
				)}
				{image && !imageError && (
					<Sc.CardImageWrapper className="card-image-wrapper">
						<Sc.CardImage
							className="card-image"
							src={image}
							alt={alt}
							onError={() => setImageError(true)}
						/>
					</Sc.CardImageWrapper>
				)}
				<Sc.CardContent
					id={id ? `${id}-content` : undefined}
					className="card-content"
				>
					{children}
				</Sc.CardContent>
				{footer && (
					<Sc.CardFooter className="card-footer">{footer}</Sc.CardFooter>
				)}
			</Sc.Card>
		);
	},
);

Card.displayName = 'Card';
