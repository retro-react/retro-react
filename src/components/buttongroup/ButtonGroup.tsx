/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	ForwardedRef,
	forwardRef,
	isValidElement,
	ReactElement,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import { Button, ButtonSize } from '../button/Button';
import * as Sc from './ButtonGroup.styled';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The children of the ButtonGroup, ideally Button components.
	 */
	children?: React.ReactNode;
	/**
	 * The size of the Buttons in the ButtonGroup.
	 *
	 * @default 'medium'
	 */
	size?: ButtonSize;
	sx?: ThemeUICSSObject;
}

/**
 * ButtonGroup is a component used to group related buttons.
 * It's recommended to pass Button components as children.
 *
 * @example
 * <ButtonGroup>
 * 	<Button color="success" variant="solid">Submit</Button>
 * 	<Button color="primary" variant="solid">Cancel</Button>
 * </ButtonGroup>
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	(
		{ id, className, children, size = 'medium', sx, ...rest },
		ref: ForwardedRef<HTMLDivElement>,
	) => (
		<Sc.GroupContainer
			ref={ref}
			id={id}
			className={classNames('button-group-root', className, commonClassNames)}
			sx={sx}
			{...rest}
		>
			{Children.map(children, (child) => {
				// If not React Element or not our Button component, return as is
				if (!isValidElement(child) || child.type !== Button) {
					return child;
				}

				// Clone Button component
				return cloneElement(child as ReactElement, {
					isButtonGroup: true,
					size,
				});
			})}
		</Sc.GroupContainer>
	),
);

ButtonGroup.displayName = 'ButtonGroup';
