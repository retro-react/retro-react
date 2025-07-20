import styled from '@emotion/styled';

export const Card = styled.div`
	box-sizing: border-box;

	/* Authentic retro panel styling */
	background-color: #c0c0c0;
	border: 2px solid;
	border-color: #ffffff #808080 #808080 #ffffff;

	/* Subtle dithering pattern for authentic texture */
	background-image: radial-gradient(
		circle at 1px 1px,
		rgba(0, 0, 0, 0.15) 1px,
		transparent 0
	);
	background-size: 2px 2px;

	padding: 8px;
	font-family: 'MS Sans Serif', sans-serif;
	font-size: 11px;
	overflow: auto;
	display: flex;
	flex-direction: column;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const CardContent = styled.div`
	margin-bottom: 8px;
	flex: 1;
	overflow: auto;

	/* Retro scrollbar styling */
	::-webkit-scrollbar {
		width: 16px;
		background: #c0c0c0;
	}

	::-webkit-scrollbar-track {
		background: #c0c0c0;
		border: 1px solid #808080;
	}

	::-webkit-scrollbar-thumb {
		background: #c0c0c0;
		border: 1px solid;
		border-color: #ffffff #808080 #808080 #ffffff;
	}

	::-webkit-scrollbar-button {
		background: #c0c0c0;
		border: 1px solid;
		border-color: #ffffff #808080 #808080 #ffffff;
		height: 16px;
	}
`;

export const CardHeader = styled.div`
	margin-bottom: 8px;
	font-weight: bold;
	font-size: 11px;
	color: #000000;
`;

export const CardFooter = styled.div`
	margin-top: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10px;
	color: #000000;
`;

export const CardMedia = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8px;

	& > * {
		max-width: 100%;
		height: auto;
		/* Apply pixelated rendering for authentic retro feel */
		image-rendering: -moz-crisp-edges;
		image-rendering: -webkit-crisp-edges;
		image-rendering: pixelated;
		image-rendering: crisp-edges;
	}
`;

export const CardTitle = styled.h2`
	font-size: 12px;
	font-weight: bold;
	margin: 0 0 8px 0;
	font-family: 'MS Sans Serif', sans-serif;
	color: #000000;
`;

export const CardImage = styled.img`
	display: block;
	margin-bottom: 8px;
	border: 1px solid #808080;
	/* Pixelated rendering for retro feel */
	image-rendering: -moz-crisp-edges;
	image-rendering: -webkit-crisp-edges;
	image-rendering: pixelated;
	image-rendering: crisp-edges;
`;

export const CardImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 8px;

	& > * {
		max-width: 100%;
		max-height: 100%;
	}
`;
