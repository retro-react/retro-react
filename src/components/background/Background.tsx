// Background.tsx

/** @jsxImportSource theme-ui */
import { CSSProperties, forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Background.styled';

export interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background color of the Background.
	 *
	 * @default '#000000'
	 */
	color: CSSProperties['color'];

	/**
	 * The background image of the Background.
	 */
	backgroundImage?: string;

	/**
	 * The background repeat property of the Background.
	 */
	backgroundRepeat?:
		| 'repeat'
		| 'no-repeat'
		| 'repeat-x'
		| 'repeat-y'
		| 'inherit'
		| 'initial'
		| 'unset';

	/**
	 * The background size property of the Background.
	 */
	backgroundSize?:
		| 'auto'
		| 'cover'
		| 'contain'
		| 'inherit'
		| 'initial'
		| 'unset';

	/**
	 * The background position property of the Background.
	 */
	backgroundPosition?:
		| 'left top'
		| 'left center'
		| 'left bottom'
		| 'right top'
		| 'right center'
		| 'right bottom'
		| 'center top'
		| 'center center'
		| 'center bottom'
		| 'inherit'
		| 'initial'
		| 'unset';

	sx?: ThemeUICSSObject;
}

/**
 * The Background component is used to display a background.
 * It can be used to display a background image or a background color.
 * It accepts `children` prop that will be displayed on top of the background.
 * Background will take the full width and height of its parent.
 *
 * @example
 * <Background color="darkseagreen" backgroundImage="/images/background.jpg" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center">
 * 	<Container>
 * 		<Text>Hello World</Text>
 * 	</Container>
 * </Background>
 */
export const Background = forwardRef<HTMLDivElement, BackgroundProps>(
	(
		{
			id,
			className,
			children,
			color = '#000000',
			backgroundImage,
			backgroundRepeat,
			backgroundSize,
			backgroundPosition,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Background
				$color={color}
				$backgroundImage={backgroundImage}
				$backgroundRepeat={backgroundRepeat}
				$backgroundSize={backgroundSize}
				$backgroundPosition={backgroundPosition}
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('background-root', className, commonClassNames)}
				{...rest}
			>
				<div style={{ position: 'relative' }}>{children}</div>
			</Sc.Background>
		);
	},
);

Background.displayName = 'Background';
