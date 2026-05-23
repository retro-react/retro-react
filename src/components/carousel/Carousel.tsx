/** @jsxImportSource theme-ui */
import {
	Children,
	forwardRef,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { usePrefersReducedMotion } from '../../utils/usePrefersReducedMotion';
import * as Sc from './Carousel.styled';

export interface CarouselProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
	/**
	 * The interval between slides, in milliseconds.
	 *
	 * @default 3000
	 */
	interval?: number;
	/**
	 * The slides of the Carousel.
	 *
	 * @default []
	 */
	children?: ReactNode | ReactNode[];
	/**
	 * Hide the arrow buttons.
	 *
	 * @default false
	 */
	hideArrows?: boolean;
	/**
	 * Controls the active slide index. When provided, the Carousel is controlled.
	 *
	 * @default undefined
	 */
	activeIndex?: number;
	/**
	 * Callback fired when the active slide index changes.
	 *
	 * @default undefined
	 */
	onChange?: (index: number) => void;
	sx?: ThemeUICSSObject;
}

/**
 * Carousel component with authentic WIN31 styling for displaying a slideshow of content.
 * Features retro-styled navigation buttons and dot indicators reminiscent of early multimedia software.
 *
 * The component will automatically change the size depending on the content. To minimize layout shifts,
 * it is recommended to set a fixed size for images that will work for all screen sizes.
 *
 * @example
 * <Carousel interval={5000}>
 *   <img src="image1.jpg" alt="Slide 1" />
 *   <img src="image2.jpg" alt="Slide 2" />
 *   <img src="image3.jpg" alt="Slide 3" />
 * </Carousel>
 */
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
	(
		{
			id,
			className,
			children,
			interval = 3000,
			hideArrows = false,
			activeIndex: activeIndexProp,
			onChange,
			sx,
			...rest
		},
		ref,
	) => {
		const slides = Children.toArray(children);
		const slideCount = slides.length;
		const reducedMotion = usePrefersReducedMotion();

		const isControlled = activeIndexProp !== undefined;
		const [internalIndex, setInternalIndex] = useState(0);
		const activeIndex = activeIndexProp ?? internalIndex;
		const [isPaused, setIsPaused] = useState(false);

		const setActiveIndex = useCallback(
			(updater: number | ((prev: number) => number)) => {
				const current = activeIndexProp ?? internalIndex;
				const next =
					typeof updater === 'function'
						? (updater as (prev: number) => number)(current)
						: updater;
				if (!isControlled) {
					setInternalIndex(next);
				}
				if (onChange) {
					onChange(next);
				}
			},
			[isControlled, activeIndexProp, internalIndex, onChange],
		);

		const setActiveIndexRef = useRef(setActiveIndex);
		setActiveIndexRef.current = setActiveIndex;

		useEffect(() => {
			if (slideCount <= 1 || isPaused || reducedMotion) return;

			const timer = setTimeout(() => {
				setActiveIndexRef.current((prevIndex) =>
					prevIndex >= slideCount - 1 ? 0 : prevIndex + 1,
				);
			}, interval);

			return () => clearTimeout(timer);
		}, [activeIndex, slideCount, interval, isPaused, reducedMotion]);

		const handlePrev = useCallback(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === 0 ? slideCount - 1 : prevIndex - 1,
			);
		}, [setActiveIndex, slideCount]);

		const handleNext = useCallback(() => {
			setActiveIndex((prevIndex) =>
				prevIndex >= slideCount - 1 ? 0 : prevIndex + 1,
			);
		}, [setActiveIndex, slideCount]);

		if (slideCount === 0) {
			return null;
		}

		return (
			<Sc.CarouselWrapper
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('carousel-root', className, commonClassNames)}
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
				{...rest}
			>
				<Sc.CarouselTrack
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{slides.map((child, index) => (
						<Sc.CarouselItem key={index} className="carousel-item">
							{child}
						</Sc.CarouselItem>
					))}
				</Sc.CarouselTrack>

				<Sc.CarouselNav>
					{slides.map((_, index) => (
						<Sc.CarouselDot
							key={index}
							isActive={index === activeIndex}
							onClick={() => setActiveIndex(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</Sc.CarouselNav>

				{!hideArrows && slideCount > 1 && (
					<>
						<Sc.CarouselButton
							$position="left"
							className="carousel-button carousel-button-prev"
							onClick={handlePrev}
							aria-label="Previous slide"
						/>
						<Sc.CarouselButton
							$position="right"
							className="carousel-button carousel-button-next"
							onClick={handleNext}
							aria-label="Next slide"
						/>
					</>
				)}
			</Sc.CarouselWrapper>
		);
	},
);

Carousel.displayName = 'Carousel';
