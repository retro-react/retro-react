/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
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
	 * If `true`, the Slider will show a tooltip with the current value when dragging.
	 *
	 * @default true
	 */
	showTooltip?: boolean;
	/**
	 * If `true`, the Slider will show tick marks along the track.
	 *
	 * @default false
	 */
	showTicks?: boolean;
	/**
	 * Custom labels for specific values. Object with value as key and label as value.
	 *
	 * @default undefined
	 */
	marks?: Record<number, string>;
	sx?: ThemeUICSSObject;
}

/**
 * Retro-styled slider for range value selection with authentic Windows 95/98 aesthetics.
 *
 * Features classic 3D beveled track and thumb with optional tooltip and tick marks.
 * Designed for fluid, responsive interaction while maintaining pixel-perfect retro styling.
 *
 * @example
 * // Basic volume slider
 * <Slider value={75} min={0} max={100} onChange={setVolume} />
 *
 * // Slider with custom marks and tooltip
 * <Slider
 *   value={50}
 *   showTicks
 *   marks={{ 0: 'Min', 50: 'Mid', 100: 'Max' }}
 *   showTooltip
 * />
 *
 * // Disabled slider
 * <Slider value={25} disabled />
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
			showTooltip = true,
			showTicks = false,
			marks,
			onChange,
			disabled = false,
			...rest
		},
		ref,
	) => {
		const [internalValue, setInternalValue] = useState(value);
		const [isDragging, setIsDragging] = useState(false);
		const [isHovering, setIsHovering] = useState(false);
		const [tooltipPosition, setTooltipPosition] = useState(0);
		const sliderRef = useRef<HTMLInputElement>(null);

		// Sync internal value with prop value
		useEffect(() => {
			if (value !== undefined) {
				setInternalValue(value);
			}
		}, [value]);

		// Calculate tooltip position more precisely based on current value
		const updateTooltipPosition = (currentValue: number) => {
			const percentage = ((currentValue - min) / (max - min)) * 100;
			// Clamp between 5% and 95% to keep tooltip visible
			setTooltipPosition(Math.max(5, Math.min(95, percentage)));
		};

		useEffect(() => {
			updateTooltipPosition(internalValue);
		}, [internalValue, min, max]);

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = Number(event.target.value);
			setInternalValue(newValue);
			updateTooltipPosition(newValue);
			onChange?.(newValue);
		};

		const handleMouseDown = (event: React.MouseEvent) => {
			if (!disabled) {
				setIsDragging(true);
				// Update tooltip position immediately on mouse down
				if (sliderRef.current) {
					const rect = sliderRef.current.getBoundingClientRect();
					const percentage = ((event.clientX - rect.left) / rect.width) * 100;
					setTooltipPosition(Math.max(5, Math.min(95, percentage)));
				}
			}
		};

		const handleMouseMove = (event: React.MouseEvent) => {
			if (isDragging && sliderRef.current) {
				const rect = sliderRef.current.getBoundingClientRect();
				const percentage = ((event.clientX - rect.left) / rect.width) * 100;
				setTooltipPosition(Math.max(5, Math.min(95, percentage)));
			}
		};

		const handleMouseEnter = () => {
			if (!disabled) {
				setIsHovering(true);
			}
		};

		const handleMouseLeave = () => {
			setIsHovering(false);
		};

		// Add global mouse events for better tracking
		useEffect(() => {
			if (isDragging) {
				const handleGlobalMouseMove = (event: MouseEvent) => {
					if (sliderRef.current) {
						const rect = sliderRef.current.getBoundingClientRect();
						const percentage = ((event.clientX - rect.left) / rect.width) * 100;
						setTooltipPosition(Math.max(5, Math.min(95, percentage)));
					}
				};

				const handleGlobalMouseUp = () => {
					setIsDragging(false);
				};

				document.addEventListener('mousemove', handleGlobalMouseMove);
				document.addEventListener('mouseup', handleGlobalMouseUp);

				return () => {
					document.removeEventListener('mousemove', handleGlobalMouseMove);
					document.removeEventListener('mouseup', handleGlobalMouseUp);
				};
			}
		}, [isDragging]);

		// Generate tick marks if requested
		const tickMarks = showTicks
			? Array.from(
					{ length: Math.floor((max - min) / step) + 1 },
					(_, i) => min + i * step,
			  )
			: [];

		// Show tooltip when dragging or hovering (if showTooltip is true)
		const shouldShowTooltip = showTooltip && (isDragging || isHovering);

		return (
			<Sc.SliderWrapper
				className={classNames('slider-root', className, commonClassNames)}
			>
				{shouldShowTooltip && (
					<Sc.Tooltip $leftPosition={tooltipPosition}>
						{marks?.[internalValue] || internalValue}
					</Sc.Tooltip>
				)}

				{showTicks && (
					<Sc.TickContainer>
						{tickMarks.map((tick) => (
							<Sc.Tick
								key={tick}
								$position={((tick - min) / (max - min)) * 100}
							/>
						))}
					</Sc.TickContainer>
				)}

				{marks && (
					<Sc.MarksContainer>
						{Object.entries(marks).map(([value, label]) => (
							<Sc.Mark
								key={value}
								$position={((Number(value) - min) / (max - min)) * 100}
							>
								{label}
							</Sc.Mark>
						))}
					</Sc.MarksContainer>
				)}

				<Sc.Slider
					ref={sliderRef}
					id={id}
					sx={sx}
					className="slider-input"
					type="range"
					min={min}
					max={max}
					step={step}
					value={internalValue}
					onChange={handleChange}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					disabled={disabled}
					{...rest}
				/>
			</Sc.SliderWrapper>
		);
	},
);

Slider.displayName = 'Slider';
