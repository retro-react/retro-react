import { css } from '@emotion/react';

const EDGE_DARKEST = '#0a0a0a';
const EDGE_SHADOW = '#808080';
const EDGE_LIGHT = '#dfdfdf';
const EDGE_HIGHLIGHT = '#ffffff';

export const raised = css`
	border: 1px solid;
	border-color: ${EDGE_LIGHT} ${EDGE_DARKEST} ${EDGE_DARKEST} ${EDGE_LIGHT};
	border-radius: 0;
	box-shadow: inset 1px 1px 0 ${EDGE_HIGHLIGHT},
		inset -1px -1px 0 ${EDGE_SHADOW};
`;

export const sunken = css`
	border: 1px solid;
	border-color: ${EDGE_DARKEST} ${EDGE_LIGHT} ${EDGE_LIGHT} ${EDGE_DARKEST};
	border-radius: 0;
	box-shadow: inset 1px 1px 0 ${EDGE_SHADOW},
		inset -1px -1px 0 ${EDGE_HIGHLIGHT};
`;

export const pressed = css`
	border: 1px solid;
	border-color: ${EDGE_DARKEST} ${EDGE_LIGHT} ${EDGE_LIGHT} ${EDGE_DARKEST};
	border-radius: 0;
	box-shadow: inset 1px 1px 0 ${EDGE_SHADOW},
		inset -1px -1px 0 ${EDGE_HIGHLIGHT};
`;

export const windowFrame = raised;

export const groove = css`
	border: 2px groove ${EDGE_LIGHT};
`;

export const focusOutline = css`
	outline: 1px dotted currentColor;
	outline-offset: -4px;
`;
