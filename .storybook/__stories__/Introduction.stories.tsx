import { Meta } from '@storybook/react';
import React from 'react';

export default {
	title: 'Overview/Introduction',
	parameters: {
		docs: {
			page: () => (
				<>
					<h1>Welcome to Retro React UI 📟</h1>
					<blockquote>
						Relive the nostalgic 90s web experience with our old-school inspired
						design system - Version v1.0.7
					</blockquote>
					<h2>Installation</h2>
					<p>Get started by installing Retro React in your project:</p>
					<pre
						style={{
							// black background
							backgroundColor: '#000',
							// white text
							color: '#fff',
							// padding
							padding: '1rem',
							// rounded corners
							borderRadius: '0.5rem',
							// scrollable
							overflow: 'auto',
						}}
					>
						<code>npm install retro-react</code>
					</pre>
					<h2>Quick Usage</h2>
					<p>
						Easily incorporate our retro components into your project for a
						vintage look:
					</p>
					<pre
						style={{
							// black background
							backgroundColor: '#000',
							// white text
							color: '#fff',
							// padding
							padding: '1rem',
							// rounded corners
							borderRadius: '0.5rem',
							// scrollable
							overflow: 'auto',
						}}
					>
						<code>{`import React from 'react';
import { Button } from 'retro-react';

function App() {
  return <Button>Click me</Button>;
}`}</code>
					</pre>
					<p>
						Take a trip down memory lane and explore our collection of
						retro-styled components that evoke the charm of the 90s internet.
						Customize and adapt these components to create a unique experience
						for your users. Happy coding! 🚀
					</p>
				</>
			),
		},
	},
} as Meta;

export const Introduction = () => {
	return <></>;
};
