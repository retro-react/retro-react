/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Slider.styled';

export interface SliderProps
	extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
	/**
	 * The value of the Slider.
	 *
	 * @default undefined
	 */
	value?: number;
	/**
	 * The minimum allowed value of the Slider.
	 *
	 * @default 0
	 */
	min?: number;
	/**
	 * The maximum allowed value of the Slider.
	 *
	 * @default 100
	 */
	max?: number;
	/**
	 * The granularity the Slider can step through values.
	 *
	 * @default 1
	 */
	step?: number;
	/**
	 * Callback fired when the value changes.
	 *
	 * @default undefined
	 *
	 * @param {number} value The new value of the Slider.
	 */
	onChange?: (value: number) => void;
	/**
	 * If `true`, the Slider will be disabled.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * The color of the Slider.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors;
	/**
	 * If `true`, the Slider will show a tooltip with the current value.
	 *
	 * @default true
	 */
	showTooltip?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * Sliders allow users to make selections from a range of values.
 *
 * @example
 * <Slider value={50} />
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
	(
		{
			id,
			sx,
			className,
			value = 0,
			min = 0,
			max = 100,
			step = 1,
			color = 'primary',
			showTooltip = true,
			onChange,
			disabled = false,
			...rest
		},
		ref,
	) => {
		const [sliderValue, setSliderValue] = useState(value);
		const [isSliderMoving, setIsSliderMoving] = useState(false);
		const [tooltipPosition, setTooltipPosition] = useState(0);

		useEffect(() => {
			const newValue = ((sliderValue - min) * 100) / (max - min);
			const newPosition = Math.max(0, Math.min(100, newValue));
			setTooltipPosition(newPosition);
		}, [sliderValue, min, max]);

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			setSliderValue(Number(event.target.value));
			onChange && onChange(parseFloat(event.target.value));
		};

		useEffect(() => {
			const handleMouseUp = () => {
				setIsSliderMoving(false);
			};

			window.addEventListener('mouseup', handleMouseUp);

			return () => {
				window.removeEventListener('mouseup', handleMouseUp);
			};
		}, []);

		const handleMouseDown = () => {
			setIsSliderMoving(true);
		};

		return (
			<Sc.SliderWrapper
				className={classNames('slider-root', className, commonClassNames)}
			>
				{showTooltip && isSliderMoving && (
					<Sc.Tooltip $leftPosition={tooltipPosition} $color={color}>
						{sliderValue}
					</Sc.Tooltip>
				)}
				<Sc.Slider
					$color={color}
					$value={value}
					ref={ref}
					id={id}
					sx={sx}
					className="slider-input"
					type="range"
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={handleChange}
					onMouseDown={handleMouseDown}
					disabled={disabled}
					{...rest}
				/>
			</Sc.SliderWrapper>
		);
	},
);

Slider.displayName = 'Slider';
