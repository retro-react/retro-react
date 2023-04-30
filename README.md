# React Retro UI Library

[![1.0.1](https://badge.fury.io/js/retro-react.svg)](https://www.npmjs.com/package/retro-react)

A retro-themed UI library for React that provides 20+ unique components to easily build user interfaces with a nostalgic vibe. The library includes components such as buttons, containers, inputs, boxes, cards, text, modals, progress bars, chips, and alerts. **More components are showcased in the demo.**

Expect more components to be added in the near future! If you have any suggestions for new components or features, feel free to open an issue [here](https://github.com/retro-react/retro-react). Changes are done frequently, so make sure to check back often!

## Demo

You can view the demo of the library and its components [here](https://retro-react.github.io/retro-react/).

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

### Button

A retro-styled button component with customizable styles and click event handling.

```jsx
<Button onClick={() => console.log('Button clicked!')}>Click me</Button>
```

### Container

A retro-styled container component with customizable styles.

```jsx
<Container>{/* Your content here */}</Container>
```

### Input

A retro-styled input component with customizable styles and change event handling.

```jsx
<Input placeholder="Enter text" onChange={(e) => console.log(e.target.value)} />
```

### Box

A retro-styled box component with customizable styles.

```jsx
<Box>Box content</Box>
```

### Card

A retro-styled card component with customizable styles.

```jsx
<Card>{/* Card content */}</Card>
```

### Text

A retro-styled text component with customizable styles and text variants.

```jsx
<Text variant="h1">Hello, world!</Text>
```

### Modal

A retro-styled modal component with customizable styles and click event handling.

```jsx
<Modal open={true} onClose={() => console.log('Modal clicked!')}>
	{/* Modal content */}
</Modal>
```

### ProgressBar

A retro-styled progress bar component with customizable styles and progress value.

```jsx
<ProgressBar value={50} />
```

### Chip

A retro-styled chip component with customizable styles and click event handling.

```jsx
<Chip color="primary">Chip</Chip>
```

### Alert

A retro-styled alert component with customizable styles and click event handling.

```jsx
<Alert variant="success">{/* Alert content */}</Alert>
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Contributing

Contributions are welcome! People who want to contribute to this project can open an issue or submit a pull request [here](https://github.com/retro-react/retro-react). If you are dedicated to contributing to this project, you can also contact me there.
