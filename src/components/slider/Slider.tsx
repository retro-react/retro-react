/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Slider.styled';

export interface SliderProps
	extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
	/**
	 * The value of the Slider. When provided, the Slider is controlled.
	 *
	 * @default undefined
	 */
	value?: number;
	/**
	 * The default value of the Slider when uncontrolled.
	 *
	 * @default 0
	 */
	defaultValue?: number;
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
			value,
			defaultValue = 0,
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
		const isControlled = value !== undefined;
		const [internalValue, setInternalValue] = useState(defaultValue);
		const [isDragging, setIsDragging] = useState(false);
		const [isHovering, setIsHovering] = useState(false);
		const [tooltipPosition, setTooltipPosition] = useState(0);
		const sliderRef = useRef<HTMLInputElement | null>(null);
		const setRefs = (node: HTMLInputElement | null) => {
			sliderRef.current = node;
			if (typeof ref === 'function') ref(node);
			else if (ref)
				(ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
		};

		const currentValue = value ?? internalValue;

		const updateTooltipPosition = (currentValue: number) => {
			const percentage = ((currentValue - min) / (max - min)) * 100;
			setTooltipPosition(Math.max(5, Math.min(95, percentage)));
		};

		useEffect(() => {
			const percentage = ((currentValue - min) / (max - min)) * 100;
			setTooltipPosition(Math.max(5, Math.min(95, percentage)));
		}, [currentValue, min, max]);

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = Number(event.target.value);
			if (!isControlled) {
				setInternalValue(newValue);
			}
			updateTooltipPosition(newValue);
			onChange?.(newValue);
		};

		const handleMouseDown = (event: React.MouseEvent) => {
			if (!disabled) {
				setIsDragging(true);
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

		const tickCount = Math.floor((max - min) / step) + 1;
		const tickMarks =
			showTicks && tickCount <= 100
				? Array.from({ length: tickCount }, (_, i) => min + i * step)
				: [];

		const shouldShowTooltip = showTooltip && (isDragging || isHovering);

		return (
			<Sc.SliderWrapper
				className={classNames('slider-root', className, commonClassNames)}
			>
				{shouldShowTooltip && (
					<Sc.Tooltip $leftPosition={tooltipPosition}>
						{marks?.[currentValue] || currentValue}
					</Sc.Tooltip>
				)}

				{showTicks && tickMarks.length > 0 && (
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
					ref={setRefs}
					id={id}
					sx={sx}
					className="slider-input"
					type="range"
					min={min}
					max={max}
					step={step}
					value={currentValue}
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
