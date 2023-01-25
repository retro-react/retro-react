module.exports = {
	bracketSameLine: false,
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	endOfLine: 'lf',
	useTabs: true,
	/**
	 * A workaround for pnpm. If you are using yarn or npm, you can remove this line.
	 */
	plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	importOrder: [
		'^@src/components/(.*)$',
		'^@src/hooks/(.*)$',
		'^@src/utils/(.*)$',
		'^@src/constants/(.*)$',
		'^[./]',
	],
};
