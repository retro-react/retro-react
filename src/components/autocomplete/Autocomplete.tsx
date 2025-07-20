/** @jsxImportSource theme-ui */
import {
	ForwardedRef,
	forwardRef,
	KeyboardEvent,
	useEffect,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import {
	AutocompleteInput,
	AutocompleteWrapper,
	ClearButton,
	SuggestionItem,
	SuggestionsList,
} from './Autocomplete.styled';

export type AutocompleteVariants = 'outlined' | 'filled';
export type AutocompleteSizes = 'small' | 'medium' | string;

export interface AutocompleteInputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	/**
	 * Specifies the visual variant of the Autocomplete input.
	 *
	 * 'outlined' - Input will have an outline.
	 * 'filled' - Input will have a solid background color.
	 *
	 * @default 'filled'
	 */
	variant?: AutocompleteVariants;

	/**
	 * Determines the color scheme of the Autocomplete input.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'greyscale';

	/**
	 * Specifies the size of the Autocomplete input.
	 *
	 * @default 'medium'
	 */
	size?: AutocompleteSizes;

	/**
	 * Determines if the Autocomplete input should have rounded edges.
	 *
	 * @default false
	 */
	rounded?: boolean;

	/**
	 * Message to display when there are no suggestions.
	 *
	 * @default 'No suggestions'
	 */
	noResultsMessage?: string;
	/**
	 * Determines if the Autocomplete input should be clearable.
	 *
	 * @default true
	 */
	clearable?: boolean;
	/**
	 * Allows for custom styles using ThemeUI's sx prop.
	 */
	sx?: ThemeUICSSObject;
}

export interface AutocompleteProps extends AutocompleteInputProps {
	/**
	 * An array of strings that will be used as suggestions.
	 *
	 * @default []
	 */
	suggestions?: string[];
	/**
	 * Callback function that will be called when a suggestion is selected.
	 *
	 * @default undefined
	 */
	onSuggestionSelect?: (selected: string) => void;
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
	(
		{
			suggestions = [],
			onSuggestionSelect,
			variant = 'filled',
			size = 'medium',
			rounded = false,
			color = 'primary',
			noResultsMessage = 'No suggestions',
			clearable = true,
			className,
			sx,
			...rest
		},
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const suggestionsListRef = useRef<HTMLDivElement>(null);
		const [inputValue, setInputValue] = useState('');
		const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(
			[],
		);
		const [wasSuggestionSelected, setWasSuggestionSelected] = useState(false);
		const [isInteractingWithList, setIsInteractingWithList] = useState(false);
		const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
		const [showSuggestions, setShowSuggestions] = useState(false);

		useEffect(() => {
			if (suggestionsListRef.current) {
				const listItems = Array.from(suggestionsListRef.current.childNodes);
				const targetItem = listItems[activeSuggestionIndex] as HTMLElement;

				if (targetItem) {
					const listItemTop = targetItem.offsetTop;
					const listItemBottom = listItemTop + targetItem.clientHeight;
					const listVisibleTop = suggestionsListRef.current.scrollTop;
					const listVisibleBottom =
						listVisibleTop + suggestionsListRef.current.clientHeight;

					if (listItemBottom > listVisibleBottom) {
						suggestionsListRef.current.scrollTop =
							listItemBottom - suggestionsListRef.current.clientHeight;
					} else if (listItemTop < listVisibleTop) {
						suggestionsListRef.current.scrollTop = listItemTop;
					}
				}
			}
		}, [activeSuggestionIndex]);

		useEffect(() => {
			if (inputValue && !wasSuggestionSelected) {
				const filtered = suggestions.filter((suggestion) =>
					suggestion.toLowerCase().includes(inputValue.toLowerCase()),
				);
				setFilteredSuggestions(filtered);
				setShowSuggestions(true);
				setActiveSuggestionIndex(-1); // Reset to no selection when filtering
			} else {
				setShowSuggestions(false);
				setActiveSuggestionIndex(-1);
			}
		}, [inputValue, suggestions, wasSuggestionSelected]);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value);
			setWasSuggestionSelected(false);
		};

		const handleClick = (suggestion: string) => {
			setInputValue(suggestion);
			setShowSuggestions(false);
			onSuggestionSelect && onSuggestionSelect(suggestion);
			setWasSuggestionSelected(true);
		};

		const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				if (showSuggestions && filteredSuggestions.length > 0) {
					if (activeSuggestionIndex < filteredSuggestions.length - 1) {
						setActiveSuggestionIndex(activeSuggestionIndex + 1);
					} else {
						setActiveSuggestionIndex(0); // Wrap to first item
					}
				}
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				if (showSuggestions && filteredSuggestions.length > 0) {
					if (activeSuggestionIndex > 0) {
						setActiveSuggestionIndex(activeSuggestionIndex - 1);
					} else {
						setActiveSuggestionIndex(filteredSuggestions.length - 1); // Wrap to last item
					}
				}
			} else if (e.key === 'Enter') {
				e.preventDefault();
				if (
					showSuggestions &&
					activeSuggestionIndex >= 0 &&
					filteredSuggestions[activeSuggestionIndex]
				) {
					const selectedSuggestion = filteredSuggestions[activeSuggestionIndex];
					setInputValue(selectedSuggestion);
					setShowSuggestions(false);
					setWasSuggestionSelected(true);
					onSuggestionSelect && onSuggestionSelect(selectedSuggestion);
				}
			} else if (e.key === 'Escape') {
				setShowSuggestions(false);
				setActiveSuggestionIndex(-1);
			}
		};

		const handleBlur = () => {
			if (!wasSuggestionSelected && !isInteractingWithList) {
				setInputValue('');
			}
		};

		const handleListMouseDown = () => {
			setIsInteractingWithList(true);
		};

		const handleListMouseUp = () => {
			setIsInteractingWithList(false);
		};

		return (
			<AutocompleteWrapper
				className={classNames('autocomplete-root', className, commonClassNames)}
				sx={sx}
			>
				<AutocompleteInput
					value={inputValue}
					$variant={variant}
					$size={size}
					$rounded={rounded}
					$color={color}
					onBlur={handleBlur}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					ref={ref}
					className="autocomplete-input"
					{...rest}
				/>
				{showSuggestions && (
					<SuggestionsList
						ref={suggestionsListRef}
						$color={color}
						onMouseDown={handleListMouseDown}
						onMouseUp={handleListMouseUp}
						className="autocomplete-suggestions"
					>
						{filteredSuggestions.length > 0 ? (
							filteredSuggestions.map((suggestion, index) => (
								<SuggestionItem
									key={suggestion}
									$color={color}
									$highlighted={index === activeSuggestionIndex}
									$selected={false}
									onClick={() => handleClick(suggestion)}
									onMouseEnter={() => setActiveSuggestionIndex(index)}
									className={
										index === activeSuggestionIndex
											? 'active-suggestion'
											: undefined
									}
								>
									{suggestion}
								</SuggestionItem>
							))
						) : (
							<li
								style={{
									padding: '0.5rem 1rem',
									color: 'inherit',
									cursor: 'default',
								}}
							>
								{noResultsMessage}
							</li>
						)}
					</SuggestionsList>
				)}
				{clearable && inputValue && !rest.disabled && (
					<ClearButton
						className="autocomplete-clear-button"
						onClick={() => setInputValue('')}
						aria-label="Clear input"
					>
						×
					</ClearButton>
				)}
			</AutocompleteWrapper>
		);
	},
);

Autocomplete.displayName = 'Autocomplete';
