/** @jsxImportSource theme-ui */
import {
	Children,
	forwardRef,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Carousel.styled';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
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
	children: ReactNode[];
	/**
	 * Hide the arrow buttons.
	 *
	 * @default false
	 */
	hideArrows?: boolean;
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
	({ id, className, children, interval = 3000, sx, ...rest }, ref) => {
		const [activeIndex, setActiveIndex] = useState(0);

		useEffect(() => {
			const timer = setTimeout(() => {
				setActiveIndex((prevIndex) =>
					prevIndex === children.length - 1 ? 0 : prevIndex + 1,
				);
			}, interval); // Adjust the time interval as needed

			return () => clearTimeout(timer);
		}, [activeIndex, children, interval]);

		const handlePrev = useCallback(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === 0 ? children.length - 1 : prevIndex - 1,
			);
		}, [children]);

		const handleNext = useCallback(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === children.length - 1 ? 0 : prevIndex + 1,
			);
		}, [children]);

		return (
			<Sc.CarouselWrapper
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('carousel-root', className, commonClassNames)}
				{...rest}
			>
				<Sc.CarouselTrack
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{Children.map(children, (child, index) => (
						<Sc.CarouselItem key={index} className="carousel-item">
							{child}
						</Sc.CarouselItem>
					))}
				</Sc.CarouselTrack>

				<Sc.CarouselNav>
					{Children.map(children, (_, index) => (
						<Sc.CarouselDot
							key={index}
							isActive={index === activeIndex}
							onClick={() => setActiveIndex(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</Sc.CarouselNav>

				{!rest.hideArrows && (
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
