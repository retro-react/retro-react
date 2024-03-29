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
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import arrowIcon from '../../assets/svg/arrow_icon.svg';
import * as Sc from './Carousel.styled';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The background pattern of the Carousel. If image fits the entire Carousel, pattern will not be visible.
	 *
	 * @default 'stripes'
	 */
	pattern?: ComponentPatterns;
	/**
	 * The color of the Carousel.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors;
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
	/**
	 * The image src to display on custom arrow buttons.
	 *
	 * @default undefined
	 */
	arrowImage?: string;
	sx?: ThemeUICSSObject;
}

/**
 * Carousel component for displaying a slideshow of content. The component will automatically
 * change the size depending on the content. To minimize layout shifts, it is recommended to
 * set a fixed size for images that will work for all screen sizes.
 *
 * For example, image sizes of 1000x500 will work well for most screen sizes.
 *
 *
 * @example
 * <Carousel color="#fff">
 *   Content
 * </Carousel>
 */
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
	(
		{
			id,
			className,
			children,
			color = 'primary',
			pattern = 'noise',
			interval = 3000,
			arrowImage,
			sx,
			...rest
		},
		ref,
	) => {
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
				$color={color}
				$pattern={pattern}
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
						/>
					))}
				</Sc.CarouselNav>

				{!rest.hideArrows && (
					<>
						<Sc.CarouselButton
							$position="left"
							className="carousel-button carousel-button-prev"
							onClick={handlePrev}
						>
							<Sc.CarouselButtonIcon
								$color={color}
								className="carousel-button-icon carousel-button-icon-prev"
								aria-hidden="true"
								$position="left"
								src={arrowImage || arrowIcon}
							/>
						</Sc.CarouselButton>
						<Sc.CarouselButton
							$position="right"
							className="carousel-button carousel-button-next"
							onClick={handleNext}
						>
							<Sc.CarouselButtonIcon
								$color={color}
								className="carousel-button-icon carousel-button-icon-next"
								aria-hidden="true"
								$position="right"
								src={arrowImage || arrowIcon}
							/>
						</Sc.CarouselButton>
					</>
				)}
			</Sc.CarouselWrapper>
		);
	},
);

Carousel.displayName = 'Carousel';
