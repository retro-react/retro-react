/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames as cx } from '@src/utils/classNames';

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the group.
	 */
	children: React.ReactNode;

	/**
	 * The gap between each child element.
	 *
	 * @default '10px'
	 */
	gap?: string;

	/**
	 * The direction of the group.
	 * Can be either 'row' or 'column'.
	 *
	 * @default 'row'
	 */
	direction?: 'row' | 'column';
	sx?: ThemeUICSSObject;
}

/**
 * Group is a simple layout component that provides a way to group and apply layout to its children.
 *
 * @example
 * <Group gap="20px" direction="row">
 *   <Chip color="success">AB</Chip>
 *   <Chip color="error">CD</Chip>
 * </Group>
 */
export const Group = forwardRef<HTMLDivElement, GroupProps>(
	(
		{ children, gap = '10px', direction = 'row', id, className, sx, ...rest },
		ref,
	) => {
		return (
			<div
				id={id}
				ref={ref}
				sx={sx}
				className={cx('group-root', className)}
				style={{ display: 'flex', gap: gap, flexDirection: direction }}
				{...rest}
			>
				{children}
			</div>
		);
	},
);

Group.displayName = 'Group';
