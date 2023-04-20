# React Retro UI Library

[![1.0.1](https://badge.fury.io/js/retro-react.svg)](https://www.npmjs.com/package/retro-react)

A retro-themed UI library for React that provides 10 unique components to easily build user interfaces with a nostalgic vibe. The library includes components such as buttons, containers, inputs, boxes, cards, text, modals, progress bars, chips, and alerts.

## Demo

You can view the demo of the library and its components [here](https://retro-react.netlify.app/).

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
} from 'your-ui-library-name';

const App = () => {
	return (
		<div>
			<Button>Click me</Button>
			<Container>{/* Your content here */}</Container>
			<Input placeholder="Enter text" />
			<Box>Box content</Box>
			<Card>{/* Card content */}</Card>
			<Text variant="h1">Hello, world!</Text>
			<Modal>{/* Modal content */}</Modal>
			<ProgressBar value={50} />
			<Chip label="Tag" />
			<Alert type="success" message="Success!" />
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
<Chip label="Tag" onClick={() => console.log('Chip clicked!')} />
```

### Alert

A retro-styled alert component with customizable styles and click event handling.

```jsx
<Alert
	type="success"
	message="Success!"
	onClick={() => console.log('Alert clicked!')}
/>
```
