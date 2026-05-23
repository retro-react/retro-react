/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Terminal.styled';

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The prompt symbol displayed at the beginning of the terminal line.
	 *
	 * @default "C:\\>"
	 */
	prompt?: string;

	/**
	 * A callback function that is invoked when a command is submitted by the user.
	 * The entered command is passed as an argument.
	 *
	 * If a string or string array is returned, it is appended to the terminal
	 * history as output, allowing consumers to display command results.
	 *
	 * @example (cmd) => `Result for: ${cmd}`
	 */
	onCommandSubmit?: (command: string) => string | string[] | void;

	/**
	 * The sx prop lets you style elements inline, using values from your theme and
	 * provides a shorthand for adding responsive styles.
	 */
	sx?: ThemeUICSSObject;

	/**
	 * A callback function that is invoked whenever the input text changes.
	 * The current text in the input is passed as an argument.
	 *
	 * @example (text) => console.log(`Current text: ${text}`)
	 */
	getCurrentText?: (text: string) => void;
}

/**
 * Terminal component that mimics the old command-line terminals.
 *
 * @example
 * <Terminal prompt="$" />
 */
export const Terminal = forwardRef<HTMLDivElement, TerminalProps>(
	(
		{
			id,
			className,
			prompt = 'C:\\>',
			onCommandSubmit,
			sx,
			getCurrentText,
			...rest
		},
		ref,
	) => {
		const [inputValue, setInputValue] = useState('');
		const [history, setHistory] = useState<
			{ type: 'input' | 'output'; value: string }[]
		>([]);
		const terminalRef = useRef<HTMLDivElement | null>(null);
		const inputRef = useRef<HTMLInputElement>(null);

		const setRefs = (element: HTMLDivElement | null) => {
			terminalRef.current = element;
			if (typeof ref === 'function') {
				ref(element);
			} else if (ref) {
				(ref as React.MutableRefObject<HTMLDivElement | null>).current =
					element;
			}
		};

		const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value);
			if (getCurrentText) {
				getCurrentText(e.target.value);
			}
		};

		const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === 'Enter') {
				// Add the command to the history
				setHistory((prev) => [...prev, { type: 'input', value: inputValue }]);

				// Process command (for demonstration purposes, we just echo the command)
				if (onCommandSubmit) {
					const result = onCommandSubmit(inputValue);
					if (result !== undefined) {
						const lines = Array.isArray(result) ? result : [result];
						setHistory((prev) => [
							...prev,
							...lines.map((line) => ({
								type: 'output' as const,
								value: line,
							})),
						]);
					}
				} else {
					setHistory((prev) => [
						...prev,
						{ type: 'output', value: inputValue },
					]);
				}

				setInputValue('');

				// Scroll to bottom to always show latest input/output
				setTimeout(() => {
					if (terminalRef.current) {
						terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
					}
				}, 0);
			}
		};

		useEffect(() => {
			if (inputRef.current) inputRef.current.focus();
		}, []);

		return (
			<Sc.Terminal
				ref={setRefs}
				id={id}
				sx={sx}
				className={classNames('terminal-root', className, commonClassNames)}
				onClick={() => inputRef.current?.focus()}
				{...rest}
			>
				<div className="terminal-history">
					{history.map((item, idx) => (
						<div key={idx}>
							{item.type === 'input' ? <span>{prompt} </span> : null}
							{item.value}
						</div>
					))}
				</div>
				<span>{prompt} </span>
				<Sc.TerminalInput
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleInputKey}
					ref={inputRef}
				/>
			</Sc.Terminal>
		);
	},
);

Terminal.displayName = 'Terminal';
