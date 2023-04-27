module.exports = {
	presets: [
		'@babel/preset-env',
		[
			'@babel/preset-typescript',
			{
				onlyRemoveTypeImports: true,
				allExtensions: true,
				isTSX: true,
			},
		],
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
	],
	plugins: ['@emotion', '@babel/plugin-transform-runtime'],
};
