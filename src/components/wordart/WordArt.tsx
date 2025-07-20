/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './WordArt.styled';

export type WordArtStyle =
	| 'classic'
	| 'beveled'
	| 'shadowed'
	| 'outlined'
	| 'retro3d'
	| 'pixelated'
	| 'rainbow'
	| 'wavy'
	| 'curved'
	| 'arch'
	| 'extruded'
	| 'perspective'
	| 'inflate';

export type WordArtVariant =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'retro'
	| 'terminal';

export type WordArtSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface WordArtProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The art style of the WordArt.
	 * - classic: Standard retro text styling
	 * - beveled: Raised 3D effect with authentic borders
	 * - shadowed: Drop shadow effect
	 * - outlined: Outlined text with retro colors
	 * - retro3d: Authentic 3D text effect from the era
	 * - pixelated: Pixel-perfect bitmap-style text
	 * - rainbow: Classic rainbow gradient effect
	 * - wavy: Wavy text transformation
	 * - curved: 3D perspective curved effect
	 * - arch: True arched text with individual letter positioning
	 * - extruded: Thick 3D dimensional text with deep shadow layers
	 * - perspective: 3D perspective transformation
	 * - inflate: Inflated bubble-like effect
	 * - perspective: 3D perspective transformation
	 * - inflate: Inflated bubble-like effect
	 *
	 * @default 'classic'
	 */
	artStyle?: WordArtStyle;
	/**
	 * The visual variant of the WordArt.
	 * - primary: Classic blue retro styling
	 * - secondary: Classic gray styling
	 * - success: Classic green styling
	 * - warning: Classic yellow styling
	 * - retro: Classic rainbow retro colors
	 * - terminal: Green terminal text style
	 *
	 * @default 'primary'
	 */
	variant?: WordArtVariant;
	/**
	 * The size of the WordArt.
	 *
	 * @default 'medium'
	 */
	size?: WordArtSize;
	/**
	 * The rotation of the WordArt in degrees.
	 *
	 * @default 0
	 */
	rotation?: number;
	sx?: ThemeUICSSObject;
}

/**
 * Authentic retro WordArt component inspired by classic desktop publishing software.
 *
 * Features authentic 80s/90s text styling with:
 * - Classic beveled and 3D effects
 * - Retro color schemes
 * - Pixelated styling options
 * - Authentic shadow and outline effects
 * - Period-appropriate fonts and sizing
 *
 * @example
 * // Classic beveled text
 * <WordArt variant="primary" artStyle="beveled">
 * 	RETRO COMPUTING
 * </WordArt>
 *
 * // Terminal-style text
 * <WordArt variant="terminal" artStyle="outlined">
 * 	SYSTEM READY
 * </WordArt>
 */
export const WordArt = forwardRef<HTMLDivElement, WordArtProps>(
	(
		{
			id,
			sx,
			className,
			children,
			variant = 'primary',
			artStyle = 'classic',
			size = 'medium',
			rotation = 0,
			...rest
		},
		ref,
	) => {
		// Split text into individual spans for arch effect
		const renderText = () => {
			if (artStyle === 'arch' && typeof children === 'string') {
				return children
					.split('')
					.map((char, index) => (
						<span key={index}>{char === ' ' ? '\u00A0' : char}</span>
					));
			}
			return children;
		};

		return (
			<Sc.WordArt
				$variant={variant}
				$size={size}
				$artStyle={artStyle}
				$rotation={rotation}
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('wordart-root', className, commonClassNames)}
				{...rest}
			>
				{renderText()}
			</Sc.WordArt>
		);
	},
);

WordArt.displayName = 'WordArt';
