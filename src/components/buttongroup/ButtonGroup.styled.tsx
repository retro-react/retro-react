import styled from '@emotion/styled';
import {
	WIN31_BUTTON_HIGHLIGHT,
	WIN31_BUTTON_SHADOW,
} from '@src/constants/colors';

export const GroupContainer = styled.div`
	display: inline-flex; /* Changed from flex to inline-flex to fit content */
	border: 1px solid ${WIN31_BUTTON_SHADOW};
	box-shadow: inset -1px -1px 0px ${WIN31_BUTTON_SHADOW},
		inset 1px 1px 0px ${WIN31_BUTTON_HIGHLIGHT};

	/* Remove spacing between buttons */
	& > * {
		border-radius: 0;
		margin: 0;
	}

	/* Remove borders between buttons to avoid double borders */
	& > *:not(:first-of-type) {
		border-left: none;
	}

	/* Responsive stacking on mobile */
	@media (max-width: 480px) {
		flex-direction: column;

		& > *:not(:first-of-type) {
			border-left: 2px solid ${WIN31_BUTTON_HIGHLIGHT};
			border-top: none;
		}
	}
`;
