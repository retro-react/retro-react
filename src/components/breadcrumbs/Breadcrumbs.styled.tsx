import styled from '@emotion/styled';
import { SHADE_4, SHADE_5 } from '@src/constants/colors';
import { SHADOWS } from '@src/constants/shadows';

export const BreadcrumbsWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	font-family: 'FrauncesLatin', sans-serif;
`;

export const Breadcrumb = styled.span<{
	$active?: boolean;
	$color?: string;
}>`
	font-size: 1rem;
	color: ${(props) => (props.$color ? props.$color : SHADE_5)};
	text-shadow: ${SHADOWS.text[1]};

	letter-spacing: 0.05rem;

	&:not(:last-child):after {
		content: '\\00a0\\00a0\\00bb\\00a0\\00a0';
	}
`;

export const BreadcrumbAnchor = styled.a`
	color: inherit;
	text-decoration: none;

	&:visited,
	&:hover,
	&:active,
	&:focus {
		color: inherit;
	}

	&[href]:hover {
		text-decoration: underline;
	}
`;

export const BreadcrumbActive = styled.span<{
	$color?: string;
}>`
	color: ${(props) => (props.$color ? props.$color : SHADE_4)};
	text-shadow: ${SHADOWS.text[1]};
	text-decoration: underline;
`;
