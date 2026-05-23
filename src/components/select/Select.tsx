/** @jsxImportSource theme-ui */
import { forwardRef, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Select.styled';

export type SelectVariants = 'outlined' | 'filled' | 'terminal' | 'classic';
export type SelectSizes = 'small' | 'medium' | 'large';

export interface SelectProps
	extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
	/**
	 * The label for the Select.
	 *
	 * @default undefined
	 */
	label?: string;
	/**
	 * The variant of the Select.
	 * - classic: Deep sunken Windows 95/98 dialog style with heavy inset shadow
	 * - filled: Prominent raised 3D button-like appearance with outer shadow
	 * - outlined: Clean flat design with simple border and focus ring
	 * - terminal: Subtle dark terminal aesthetic with soft green text
	 *
	 * @default 'filled'
	 */
	variant?: SelectVariants;
	/**
	 * The size of the Select.
	 *
	 * @default 'medium'
	 */
	size?: SelectSizes;
	/**
	 * If disabled is passed, the Select will be disabled.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * If required is passed, the Select will be required.
	 *
	 * @default false
	 */
	required?: boolean;
	/**
	 * The error message of the Select. Used for accessibility.
	 *
	 * @default undefined
	 */
	errorMessage?: string;
	/**
	 * The options of the Select.
	 *
	 * @default undefined
	 */
	children?: React.ReactNode;
	sx?: ThemeUICSSObject;
}

/**
 * Retro-themed select dropdowns inspired by classic 90s computing aesthetics.
 *
 * Features four distinct authentic variants:
 * - Classic: Deep sunken Windows 95/98 dialog style with heavy inset shadows
 * - Filled: Prominent raised 3D button-style with outer drop shadows (default)
 * - Outlined: Clean flat design with simple borders and focus rings
 * - Terminal: Subtle dark console style with soft phosphor green text
 *
 * @example
 * // Deep Windows 95 sunken style
 * <Select variant="classic" label="Choose option">
 *   <option value="1">Option 1</option>
 * </Select>
 *
 * // Prominent 3D raised select (default)
 * <Select label="Select car">
 *   <option value="camaro">Camaro</option>
 * </Select>
 *
 * // Clean flat outlined style
 * <Select variant="outlined" label="Filter by">
 *   <option value="all">All</option>
 * </Select>
 *
 * // Subtle terminal style
 * <Select variant="terminal" label="System">
 *   <option value="dos">MS-DOS</option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			id,
			className,
			variant = 'filled',
			size = 'medium',
			sx,
			label,
			children,
			disabled = false,
			errorMessage,
			required = false,
			onChange,
			value,
			defaultValue,
			...rest
		},
		ref,
	) => {
		const isControlled = value !== undefined;
		const innerRef = useRef<HTMLSelectElement | null>(null);
		const [internalValue, setInternalValue] = useState(
			defaultValue !== undefined ? String(defaultValue) : '',
		);
		const selectValue = isControlled ? value : internalValue;

		const errorId = id ? `${id}-error` : undefined;

		const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
			if (!isControlled) {
				setInternalValue(event.target.value);
			}
			if (onChange) onChange(event);
		};

		const handleClear = () => {
			if (!isControlled) {
				setInternalValue('');
			}
			const select = innerRef.current;
			if (select) {
				select.value = '';
				const event = Object.create(
					new Event('change', { bubbles: true }),
				) as Event;
				Object.defineProperty(event, 'target', {
					value: select,
					enumerable: true,
				});
				Object.defineProperty(event, 'currentTarget', {
					value: select,
					enumerable: true,
				});
				if (onChange) {
					onChange(event as unknown as React.ChangeEvent<HTMLSelectElement>);
				}
			}
		};

		const ariaProps = {};
		if (!label) {
			ariaProps['aria-label'] = 'Select an option';
		}
		if (disabled) {
			ariaProps['aria-disabled'] = true;
		}
		if (errorMessage) {
			ariaProps['aria-describedby'] = errorId;
			ariaProps['aria-invalid'] = true;
		}
		if (required) {
			ariaProps['aria-required'] = true;
		}

		return (
			<Sc.SelectWrapper
				$variant={variant}
				sx={sx}
				className={classNames('select-root', className, commonClassNames)}
			>
				{label && (
					<Sc.Label
						htmlFor={id}
						$variant={variant}
						$size={size}
						className="select-label"
						title={label}
						$disabled={disabled}
					>
						{label}
					</Sc.Label>
				)}
				<Sc.SelectContainer>
					<Sc.Select
						id={id}
						ref={(node: HTMLSelectElement | null) => {
							innerRef.current = node;
							if (typeof ref === 'function') {
								ref(node);
							} else if (ref) {
								ref.current = node;
							}
						}}
						$variant={variant}
						$size={size}
						className="select-input"
						disabled={disabled}
						value={selectValue ?? ''}
						onChange={handleChange}
						{...ariaProps}
						{...rest}
					>
						{children}
					</Sc.Select>
					{selectValue && !required && (
						<Sc.ClearButton
							type="button"
							onClick={handleClear}
							aria-label="Remove button"
						/>
					)}
				</Sc.SelectContainer>
				{errorMessage && <Sc.Error id={errorId}>{errorMessage}</Sc.Error>}
			</Sc.SelectWrapper>
		);
	},
);

Select.displayName = 'Select';
