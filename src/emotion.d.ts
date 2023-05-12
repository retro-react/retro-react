import defaultTheme from './themes/defaultTheme';

type ThemeType = typeof defaultTheme;

declare module '@emotion/react' {
	export interface Theme extends ThemeType {}
}
