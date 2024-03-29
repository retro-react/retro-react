import { PRIMARY, SECONDARY } from '@src/constants/colors';
import { WordArtColor } from './WordArt';

export const getWordArtColorOptions = (color: WordArtColor): string[] => {
	switch (color) {
		case 'rainbow':
			return ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		case 'neon':
			return [
				'#ff00ff',
				'#ff0000',
				'#ffff00',
				'#00ff00',
				'#00ffff',
				'#0000ff',
				'#ff00ff',
			];
		case 'pastel':
			return [
				'#ff6666',
				'#ffcc66',
				'#ffff66',
				'#ccff66',
				'#66ff66',
				'#66ffcc',
				'#66ffff',
				'#66ccff',
				'#6666ff',
				'#cc66ff',
				'#ff66ff',
				'#ff66cc',
			];
		case 'grayscale':
			return ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#eeeeee'];
		case 'retro':
			return [
				'#ff0000',
				'#ff9900',
				'#ffff00',
				'#00ff00',
				'#00ffff',
				'#0000ff',
				'#9900ff',
			];
		case 'primary':
			return [PRIMARY];
		case 'secondary':
			return [SECONDARY];
		default:
			return [PRIMARY];
	}
};
