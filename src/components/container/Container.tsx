/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
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
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ fluid = false, className, children, sx, ...rest }, ref) => {
		const classes = classNames(
			'container-root',
			fluid ? 'container-fluid' : '',
			className,
			commonClassNames,
		);

		if (fluid) {
			return (
				<Sc.FluidContainer ref={ref} className={classes} sx={sx} {...rest}>
					{children}
				</Sc.FluidContainer>
			);
		}

		return (
			<Sc.Container ref={ref} className={classes} sx={sx} {...rest}>
				{children}
			</Sc.Container>
		);
	},
);

Container.displayName = 'Container';
