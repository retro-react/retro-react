import styled from '@emotion/styled';
import { lighten } from 'polished';
import { raised } from '../../constants/bevels';
import {
	BLACK,
	SHADE_2,
	VGA_WHITE,
	WHITE,
	WIN31_BLUE,
	WIN31_BUTTON_FACE,
} from '../../constants/colors';
import { FONT_SIZES, SYSTEM_FONT } from '../../constants/fonts';
import getColorScheme from '../../utils/getColorScheme';
import { TableColors } from './Table';

export const TableWrapper = styled.div<{ $maxHeight?: string }>`
	background-color: ${WHITE};
	${({ $maxHeight }) =>
		$maxHeight &&
		`
			max-height: ${$maxHeight};
			overflow: auto;

			& .retro-table-header {
				position: sticky;
				top: 0;
			}
	`}
`;

export const TableContainer = styled.table<{
	$bordered?: boolean;
	$maxHeight?: string;
	$color: TableColors;
}>`
	font-family: ${SYSTEM_FONT};
	width: 100%;

	${({ $bordered, $maxHeight, $color }) =>
		$bordered &&
		`
		& td, & th {
			border: 1px solid ${lighten(0.1, getColorScheme($color))};

			${$maxHeight && `border-top: 0 solid black;`}
		}
	`}

	${({ $maxHeight }) =>
		$maxHeight
			? `
			border-collapse: collapse;
		`
			: `
		border-collapse: separate;
		border-spacing: 0;
	`}
`;

export const TableHeader = styled.thead`
	box-sizing: border-box;
`;

export const TableHeaderCell = styled.th<{
	width?: string;
	align?: string;
	sortDirection?: 'ascending' | 'descending';
	$sortable?: boolean;
	$color: TableColors;
}>`
	box-sizing: border-box;
	${raised}
	background-color: ${WIN31_BUTTON_FACE};
	color: ${BLACK};
	font-weight: bold;
	padding: 4px 8px;
	width: ${(props) => props.width || 'auto'};
	text-align: ${(props) => props.align || 'left'};
	z-index: 2;

	${({ $sortable, sortDirection }) =>
		$sortable &&
		`
		cursor: pointer;

		&:after {
			content: ${
				sortDirection === 'ascending'
					? "'▲'"
					: sortDirection === 'descending'
					? "'▼'"
					: "''"
			};
			margin-left: 5px;
		}
	`}
`;

export const TableCell = styled.td<{ width?: string; align?: string }>`
	border: 1px solid transparent;
	padding: 8px;
	width: ${(props) => props.width || 'auto'};
	text-align: ${(props) => props.align || 'left'};
`;

export const Tr = styled.tr<{
	$striped?: boolean;
	$isRowClickEnabled?: boolean;
	$color: TableColors;
}>`
	${({ $striped, $color }) =>
		$striped &&
		`
		&:nth-of-type(even) {
			background-color: ${
				$color === 'greyscale'
					? SHADE_2
					: $color === 'warn'
					? lighten(0.2, getColorScheme($color))
					: lighten(0.4, getColorScheme($color))
			};
		}
	`}

	${({ $isRowClickEnabled }) =>
		$isRowClickEnabled &&
		`
		cursor: pointer;
		&:hover, &:hover td {
			background-color: ${WIN31_BLUE};
			color: ${VGA_WHITE};
		}
	`}
`;

export const PaginationContainer = styled.div<{ $bordered?: boolean }>`
	font-family: ${SYSTEM_FONT};
	background-color: ${WHITE};
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 10px 0;

	${({ $bordered }) =>
		$bordered &&
		`
		border: 1px solid #ddd;
		border-top: none;
	`}
`;

export const PaginationButton = styled.button`
	color: ${BLACK};
	background-color: ${SHADE_2};
	${raised}
	cursor: pointer;
	margin: 0 5px;

	&:active:not(:disabled) {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export const PaginationIcon = styled.img<{
	$disabled?: boolean;
}>`
	width: 20px;
	height: 20px;
	margin-bottom: -3px;

	&.retro-arrow-left {
		transform: rotate(180deg);
	}

	${({ $disabled }) =>
		$disabled &&
		`
		opacity: 0.4;
	`}
`;

export const PaginationInfo = styled.span({
	margin: '0 10px',
	fontSize: FONT_SIZES.MEDIUM,
});
