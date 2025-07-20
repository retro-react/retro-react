/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import * as Sc from './Radio.styled';

export interface RadioGroupProps
	extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
	/**
	 * Value set by default. Must match the value of one of the Radio children.
	 *
	 * @default undefined
	 */
	defaultValue?: string;
	/**
	 * Controls whether the RadioGroup is disabled.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Callback fired when the value changes.
	 *
	 * @param {string} newValue The new value of the radio group.
	 *
	 * @default undefined
	 *
	 * @internal
	 */
	onChange?: (newValue: string) => void;
	sx?: ThemeUICSSObject;
}

export interface RadioProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Label for the radio button.
	 */
	label?: string;
	/**
	 * The boolean value of the Radio. If true, the Radio will be checked.
	 *
	 * @default false
	 *
	 * @internal
	 */
	checked?: boolean;
}

/**
 * The RadioGroup component with authentic WIN31 styling for single-selection forms.
 * Features classic inset radio buttons with proper dotted focus indicators.
 * Used in conjunction with the `Radio` component.
 *
 * @example
 * <RadioGroup defaultValue="playstation" onChange={setValue}>
 * 	<Radio label="Super Nintendo" name="console" value="snes" />
 * 	<Radio label="Sega Genesis" name="console" value="genesis" />
 * 	<Radio label="Sony PlayStation" name="console" value="playstation" />
 * </RadioGroup>
 */
export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
	(
		{
			id,
			className,
			children,
			defaultValue,
			disabled = false,
			sx,
			onChange,
			...rest
		},
		ref,
	) => {
		const [value, setValue] = useState(defaultValue);

		const handleChange = (newValue: string) => {
			setValue(newValue);
			if (onChange) {
				onChange(newValue);
			}
		};

		const clonedChildren = Children.map(children, (child) => {
			if (isValidElement(child) && child.type === Radio) {
				return cloneElement(child as React.ReactElement<RadioProps>, {
					checked: child.props.value === value,
					onChange: () => handleChange(child.props.value),
					disabled,
				});
			}
			return child;
		});

		return (
			<Sc.RadioGroup disabled={disabled} {...rest} sx={sx} ref={ref}>
				{clonedChildren}
			</Sc.RadioGroup>
		);
	},
);

RadioGroup.displayName = 'RadioGroup';

/**
 * The Radio component with authentic WIN31 styling for single-selection forms.
 * Features classic inset radio buttons with proper dotted focus indicators.
 * @see See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) for more details about the HTML input element of type radio.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ label = '', checked, name, ...rest }, ref) => {
		return (
			<Sc.RadioWrapper>
				<Sc.Radio
					id={`${name}-${rest.value}`}
					type="radio"
					checked={checked}
					ref={ref}
					role="radio"
					aria-checked={checked}
					aria-disabled={rest.disabled}
					{...rest}
				/>
				{label && (
					<Sc.RadioLabel htmlFor={`${name}-${rest.value}`}>
						{label}
					</Sc.RadioLabel>
				)}
			</Sc.RadioWrapper>
		);
	},
);

Radio.displayName = 'Radio';
