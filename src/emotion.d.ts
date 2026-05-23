import defaultTheme from './themes/defaultTheme';

type ThemeType = typeof defaultTheme;

declare module '@emotion/react' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Theme extends ThemeType {}
}
