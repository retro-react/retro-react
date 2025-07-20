/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	ForwardedRef,
	forwardRef,
	isValidElement,
	ReactElement,
	useRef,
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
 * 	<Button variant="success">Submit</Button>
 * 	<Button variant="primary">Cancel</Button>
 * </ButtonGroup>
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	(
		{ id, className, children, size = 'medium', sx, ...rest },
		ref: ForwardedRef<HTMLDivElement>,
	) => {
		const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

		const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
			const currentIndex = buttonsRef.current.findIndex(
				(button) => button === e.target,
			);

			if (e.key === 'ArrowRight') {
				const nextIndex = (currentIndex + 1) % buttonsRef.current.length;
				const nextButton = buttonsRef.current[nextIndex];
				if (nextButton) {
					nextButton.focus();
				}
			} else if (e.key === 'ArrowLeft') {
				const prevIndex =
					(currentIndex - 1 + buttonsRef.current.length) %
					buttonsRef.current.length;
				const prevButton = buttonsRef.current[prevIndex];
				if (prevButton) {
					prevButton.focus();
				}
			}
		};

		return (
			<Sc.GroupContainer
				ref={ref}
				id={id}
				onKeyDown={handleKeyDown}
				className={classNames('button-group-root', className, commonClassNames)}
				sx={sx}
				{...rest}
			>
				{Children.map(children, (child, index) => {
					// If not React Element or not our Button component, return as is
					if (!isValidElement(child) || child.type !== Button) {
						return child;
					}

					// Clone Button component
					return cloneElement(child as ReactElement, {
						isButtonGroup: true,
						size,
						ref: (el: HTMLButtonElement | null) => {
							buttonsRef.current[index] = el;
						},
					});
				})}
			</Sc.GroupContainer>
		);
	},
);

ButtonGroup.displayName = 'ButtonGroup';
