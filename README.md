# React Retro UI Library

[![npm version](https://badge.fury.io/js/retro-react.svg)](https://www.npmjs.com/package/retro-react)
[![npm license](https://img.shields.io/npm/l/retro-react.svg)](https://www.npmjs.com/package/retro-react)

React Retro UI Library is a retro-themed UI library for React that offers a unique set of over 20 components to help you effortlessly build nostalgic user interfaces. The library includes components such as buttons, containers, inputs, boxes, cards, text, modals, progress bars, chips, and alerts, among others.

There are also some unique components such as the `MouseTrail` component, which creates a trail of mouse cursors that follow the user's mouse movements, `PixelatedImage`, which pixelates an image, and many more. Additional components can be found in the demo.

The library is in it's early stages, so there are still many components to be added. Suggestions are always welcome, so feel free to open an issue [here](https://github.com/retro-react/retro-react). Stay tuned for frequent updates!

## Demo

Explore the [demo](https://retro-react.github.io/retro-react/?path=/docs/overview-introduction--docs/) of the library to see all the components in action.

## Installation

You can install the `retro-react` package using npm or yarn:

```bash
npm install retro-react
```

or

```bash
yarn add retro-react
```

## Usage

You can import the components from the retro-react package and use them in your React application as follows:

```jsx
import React from 'react';
import {
	Alert,
	Box,
	Button,
	Card,
	Chip,
	Container,
	Input,
	Modal,
	ProgressBar,
	Text,
} from 'retro-react';

const App = () => {
	return (
		<div>
			<Button>Click me</Button>
			<Container>{/* Your content here */}</Container>
			<Input placeholder="Enter text" />
			<Box>Box content</Box>
			<Card header="Header" footer="Footer">
				{/* Card content */}
			</Card>
			<Text variant="h1">Hello, world!</Text>
			<Modal open={true}>{/* Modal content */}</Modal>
			<ProgressBar value={50} />
			<Chip color="primary">Chip</Chip>
			<Alert color="success" message="Success!" />
		</div>
	);
};

export default App;
```

## Components

Please refer to the [demo](https://retro-react.github.io/retro-react/?path=/docs/overview-introduction--docs/) for a complete list of components and their props.

## Global styles

Every component in React Retro UI has a `retro-ui` class name attached. This makes it easy to apply global styling to all components. For instance, you can change the font family of all components by adding the following CSS to your main stylesheet:

```css
.retro-ui {
	font-family: 'Roboto', sans-serif !important;
}
```

## `sx` prop

All components in React Retro UI support the `sx` prop, which allows you to add custom styles to the component. The `sx` prop accepts an object with CSS properties and values. For more information on the `sx` prop, please refer to the [documentation](https://theme-ui.com/sx-prop).

```jsx
<Button sx={{ backgroundColor: 'red' }}>Click me</Button>
<Text sx={{ color: 'blue' }}>Hello, world!</Text>
<Container sx={{ border: '1px solid black', width: '100vh' }}>{/* Your content here */}</Container>
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Contributing

Contributions are welcome! People who want to contribute to this project can open an issue or submit a pull request [here](https://github.com/retro-react/retro-react). If you are dedicated to contributing to this project, you can also contact me there.
