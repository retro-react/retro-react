/** @jsxImportSource theme-ui */
import { forwardRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { ComponentColors } from '../../utils/getColorScheme';
import * as Sc from './Switch.styled';

export type SwitchVariant = 'rounded' | 'square';
export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps
	extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
	/**
	 * The variant of the Switch.
	 *
	 * @default 'rounded'
	 */
	variant?: SwitchVariant;
	/**
	 *
	 * The size of the Switch.
	 *
	 * @default 'medium'
	 */
	size?: SwitchSize;
	/**
	 *
	 * The color of the Switch.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale';
	/**
	 *
	 * The controlled state of the Switch.
	 *
	 * @default undefined
	 */
	toggled?: boolean;
	/**
	 *
	 * The initial state of the Switch when uncontrolled.
	 *
	 * @default false
	 */
	defaultToggled?: boolean;
	/**
	 * Is the Switch disabled?
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 *
	 * The onChange event handler of the Switch.
	 *
	 * @default undefined
	 */
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	/**
	 * The name of the underlying input, forwarded for form usage.
	 */
	name?: string;
	/**
	 * The value of the underlying input, forwarded for form usage.
	 */
	value?: string;
	/**
	 * The accessible label of the Switch.
	 *
	 * @default 'Toggle switch'
	 */
	'aria-label'?: string;
	sx?: ThemeUICSSObject;
}

/**
 * Switches are used to toggle between two states.
 *
 * @example
 * <Switch toggled={toggled} onChange={handleToggle} />
 */
export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
	(
		{
			id,
			sx,
			className,
			size = 'medium',
			variant = 'rounded',
			color = 'primary',
			disabled = false,
			toggled,
			defaultToggled = false,
			onChange,
			name,
			value,
			'aria-label': ariaLabel = 'Toggle switch',
			...rest
		},
		ref,
	) => {
		const isControlled = toggled !== undefined;
		const [internalToggled, setInternalToggled] = useState(defaultToggled);
		const checked = isControlled ? toggled : internalToggled;

		const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
			event,
		) => {
			if (!isControlled) {
				setInternalToggled(event.target.checked);
			}
			onChange?.(event);
		};

		return (
			<Sc.Switch
				ref={ref}
				id={id}
				sx={sx}
				data-state={checked ? 'checked' : 'unchecked'}
				data-disabled={disabled ? '' : undefined}
				className={classNames('switch-root', className, commonClassNames)}
				$disabled={disabled}
				$size={size}
				{...rest}
			>
				<Sc.SwitchInput
					type="checkbox"
					checked={checked}
					onChange={handleChange}
					disabled={disabled}
					name={name}
					value={value}
					className="switch-input"
					role="switch"
					aria-checked={checked}
					aria-label={ariaLabel}
				/>
				<Sc.SwitchSlider
					className={`switch-${variant}-slider`}
					$variant={variant}
					$color={color}
					$size={size}
					$disabled={disabled}
				/>
			</Sc.Switch>
		);
	},
);

Switch.displayName = 'Switch';
