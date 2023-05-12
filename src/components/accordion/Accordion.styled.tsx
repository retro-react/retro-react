import styled from '@emotion/styled';
import {
	ComponentPatterns,
	getPatternScheme,
} from '@src/utils/getPatternScheme';
import { rgba } from '@src/utils/rgba';
import {
	BLACK,
	ERROR,
	PRIMARY,
	SECONDARY,
	SHADE_3,
	SUCCESS,
	WARN,
	WHITE,
} from '@src/constants/colors';
import { AccordionColor } from './Accordion';

const accordionColorStyles = {
	primary: PRIMARY,
	secondary: SECONDARY,
	success: SUCCESS,
	error: ERROR,
	warn: WARN,
};

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
		accordionColorStyles[props.$color]};
	text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
	padding: 0.5rem;
	font-size: 1rem;
	font-weight: bold;
	width: 100%;
	border: none;
	outline: none;
	cursor: pointer;

	${(props) => {
		const gradient = `
      linear-gradient(
        ${rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						accordionColorStyles[props.$color],
					0.4,
				)},
        ${rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						accordionColorStyles[props.$color],
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

	&:hover {
		background-color: ${SHADE_3};
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
						accordionColorStyles[props.$color],
					0.1,
				)},
			${(props) =>
				rgba(
					(props.theme.colors && props.theme.colors[props.$color]) ||
						accordionColorStyles[props.$color],
					0.1,
				)}
		),
		${WHITE};
	border: 1px solid
		${(props) =>
			rgba(
				(props.theme.colors && props.theme.colors[props.$color]) ||
					accordionColorStyles[props.$color],
				0.4,
			)};
	overflow: hidden;
	max-height: ${(props) => (props.isOpen ? props.maxHeight : '0')};
	transition: max-height 0.2s linear;

	& > div {
		padding: 0.5rem;
	}
`;
