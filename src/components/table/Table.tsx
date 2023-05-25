/** @jsxImportSource theme-ui */
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import arrowIcon from '../../assets/svg/arrow_icon.svg';
import {
	PaginationButton,
	PaginationContainer,
	PaginationIcon,
	PaginationInfo,
	TableCell,
	TableContainer,
	TableHeader,
	TableHeaderCell,
	TableWrapper,
	Tr,
} from './Table.styled';

type TableCell = string | number | JSX.Element;

export type TableColors = ComponentColors | 'greyscale';

interface PaginationOptions {
	/**
	 * The number of items to display on each page.
	 *
	 * @default 10
	 */
	pageSize: number;
	/**
	 * The number of pages to display in the pagination component.
	 *
	 * @default 5
	 */
	initialPage?: number;
}

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
	/**
	 * An array of strings that will be used as the table headers.
	 *
	 * @default []
	 */
	headers: string[];
	/**
	 * A two-dimensional array representing the content of the table. Each inner array represents a row, and each item within this array represents a
	 * cell within that row.
	 *
	 * @default []
	 */
	data: TableCell[][];
	/**
	 * The color of the table. Accepts library colors. If this is not provided, the `greyscale` color will be used.
	 *
	 * @default 'greyscale'
	 */
	color?: TableColors;
	/**
	 * A boolean that, if true, applies zebra-striping to the rows of the table.
	 *
	 * @default false
	 */
	striped?: boolean;
	/**
	 * A boolean that, if true, adds borders around the cells of the table.
	 *
	 * @default true
	 */
	bordered?: boolean;
	/**
	 * A function that is called when a user clicks on a row. It can be used to provide more interactivity, such as navigating to a different page or
	 * opening a modal with more information about the clicked row.
	 *
	 * @default undefined
	 */
	onRowClick?: (row: TableCell[]) => void;
	/**
	 * An array that specifies the width of each column. For instance, ['20%', '30%', '50%'] would give the first column a width of 20%, the second
	 * column a width of 30%, and the third column a width of 50%.
	 *
	 * @default undefined
	 */
	columnWidths?: string[];
	/**
	 * An array that specifies the alignment of each column. For instance, ['left', 'right', 'center'] would align the first column to the left, the
	 * second column to the right, and the third column to the center.
	 *
	 * @default 'left'
	 */
	columnAlign?:
		| 'left'
		| 'center'
		| 'right'
		| 'justify'
		| ('left' | 'center' | 'right' | 'justify')[];
	/**
	 * An object that specifies the pagination options for the table. If this is not provided, the default pagination options will be used.
	 *
	 * You need to pass in an object with the following properties: `pageSize` and `initialPage`.
	 *
	 * @default { pageSize: 10, initialPage: 1 }
	 */
	paginationOptions?: PaginationOptions;
	/**
	 * A boolean that, if true, will render the table with pagination. This will render a pagination component below the table that allows the user to
	 *  navigate between pages.
	 *
	 * @default false
	 */
	pagination?: boolean;
	/**
	 * The maximum height of the table. If the table exceeds this height, it will become scrollable. This is useful if you want to render a table with a
	 * large number of rows. This is not virtualized.
	 *
	 * @default undefined
	 */
	maxHeight?: string;
	/**
	 * Enable sorting on the table. This will render a sort icon on the table header. Clicking on the header will sort the table by that column.
	 *
	 * @default false
	 */
	sortable?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * A table component that can be used to display data in a tabular format. It supports pagination, zebra-striping, and row click events.
 *
 * Server-side pagination is currently not supported. If you need to use server-side pagination, you should use a different table component.
 *
 *
 * @example
 * <Table
 * 	headers={['Name', 'Age', 'City']}
 * 	data={[
 * 		['John', '30', 'New York'],
 * 		['Jane', '25', 'London'],
 * 		['Jack', '20', 'Paris'],
 * ]}
 * 	columnWidths={['20%', '30%', '50%']}
 * 	columnAlign={['left', 'center', 'right']}
 * />
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
	(
		{
			id,
			className,
			children,
			columnWidths,
			columnAlign = 'left',
			color = 'greyscale',
			sortable = false,
			headers = [],
			data = [],
			striped = false,
			bordered = true,
			paginationOptions = { pageSize: 10, initialPage: 1 },
			maxHeight,
			pagination = false,
			onRowClick,
			sx,
			...rest
		},
		ref,
	) => {
		const isRowClickEnabled = !!onRowClick;
		const [sortedData, setSortedData] = useState<TableCell[][]>(data);
		const [sortConfig, setSortConfig] = useState<{
			key: number;
			direction: 'ascending' | 'descending';
		} | null>(null);

		const [currentPage, setCurrentPage] = useState(
			paginationOptions ? paginationOptions.initialPage || 1 : 1,
		);
		const totalPages = pagination
			? Math.ceil(
					data.length /
						(paginationOptions ? paginationOptions.pageSize : data.length),
			  )
			: 1;

		useEffect(() => {
			let sorted = [...data];

			if (sortConfig !== null) {
				sorted.sort((a, b) => {
					if (a[sortConfig.key] < b[sortConfig.key]) {
						return sortConfig.direction === 'ascending' ? -1 : 1;
					}
					if (a[sortConfig.key] > b[sortConfig.key]) {
						return sortConfig.direction === 'ascending' ? 1 : -1;
					}
					return 0;
				});
			}

			setSortedData(sorted);
		}, [sortConfig, data]);

		const handleSort = useCallback(
			(index: number) => {
				if (!sortable) return;
				let direction = 'ascending' as 'ascending' | 'descending';
				if (
					sortConfig &&
					sortConfig.key === index &&
					sortConfig.direction === 'ascending'
				) {
					direction = 'descending' as 'ascending' | 'descending';
				}
				setSortConfig({ key: index, direction });
			},
			[sortable, sortConfig],
		);

		if (sortConfig !== null) {
			sortedData.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}

		const paginatedData = useMemo(() => {
			return pagination && paginationOptions
				? sortedData.slice(
						(currentPage - 1) * paginationOptions.pageSize,
						currentPage * paginationOptions.pageSize,
				  )
				: sortedData;
		}, [pagination, paginationOptions, currentPage, sortedData]);

		return (
			<>
				<TableWrapper $maxHeight={maxHeight} className="table-wrapper">
					<TableContainer
						$color={color}
						$bordered={bordered}
						$maxHeight={maxHeight}
						className={classNames('table-root', className, commonClassNames)}
						ref={ref}
						id={id}
						sx={sx}
						{...rest}
					>
						<TableHeader className="retro-table-header">
							<Tr $color={color}>
								{headers.map((header, index) => (
									<TableHeaderCell
										className="retro-table-header-cell"
										$color={color}
										$sortable={sortable}
										onClick={() => handleSort(index)}
										sortDirection={
											index === sortConfig?.key
												? sortConfig?.direction
												: undefined
										}
										width={
											columnWidths && Array.isArray(columnWidths)
												? columnWidths[index]
												: undefined
										}
										align={
											Array.isArray(columnAlign)
												? columnAlign[index]
												: columnAlign
										}
										key={`retro-header-${index}`}
									>
										{header}
									</TableHeaderCell>
								))}
							</Tr>
						</TableHeader>
						<tbody>
							{paginatedData.map((row, i) => (
								<Tr
									className="retro-table-row"
									$color={color}
									key={`retro-row-${i}`}
									$striped={striped}
									$isRowClickEnabled={isRowClickEnabled}
									onClick={() => onRowClick?.(row)}
									sx={{ cursor: isRowClickEnabled ? 'pointer' : 'inherit' }}
								>
									{row.map((cell, cellIndex) => (
										<TableCell
											className="retro-table-cell"
											width={
												columnWidths && Array.isArray(columnWidths)
													? columnWidths[cellIndex]
													: undefined
											}
											align={
												Array.isArray(columnAlign)
													? columnAlign[cellIndex]
													: columnAlign
											}
											key={`retro-cell-${i}-${cellIndex}`}
										>
											{cell}
										</TableCell>
									))}
								</Tr>
							))}
						</tbody>
					</TableContainer>
				</TableWrapper>
				{pagination && (
					<PaginationContainer
						$bordered={bordered}
						className={classNames('table-pagination', commonClassNames)}
					>
						<PaginationButton
							disabled={currentPage === 1}
							onClick={() => setCurrentPage(currentPage - 1)}
							className="retro-pagination-button"
						>
							<PaginationIcon
								$disabled={currentPage === 1}
								className="retro-pagination-arrow retro-arrow-left"
								alt="Previous page"
								src={arrowIcon}
							/>
						</PaginationButton>
						<PaginationInfo>
							Page {currentPage} of {totalPages}
						</PaginationInfo>
						<PaginationButton
							disabled={currentPage === totalPages}
							onClick={() => setCurrentPage(currentPage + 1)}
							className="retro-pagination-button"
						>
							<PaginationIcon
								$disabled={currentPage === totalPages}
								className="retro-pagination-arrow retro-arrow-right"
								alt="Next page"
								src={arrowIcon}
							/>
						</PaginationButton>
					</PaginationContainer>
				)}
			</>
		);
	},
);

Table.displayName = 'Table';
