/** @jsxImportSource theme-ui */
import { classNames } from '@src/utils/classNames';
import * as Sc from './Container.styled';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * If `true`, apply `width: 100%`.
	 *
	 * @default false
	 */
	fluid?: boolean;
}

/**
 * The fundamental building block that centers your content horizontally.
 * It creates a simple `div` to wrap your content and align within a given viewport.
 *
 * @example
 * <Container>
 *   <!-- your content here -->
 * </Container>
 */
export const Container = ({
	fluid = false,
	className,
	children,
	...rest
}: ContainerProps) => {
	const classes = classNames(
		'Container-root',
		fluid ? 'Container-fluid' : '',
		className,
	);

	if (fluid) {
		return (
			<Sc.FluidContainer className={classes} {...rest}>
				{children}
			</Sc.FluidContainer>
		);
	}

	return (
		<Sc.Container className={classes} {...rest}>
			{children}
		</Sc.Container>
	);
};
