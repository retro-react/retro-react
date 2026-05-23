import { css } from '@emotion/react';

const EDGE_DARKEST = '#0a0a0a';
const EDGE_SHADOW = '#808080';
const EDGE_LIGHT = '#dfdfdf';
const EDGE_HIGHLIGHT = '#ffffff';

export const raised = css`
	border: 2px solid transparent;
	border-radius: 0;
	box-shadow: inset -1px -1px 0 ${EDGE_DARKEST},
		inset 1px 1px 0 ${EDGE_HIGHLIGHT}, inset -2px -2px 0 ${EDGE_SHADOW},
		inset 2px 2px 0 ${EDGE_LIGHT};
`;

export const sunken = css`
	border: 2px solid transparent;
	border-radius: 0;
	box-shadow: inset -1px -1px 0 ${EDGE_HIGHLIGHT},
		inset 1px 1px 0 ${EDGE_DARKEST}, inset -2px -2px 0 ${EDGE_LIGHT},
		inset 2px 2px 0 ${EDGE_SHADOW};
`;

export const pressed = css`
	border: 2px solid transparent;
	border-radius: 0;
	box-shadow: inset 1px 1px 0 ${EDGE_DARKEST},
		inset -1px -1px 0 ${EDGE_HIGHLIGHT}, inset 2px 2px 0 ${EDGE_SHADOW},
		inset -2px -2px 0 ${EDGE_LIGHT};
`;

export const windowFrame = raised;

export const groove = css`
	border: 2px groove ${EDGE_LIGHT};
`;

export const focusOutline = css`
	outline: 1px dotted currentColor;
	outline-offset: -4px;
`;
