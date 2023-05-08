/** @jsxImportSource theme-ui */
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Container.styled';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * If `true`, apply `width: 100%`.
	 *
	 * @default false
	 */
	fluid?: boolean;
	/**
	 * Sx prop
	 *
	 * @default undefined
	 */
	sx?: ThemeUICSSObject;
}

/**
 * The fundamental building block that centers your content horizontally.
 * It creates a simple `div` to wrap your content and align within a given viewport.
 * Supports `sx` prop from Theme UI.
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
		'container-root',
		fluid ? 'container-fluid' : '',
		className,
		commonClassNames,
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
