/** @jsxImportSource theme-ui */
import { cloneElement, forwardRef, useEffect, useId, useState } from 'react';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Tabs.styled';

export type TabsChildren =
	| React.ReactElement<TabProps>
	| React.ReactElement<TabContentProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The color of the Tabs.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors;
	/**
	 * The pattern of the Tabs.
	 *
	 * @default 'noise'
	 */
	pattern?: ComponentPatterns;
	/**
	 * The default active tab label.
	 *
	 * @default undefined
	 */
	defaultActiveTabLabel?: string;
	/**
	 * The content of the tabs (only Tab and TabContent components).
	 *
	 * @default []
	 */
	children: TabsChildren[];
}

/**
 * Tabs are used to group content together. Used with `Tab` and `TabContent` components.
 * `Tab` is used to create the tab header, and `TabContent` is used to create the tab content.
 * Both components have to have the same label. The first tab is active by default.
 *
 * With `sx` prop you can use all the CSS properties of the theme if you want to customize the Tabs.
 *
 * @example
 * <Tabs>
 * 	<Tab label="Tab 1">
 * 		Content 1
 * 	</Tab>
 * 	<Tab label="Tab 2">
 * 		Content 2
 * 	</Tab>
 * 	<TabContent label="Tab 1">
 * 		Content 1
 * 	</TabContent>
 * 	<TabContent label="Tab 2">
 * 		Content 2
 * 	</TabContent>
 * </Tabs>
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
	(
		{
			id,
			className,
			children,
			color = 'primary',
			pattern = 'noise',
			defaultActiveTabLabel,
			...rest
		},
		ref,
	) => {
		const [activeTabLabel, setActiveTabLabel] = useState<string | undefined>(
			undefined,
		);
		const tabId = useId();

		const tabs = children.filter(
			(child) => child && child.type === Tab,
		) as React.ReactElement[];

		const tabContents = children.filter(
			(child) => child && child.type === TabContent,
		) as React.ReactElement[];

		useEffect(() => {
			const activeTab =
				tabs.find(
					(child) => child && child.props.label === defaultActiveTabLabel,
				) || tabs[0];

			if (activeTab) {
				setActiveTabLabel(activeTab.props.label);
			}
		}, [children]);

		const enhancedTabs = tabs.map((tab, index) =>
			cloneElement(tab, {
				key: `${tabId}-tab-${index}`,
				isActive: tab.props.label === activeTabLabel,
				$color: color,
				setActiveTabLabel,
			}),
		);

		const activeTabContent = tabContents.find(
			(tabContent) => tabContent.props.label === activeTabLabel,
		);

		return (
			<Sc.TabsWrapper
				ref={ref}
				id={id}
				className={classNames('tabs-root', className, commonClassNames)}
				{...rest}
			>
				<Sc.TabsHeader
					$color={color}
					$pattern={pattern}
					className="tabs-header"
				>
					{enhancedTabs}
				</Sc.TabsHeader>
				{activeTabContent}
			</Sc.TabsWrapper>
		);
	},
);

// ---------------------------------------------- Tab ----------------------------------------------

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 *	The label of the tab. Has to match the label of the corresponding TabContent.
	 */
	label: string;
	/**
	 * Whether the tab is active.
	 *
	 *	@internal Used to set the active tab.
	 */
	isActive?: boolean;
	/**
	 * The onClick handler of the tab.
	 *
	 * @default undefined
	 */
	onClick?: () => void;
	/**
	 * @internal Used to set the active tab label.
	 */
	setActiveTabLabel?: (label: string) => void;
	/**
	 * @internal Used to set the color of the tab.
	 *
	 * @default 'primary'
	 */
	$color?: ComponentColors;
	/**
	 * @internal Used to set the pattern of the tab.
	 *
	 * @default 'noise'
	 */
	$pattern?: ComponentPatterns;
	sx?: any;
}

export const Tab: React.FC<TabProps> = ({
	sx,
	label,
	children,
	isActive = false,
	$color = 'primary',
	onClick,
	setActiveTabLabel,
	...rest
}) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}

		if (setActiveTabLabel) {
			setActiveTabLabel(label);
		}
	};

	return (
		<Sc.TabWrapper
			sx={sx}
			label={label}
			$color={$color}
			aria-label={label}
			onClick={handleClick}
			isActive={isActive}
			className="tab"
			{...rest}
		>
			{children}
		</Sc.TabWrapper>
	);
};

// ---------------------------------------------- TabContent ----------------------------------------------

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the tab.
	 *
	 * @default undefined
	 */
	children?: React.ReactNode;
	/**
	 * The label of the tab. Has to match the label of the corresponding Tab.
	 */
	label: string;
	sx?: any;
}

export const TabContent: React.FC<TabContentProps> = ({
	label,
	children,
	sx,
	...rest
}) => {
	return (
		<Sc.TabContentWrapper
			label={label}
			sx={sx}
			{...rest}
			className="tab-content"
			role="tabpanel"
		>
			{children}
		</Sc.TabContentWrapper>
	);
};

Tabs.displayName = 'Tabs';
