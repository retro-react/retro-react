/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	useId,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Tabs.styled';

export type TabsChildren =
	| React.ReactElement<TabProps>
	| React.ReactElement<TabContentProps>;

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The default active tab label (uncontrolled mode).
	 *
	 * @default undefined
	 */
	defaultActiveTabLabel?: string;
	/**
	 * The active tab label (controlled mode).
	 *
	 * @default undefined
	 */
	activeTabLabel?: string;
	/**
	 * Callback fired when the active tab changes.
	 *
	 * @default undefined
	 */
	onTabChange?: (label: string) => void;
	/**
	 * The content of the tabs (only Tab and TabContent components).
	 *
	 * @default []
	 */
	children: TabsChildren | TabsChildren[];
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
	(
		{
			id,
			className,
			children,
			defaultActiveTabLabel,
			activeTabLabel: controlledActiveTabLabel,
			onTabChange,
			...rest
		},
		ref,
	) => {
		const childArray = Children.toArray(children) as React.ReactElement[];

		const tabs = childArray.filter(
			(child) => child && child.type === Tab,
		) as React.ReactElement[];

		const tabContents = childArray.filter(
			(child) => child && child.type === TabContent,
		) as React.ReactElement[];

		const firstTabLabel = tabs[0]?.props.label as string | undefined;
		const isControlled = controlledActiveTabLabel !== undefined;
		const [internalActiveTabLabel, setInternalActiveTabLabel] = useState<
			string | undefined
		>(defaultActiveTabLabel ?? firstTabLabel);
		const activeTabLabel = isControlled
			? controlledActiveTabLabel
			: internalActiveTabLabel;

		const setActiveTabLabel = (label: string) => {
			if (!isControlled) {
				setInternalActiveTabLabel(label);
			}
			onTabChange?.(label);
		};

		const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
		const tabId = useId();

		const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
			const target = e.target as HTMLElement;
			if (!target?.getAttribute('data-tab-id')) return;

			const currentIndex = tabsRef.current.findIndex(
				(tab) => tab && tab.getAttribute('data-tab-id') === activeTabLabel,
			);

			if (e.key === 'ArrowRight') {
				const nextIndex = (currentIndex + 1) % tabsRef.current.length;
				const nextTab = tabsRef.current[nextIndex];

				if (nextTab) {
					setActiveTabLabel(nextTab.getAttribute('data-tab-id') || '');
					nextTab.focus();
				}
			} else if (e.key === 'ArrowLeft') {
				const prevIndex =
					(currentIndex - 1 + tabsRef.current.length) % tabsRef.current.length;
				const prevTab = tabsRef.current[prevIndex];
				if (prevTab) {
					setActiveTabLabel(prevTab.getAttribute('data-tab-id') || '');
					prevTab.focus();
				}
			}
		};

		const tabButtonId = (label: string) =>
			`${tabId}-tab-${encodeURIComponent(label)}`;
		const tabPanelId = (label: string) =>
			`${tabId}-panel-${encodeURIComponent(label)}`;

		const enhancedTabs = tabs.map((tab, index) =>
			cloneElement(tab, {
				ref: (el: HTMLButtonElement | null) => {
					tabsRef.current[index] = el;
				},
				key: `${tabId}-tab-${index}`,
				id: tabButtonId(tab.props.label),
				$isActive: tab.props.label === activeTabLabel,
				setActiveTabLabel,
				tabIndex: tab.props.label === activeTabLabel ? 0 : -1,
				'data-tab-id': tab.props.label,
				'aria-controls': tabPanelId(tab.props.label),
				'aria-selected': tab.props.label === activeTabLabel,
			}),
		);

		const activeTabContent = tabContents.find(
			(tabContent) => tabContent.props.label === activeTabLabel,
		);

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
				{activeTabContent &&
					activeTabLabel &&
					cloneElement(activeTabContent, {
						id: tabPanelId(activeTabLabel),
						'aria-labelledby': tabButtonId(activeTabLabel),
					})}
			</Sc.TabsWrapper>
		);
	},
);

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
				data-tab-id={label}
				aria-label={typeof children === 'string' ? undefined : label}
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TabContent: React.FC<TabContentProps> = ({
	label: _label, // consumed by parent <Tabs> to match TabContent → Tab
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
Tab.displayName = 'Tab';
TabContent.displayName = 'TabContent';
