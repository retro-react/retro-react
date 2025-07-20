/** @jsxImportSource theme-ui */
import { cloneElement, forwardRef, useId, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Tabs.styled';

export type TabsChildren =
	| React.ReactElement<TabProps>
	| React.ReactElement<TabContentProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
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
 * The order of the `Tab` and `TabContent` components doesn't matter.
 *
 * Use arrow keys to navigate between tabs.
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
	({ id, className, children, defaultActiveTabLabel, ...rest }, ref) => {
		const [activeTabLabel, setActiveTabLabel] = useState<string | undefined>(
			defaultActiveTabLabel,
		);
		const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
		const tabId = useId();

		// Handling keyboard navigation
		const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
			const currentIndex = tabsRef.current.findIndex(
				(tab) => tab && tab.getAttribute('data-tab-id') === activeTabLabel,
			);

			if (e.key === 'ArrowRight') {
				const nextIndex = (currentIndex + 1) % tabsRef.current.length;
				const nextTab = tabsRef.current[nextIndex];

				if (nextTab) {
					setActiveTabLabel(nextTab.getAttribute('data-tab-id') || undefined);
					nextTab.focus();
				}
			} else if (e.key === 'ArrowLeft') {
				const prevIndex =
					(currentIndex - 1 + tabsRef.current.length) % tabsRef.current.length;
				const prevTab = tabsRef.current[prevIndex];
				if (prevTab) {
					setActiveTabLabel(prevTab.getAttribute('data-tab-id') || undefined);
					prevTab.focus();
				}
			}
		};

		const tabs = children.filter(
			(child) => child && child.type === Tab,
		) as React.ReactElement[];

		const tabContents = children.filter(
			(child) => child && child.type === TabContent,
		) as React.ReactElement[];

		const enhancedTabs = tabs.map((tab, index) =>
			cloneElement(tab, {
				ref: (el: HTMLButtonElement | null) => {
					tabsRef.current[index] = el;
				},
				key: `${tabId}-tab-${index}`,
				$isActive: tab.props.label === activeTabLabel,
				setActiveTabLabel,
				tabIndex: tab.props.label === activeTabLabel ? 0 : -1,
				'data-tab-id': tab.props.label,
			}),
		);

		const activeTabContent = tabContents.find(
			(tabContent) => tabContent.props.label === activeTabLabel,
		);

		// Added onKeyDown to the Sc.TabsWrapper props
		return (
			<Sc.TabsWrapper
				ref={ref}
				id={id}
				onKeyDown={handleKeyDown}
				className={classNames('tabs-root', className, commonClassNames)}
				role="tablist"
				aria-orientation="horizontal"
				{...rest}
			>
				<Sc.TabList className="tabs-header">{enhancedTabs}</Sc.TabList>
				{activeTabContent && (
					<Sc.TabContent className="tab-content-area">
						{activeTabContent}
					</Sc.TabContent>
				)}
			</Sc.TabsWrapper>
		);
	},
);

// ---------------------------------------------- Tab ----------------------------------------------

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
	/**
	 *	The label of the tab. Has to match the id of the corresponding TabContent.
	 */
	label: string;
	/**
	 * Whether the tab is active.
	 *
	 *	@internal Used to set the active tab.
	 */
	$isActive?: boolean;
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
	sx?: ThemeUICSSObject;
}

/**
 * The tab header. Has to be used with `Tabs` component. Has to have the same label as the corresponding `TabContent`.
 *
 */
export const Tab = forwardRef<HTMLButtonElement, TabProps>(
	(
		{
			sx,
			label,
			children,
			$isActive = false,
			onClick,
			setActiveTabLabel,
			...rest
		},
		ref,
	) => {
		const handleClick = () => {
			if (onClick) {
				onClick();
			}

			if (setActiveTabLabel) {
				setActiveTabLabel(label);
			}
		};

		return (
			<Sc.TabItem
				ref={ref}
				sx={sx}
				$isActive={$isActive}
				aria-label={label}
				onClick={handleClick}
				className={classNames('tab-root', $isActive ? 'tab-active' : '')}
				role="tab"
				type="button"
				{...rest}
			>
				{children}
			</Sc.TabItem>
		);
	},
);

// ---------------------------------------------- TabContent ----------------------------------------------

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content of the tab.
	 *
	 * @default undefined
	 */
	children?: React.ReactNode;
	/**
	 * The label of the `TabContent` component. Has to match the label of the corresponding Tab.
	 */
	label: string;
	sx?: ThemeUICSSObject;
}

/**
 * The content of the tab. Has to be a child of the `Tabs` component.
 * Pass the label of the `Tab` component as the `label` prop.
 *
 * The `label` prop has to match the label of the corresponding `Tab` component.
 */
export const TabContent: React.FC<TabContentProps> = ({
	label,
	children,
	sx,
	...rest
}) => {
	return (
		<Sc.TabContent sx={sx} {...rest} className="tab-content" role="tabpanel">
			{children}
		</Sc.TabContent>
	);
};

Tabs.displayName = 'Tabs';
