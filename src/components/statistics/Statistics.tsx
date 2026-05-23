/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { toKebabCase } from '../../utils/ToKebabCase';
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
 * Display a number with an optional label, prefix, suffix, and icon.
 * Supports vertical and horizontal layouts and three sizes.
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
			direction = 'vertical',
			prefix = '',
			suffix = '',
			onClick,
			sx,
			...rest
		},
		ref,
	) => {
		const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
			if (!onClick) return;
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				onClick(
					event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
				);
			}
		};

		return (
			<StatisticsWrapper
				$size={size}
				$direction={direction}
				title={label}
				$isClickable={!!onClick}
				className={classNames('statistics-root', className, commonClassNames)}
				ref={ref}
				id={id}
				sx={sx}
				onClick={onClick}
				onKeyDown={onClick ? handleKeyDown : undefined}
				role={onClick ? 'button' : undefined}
				tabIndex={onClick ? 0 : undefined}
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
						title={`${prefix} ${number} ${suffix}`}
						className="statistics-number"
						id={`${id || label}-number`}
						aria-labelledby={`${id || toKebabCase(label)}-label`}
						aria-live="polite"
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
					<StatLabel
						$size={size}
						title={label}
						className="statistics-label"
						id={`${id || toKebabCase(label)}-label`}
					>
						{label}
					</StatLabel>
				</StatNumberWrapper>
			</StatisticsWrapper>
		);
	},
);

Statistics.displayName = 'Statistics';
