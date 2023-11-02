import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_4, SHADE_5 } from '@src/constants/colors';

export const BreadcrumbsWrapper = styled.nav<{
	$backgroundColor?: string;
}>`
	display: flex;
	flex-wrap: wrap;

	font-family: 'Trebuchet MS', Helvetica, sans-serif;

	align-items: center;
	padding: 8px;

	background-color: ${(props) =>
		props.$backgroundColor ? props.$backgroundColor : SHADE_5};
	border: 2px outset #ddd;

	${(props) =>
		props.$backgroundColor === 'transparent' &&
		`
			background-color: transparent;
			border: none;
		`}
`;

export const Breadcrumb = styled.span<{
	$active?: boolean;
	$color?: string;
}>`
	font-size: 1rem;
	color: ${(props) => (props.$color ? props.$color : SHADE_5)};
	text-shadow: 1px 1px 1px ${rgba(BLACK, 0.5)};
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	padding: 0 8px;

	&:not(:last-child)::after {
		content: '\\00a0\\00a0\\00bb\\00a0\\00a0';
	}

	font-weight: ${(props) => (props.$active ? 'bold' : 'normal')};
`;

export const BreadcrumbAnchor = styled.a<{
	$color?: string;
}>`
	color: #0000ee;
	text-decoration: underline;
	padding: 2px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #e5e5e5;
		color: ${(props) => (props.$color ? props.$color : '#551a8b')};
	}

	&:visited {
		color: ${(props) => (props.$color ? props.$color : '#551a8b')};
	}

	&:active,
	&:focus {
		background-color: #c5c5c5;
	}
`;

export const BreadcrumbActive = styled.span<{
	$color?: string;
}>`
	color: ${(props) => (props.$color ? props.$color : SHADE_4)};
	text-shadow: 1px 1px 1px ${rgba(BLACK, 0.5)};
	text-decoration: underline;
`;
