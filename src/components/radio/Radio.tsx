/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { ComponentColors } from '@src/utils/getColorScheme';
import * as Sc from './Radio.styled';

export interface RadioGroupProps
	extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
	/**
	 * The background of the Box. Accepts library colors or hex colors.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale';
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

/**
 * The RadioGroup component is used in forms when you want the user to select one option from several, while clearly seeing all available options. Used in conjunction with the `Radio` component.
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
			color = 'primary',
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
					color,
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

export interface RadioProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Label for the radio button.
	 */
	label?: string;
	/**
	 * The color of the Radio. Accepts library colors or hex colors.
	 *
	 *
	 * @default 'primary'
	 *
	 * @internal
	 */
	color?: ComponentColors | 'greyscale';
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
 * The Radio component is used in forms when you want the user to select one option from several,
 * while clearly seeing all available options. If there are multiple options appearing in a list,
 * users can preserve space by using a dropdown menu, which is another type of single-selection form control.
 * @see See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) for more details about the HTML input element of type radio.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ label = '', color = 'primary', checked, name, ...rest }, ref) => {
		return (
			<Sc.RadioWrapper>
				<Sc.Radio
					id={`${name}-${rest.value}`}
					type="radio"
					checked={checked}
					$color={color}
					ref={ref}
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
