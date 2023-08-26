import styled from '@emotion/styled';
import getColorScheme from '@src/utils/getColorScheme';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_3, SHADE_5, WHITE } from '@src/constants/colors';
import { AccordionColor } from './Accordion';

export const AccordionWrapper = styled.div`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	margin-bottom: 1rem;
`;

export const AccordionHeader = styled.button<{
	$pattern: ComponentPatterns;
	$color: AccordionColor;
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) =>
		(props.theme.colors && props.theme.colors[props.$color]) ||
		getColorScheme(props.$color)};
	text-shadow: 1px 1px 2px ${rgba(WHITE, 0.5)};
	padding: 0.5rem;
	font-size: 1rem;
	font-weight: bold;
	width: 100%;
	outline: none;
	cursor: pointer;
	border: 2px dotted ${SHADE_5};

	${(props) => {
		const gradient = `
      linear-gradient(
        ${rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						getColorScheme(props.$color),
					0.4,
				)},
        ${rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						getColorScheme(props.$color),
					0.4,
				)}
      ),
			url(${getPatternScheme(props.$pattern)})
    `;

		switch (props.$pattern) {
			case 'noise':
				return `
          background-image: ${gradient};
        `;
			case 'stripes':
				return `
          background-image: ${gradient};
					color: ${WHITE};
					text-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};
        `;
			case 'dots':
			default:
				return `
          background-image: ${gradient};
					color: ${WHITE};
					text-shadow: 1px 1px 2px ${rgba(BLACK, 0.5)};
        `;
		}
	}}

	${({ $color }) =>
		$color === 'greyscale-dark' &&
		`
			color: ${WHITE};
			`}

	&:hover {
		background-color: ${SHADE_3};
		background-position: -50px 0;
	}
`;

export const AccordionContent = styled.div<{
	isOpen: boolean;
	$color: AccordionColor;
	maxHeight: string;
}>`
	background: linear-gradient(
			${(props) =>
				rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						getColorScheme(props.$color),
					0.1,
				)},
			${(props) =>
				rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						getColorScheme(props.$color),
					0.1,
				)}
		),
		${WHITE};
	border: 1px solid
		${(props) =>
			rgba(
				(props.theme.colors && props.theme.colors[props.$color]) ||
					getColorScheme(props.$color),
				0.4,
			)};
	overflow: hidden;
	max-height: ${(props) => (props.isOpen ? props.maxHeight : '0')};

	transition: max-height 0.2s ease-out;

	& > div {
		padding: 0.5rem;
	}
`;
