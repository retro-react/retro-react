/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import {
	StatIcon,
	StatisticsWrapper,
	StatLabel,
	StatNumber,
	StatNumberWrapper,
	StatPrefix,
	StatSuffix,
} from './Statistics.styled';

export type StatisticsVariant = 'horizontal' | 'vertical';
export type StatisticsSize = 'small' | 'medium' | 'large';

export interface StatisticsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The numeric value of the statistic.
	 *
	 */
	number: string;
	/**
	 * The description of the number.
	 *
	 * @default ''
	 */
	label?: string;
	/**
	 * The color scheme of the statistic. Accepts library colors (`primary`, `secondary`, `success`, `greyscale`, etc. ) or hex colors.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale' | 'none' | string;
	/**
	 * The size of the displayed number.
	 *
	 * @default 'medium'
	 */
	size?: StatisticsSize;
	/**
	 * The icon displayed next to the number. Accepts any React node but is intended to be used with icons.
	 *
	 * @default undefined
	 */
	icon?: React.ReactNode;
	/**
	 * The prefix text displayed before the number.
	 *
	 * @default undefined
	 */
	prefix?: string;
	/**
	 * The suffix text displayed after the number.
	 *
	 * @default undefined
	 */
	suffix?: string;
	/**
	 * The direction of the statistic. Can be either horizontal or vertical.
	 *
	 * @default 'vertical'
	 */
	direction?: StatisticsVariant;
	/**
	 * Optional click handler for the entire component.
	 *
	 * @default undefined
	 */
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	sx?: ThemeUICSSObject;
}

/**
 * The Statistics component is designed to display key numerical information with an optional label.
 * This component is highly customizable, allowing for a selection of colors, sizes, and additional prefix and suffix texts.
 * The component also supports vertical and horizontal layouts and icon display.
 *
 * @example
 * <Statistics number="1,000" label="Total Users" />
 */
export const Statistics = forwardRef<HTMLDivElement, StatisticsProps>(
	(
		{
			id,
			className,
			number = '0',
			label = '',
			size = 'medium',
			icon,
			color = 'primary',
			direction = 'vertical',
			prefix = '',
			suffix = '',
			onClick,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<StatisticsWrapper
				$size={size}
				$color={color}
				$direction={direction}
				$isClickable={!!onClick}
				className={classNames('statistics-root', className, commonClassNames)}
				ref={ref}
				id={id}
				sx={sx}
				{...rest}
			>
				{icon && (
					<StatIcon $size={size} className="statistics-icon-container">
						{icon}
					</StatIcon>
				)}
				<StatNumberWrapper $size={size} $direction={direction}>
					<StatNumber
						$size={size}
						title={typeof number === 'string' ? number : ''}
						className="statistics-number"
					>
						{prefix && (
							<StatPrefix $size={size} className="statistics-prefix">
								{prefix}
							</StatPrefix>
						)}
						{number}
						{suffix && (
							<StatSuffix $size={size} className="statistics-suffix">
								{suffix}
							</StatSuffix>
						)}
					</StatNumber>
					<StatLabel $size={size} title={label} className="statistics-label">
						{label}
					</StatLabel>
				</StatNumberWrapper>
			</StatisticsWrapper>
		);
	},
);

Statistics.displayName = 'Statistics';
