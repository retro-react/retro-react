/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Switch.styled';

export type SwitchVariant = 'rounded' | 'square';
export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps
	extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
	/**
	 * The variant of the Switch.
	 *
	 * @default 'square'
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
	 * @default false
	 */
	toggled?: boolean;
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
			onChange,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Switch
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('switch-root', className, commonClassNames)}
				$disabled={disabled}
				$size={size}
				{...rest}
			>
				<Sc.SwitchInput
					type="checkbox"
					checked={toggled}
					onChange={onChange}
					disabled={disabled}
					className="switch-input"
					role="switch"
					aria-checked={toggled}
					aria-label="Toggle switch"
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
