/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { uniqueId } from '../../utils/uniqueId';
import * as Sc from './Radio.styled';

export interface RadioGroupProps
	extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
	/**
	 * Value set by default. Must match the value of one of the Radio children.
	 * Used when the RadioGroup is uncontrolled.
	 *
	 * @default undefined
	 */
	defaultValue?: string;
	/**
	 * The selected value. When provided, the RadioGroup is controlled.
	 *
	 * @default undefined
	 */
	value?: string;
	/**
	 * The shared `name` for the radio inputs. Injected into each child Radio.
	 *
	 * @default undefined
	 */
	name?: string;
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
			value,
			name,
			disabled = false,
			sx,
			onChange,
			...rest
		},
		ref,
	) => {
		const isControlled = value !== undefined;
		const [internalValue, setInternalValue] = useState(defaultValue);
		const selectedValue = isControlled ? value : internalValue;

		const handleChange = (newValue: string) => {
			if (!isControlled) {
				setInternalValue(newValue);
			}
			if (onChange) {
				onChange(newValue);
			}
		};

		const clonedChildren = Children.map(children, (child) => {
			if (isValidElement(child) && child.type === Radio) {
				const childProps = child.props as RadioProps;
				const childOnChange = childProps.onChange;
				return cloneElement(child as React.ReactElement<RadioProps>, {
					checked: childProps.value === selectedValue,
					name: childProps.name ?? name,
					onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
						handleChange(String(childProps.value));
						if (childOnChange) {
							childOnChange(event);
						}
					},
					disabled,
				});
			}
			return child;
		});

		return (
			<Sc.RadioGroup
				id={id}
				className={className}
				role="radiogroup"
				disabled={disabled}
				{...rest}
				sx={sx}
				ref={ref}
			>
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
	({ label = '', checked, name, id, ...rest }, ref) => {
		const generatedIdRef = useRef(uniqueId('retro-radio-'));
		const radioId = id ?? generatedIdRef.current;

		return (
			<Sc.RadioWrapper>
				<Sc.Radio
					id={radioId}
					name={name}
					type="radio"
					checked={checked}
					ref={ref}
					aria-disabled={rest.disabled}
					{...rest}
				/>
				{label && <Sc.RadioLabel htmlFor={radioId}>{label}</Sc.RadioLabel>}
			</Sc.RadioWrapper>
		);
	},
);

Radio.displayName = 'Radio';
