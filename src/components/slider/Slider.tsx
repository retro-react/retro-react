/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { classNames } from '@src/utils/classNames';
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
	sx?: any;
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
			onChange,
			disabled = false,
			...rest
		},
		ref,
	) => {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			onChange && onChange(parseFloat(event.target.value));
		};

		return (
			<Sc.SliderWrapper className={classNames('slider-root', className)}>
				<Sc.Slider
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
					disabled={disabled}
					{...rest}
				/>
			</Sc.SliderWrapper>
		);
	},
);

Slider.displayName = 'Slider';
