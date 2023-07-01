/** @jsxImportSource theme-ui */
import { CSSProperties, forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Text.styled';

export type TextVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body1'
	| 'body2'
	| 'paragraph';

export type TextColor = ComponentColors | CSSProperties['color'];
export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The variant of the Text.
	 *
	 * @default 'paragraph'
	 */
	variant?: TextVariant;
	/**
	 * The color of the Text. Supports css color property and theme colors from library.
	 * Colors included in theme are: `primary`, `secondary`, `success`, `error`, `warn`, `greyscale` and `rainbow`.
	 *
	 * @default '#000000'
	 */
	color?: TextColor;
	/**
	 * Add bevel effect to Text.
	 *
	 * @default false
	 */
	bevel?: boolean;
	/**
	 * Add blink effect to Text.
	 *
	 * @default false
	 */
	blink?: boolean;
	/**
	 * The alignment of the Text.
	 *
	 * @default 'left'
	 */
	align?: CSSProperties['textAlign'];
	sx?: ThemeUICSSObject;
}

/**
 * Text with different variants. Used instead of HTML tags. Has bevel and blink effects.
 * Responsive font sizes are used for all variants. Use `paragraph` variant for generic text blocks.
 *
 * You can target the `Text` component with the global class `.text-root` in order to change the font family.
 *
 * @example
 * <Text variant="h1">
 * 	Heading 1
 * </Text>
 */
export const Text = forwardRef<HTMLDivElement, TextProps>(
	(
		{
			id,
			className,
			children,
			color = '#000000',
			variant = 'paragraph',
			align = 'left',
			bevel = false,
			blink = false,
			sx,
			...rest
		},
		ref,
	) => {
		const variantToElementMap: {
			[key in TextVariant]: keyof JSX.IntrinsicElements;
		} = {
			h1: 'h1',
			h2: 'h2',
			h3: 'h3',
			h4: 'h4',
			h5: 'h5',
			h6: 'h6',
			body1: 'p',
			body2: 'p',
			paragraph: 'p',
		};

		const ElementType = variantToElementMap[variant];

		return (
			<Sc.Text
				as={ElementType}
				$align={align}
				$bevel={bevel}
				$blink={blink}
				$color={color}
				$variant={variant}
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('text-root', className, commonClassNames)}
				{...rest}
			>
				{children}
			</Sc.Text>
		);
	},
);

Text.displayName = 'Text';
