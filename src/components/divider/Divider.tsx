/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import {
	ColorGradients,
	getColorGradientOptions,
} from '@src/utils/getColorGradients';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The orientation of the divider.
	 *
	 * @default 'horizontal'
	 */
	orientation?: 'vertical' | 'horizontal';
	/**
	 * The color of the divider.
	 *
	 * @default 'primary'
	 */
	color?: ColorGradients;
	/**
	 * Whether the divider should be a flex item. If `true`, the divider will fit to the width of its container and will not be full width.
	 *
	 * @default false
	 */
	flexItem?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * A divider with a gradient color. The gradient is defined by the `color` prop.
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
	(
		{
			sx,
			orientation = 'horizontal',
			color = 'primary',
			flexItem = false,
			...rest
		},
		ref,
	) => {
		const colorOptions = getColorGradientOptions(color);
		const isGradient = colorOptions.length > 1;

		return (
			<div
				{...rest}
				ref={ref}
				sx={{
					width: orientation === 'vertical' ? '2px' : '100%',
					height: orientation === 'horizontal' ? '2px' : '100%',
					background: isGradient ? undefined : colorOptions[0],
					backgroundImage: isGradient
						? `linear-gradient(${
								orientation === 'horizontal' ? 'to right' : 'to bottom'
						  }, ${colorOptions.join(', ')})`
						: undefined,
					alignSelf: flexItem ? 'stretch' : undefined,
					...sx,
				}}
			/>
		);
	},
);

Divider.displayName = 'Divider';
