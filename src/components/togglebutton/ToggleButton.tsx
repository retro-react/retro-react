/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import { Button, ButtonProps, ButtonSize } from '../button/Button';

interface ToggleButtonProps extends ButtonProps {
	value?: string;
	selected?: boolean;
}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
	({ selected = false, ...buttonProps }, ref) => {
		return (
			<Button
				{...buttonProps}
				sx={{
					...buttonProps.sx,
					minWidth: 'fit-content',
					filter: selected ? 'brightness(0.8)' : 'brightness(1)',
				}}
				ref={ref}
			/>
		);
	},
);

ToggleButton.displayName = 'ToggleButton';

export interface ToggleButtonGroupProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The children of this component, typically `ToggleButton` components.
	 */
	children?: React.ReactNode;

	/**
	 * The size of the buttons. It will be passed to the `ToggleButton` children.
	 */
	size?: ButtonSize;

	/**
	 * An array of values of the selected buttons in this group.
	 * It can be used to control the selection (controlled component).
	 */
	value?: string[];

	/**
	 * A callback function that is called when the selected value changes.
	 * The new selection (array of values of the selected buttons) is passed as argument.
	 */
	onValueChange?: (value: string | string[]) => void;

	/**
	 * If true, multiple buttons can be selected.
	 * If false (default), only one button can be selected.
	 */
	multiple?: boolean;

	/**
	 * Additional style that should be applied to the group.
	 * It's a style object defined by Theme UI.
	 */
	sx?: ThemeUICSSObject;
}

/**
 * A group of toggle buttons. It can be used to select one or multiple values. It's a controlled component.
 * Uses `Button` to render the toggle buttons. You can apply the `Button` props to this component.
 *
 * @example
 * ```tsx
 *
 * <ToggleButtonGroup
 * 	value={selectedValues}
 * 	onValueChange={(value) => setSelectedValues(value)}
 * 	multiple
 * >
 * 	<ToggleButton value="first">A</ToggleButton>
 * 	<ToggleButton value="second">B</ToggleButton>
 * </ToggleButtonGroup>
 * ```
 */
export const ToggleButtonGroup = forwardRef<
	HTMLDivElement,
	ToggleButtonGroupProps
>(
	(
		{
			id,
			className,
			children,
			size = 'medium',
			value,
			onValueChange,
			multiple = false,
			sx,
			...rest
		},
		ref,
	) => {
		const [selectedValues, setSelectedValues] = useState<string[]>(value || []);

		const handleButtonClick = (val: string) => {
			let newSelectedValues;
			if (multiple) {
				newSelectedValues = selectedValues.includes(val)
					? selectedValues.filter((v) => v !== val)
					: [...selectedValues, val];
			} else {
				newSelectedValues = [val];
			}
			setSelectedValues(newSelectedValues);
			onValueChange?.(newSelectedValues);
		};

		return (
			<div
				ref={ref}
				id={id}
				className={classNames(
					'toggle-button-group-root',
					className,
					commonClassNames,
				)}
				sx={sx}
				{...rest}
			>
				{Children.map(children, (child) => {
					if (!isValidElement(child) || child.type !== ToggleButton) {
						return child;
					}

					const val = child.props.value;
					const selected = selectedValues.includes(val);

					return cloneElement(child as ReactElement, {
						size,
						selected,
						onClick: () => handleButtonClick(val),
					});
				})}
			</div>
		);
	},
);

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
