import styled from '@emotion/styled';
import { rgba } from '@src/utils/rgba';
import { BLACK, SHADE_4, SHADE_5 } from '@src/constants/colors';

export const BreadcrumbsWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;

	font-family: 'Trebuchet MS', Helvetica, sans-serif;
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

	&:not(:last-child)::after {
		content: '\\00a0\\00a0\\00bb\\00a0\\00a0';
	}
`;

export const BreadcrumbAnchor = styled.a`
	color: #0000ee;
	text-decoration: underline;

	&:visited,
	&:hover,
	&:active,
	&:focus {
		color: #551a8b;
	}
`;

export const BreadcrumbActive = styled.span<{
	$color?: string;
}>`
	color: ${(props) => (props.$color ? props.$color : SHADE_4)};
	text-shadow: 1px 1px 1px ${rgba(BLACK, 0.5)};
	text-decoration: underline;
`;
