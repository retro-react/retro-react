import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Tab, TabContent, Tabs } from '../Tabs';

describe('Tabs', () => {
	it('defaults active tab to the first when none specified', () => {
		render(
			<Tabs>
				<Tab label="one">First</Tab>
				<Tab label="two">Second</Tab>
				<TabContent label="one">Content 1</TabContent>
				<TabContent label="two">Content 2</TabContent>
			</Tabs>,
		);
		expect(screen.getByText('Content 1')).toBeInTheDocument();
		expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
	});

	it('switches active tab on click', async () => {
		render(
			<Tabs>
				<Tab label="a">A</Tab>
				<Tab label="b">B</Tab>
				<TabContent label="a">aaa</TabContent>
				<TabContent label="b">bbb</TabContent>
			</Tabs>,
		);
		await userEvent.click(screen.getByText('B'));
		expect(screen.getByText('bbb')).toBeInTheDocument();
	});

	it('honors controlled activeTabLabel', () => {
		render(
			<Tabs activeTabLabel="two" onTabChange={() => undefined}>
				<Tab label="one">One</Tab>
				<Tab label="two">Two</Tab>
				<TabContent label="one">o1</TabContent>
				<TabContent label="two">o2</TabContent>
			</Tabs>,
		);
		expect(screen.getByText('o2')).toBeInTheDocument();
	});
});
