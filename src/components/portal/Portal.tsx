import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface Position {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
}

export interface PortalProps {
	children: React.ReactNode;
	position?: Position;
}

export const Portal = ({ children, position }: PortalProps) => {
	const [mounted, setMounted] = useState(false);
	const [element] = useState(() =>
		typeof document !== 'undefined' ? document.createElement('div') : null,
	);

	useEffect(() => {
		if (!element) return;

		setMounted(true);
		document.body.appendChild(element);

		if (position) {
			element.style.position = 'fixed';
			if (position.top !== undefined) element.style.top = `${position.top}px`;
			if (position.bottom !== undefined)
				element.style.bottom = `${position.bottom}px`;
			if (position.left !== undefined)
				element.style.left = `${position.left}px`;
			if (position.right !== undefined)
				element.style.right = `${position.right}px`;
		}

		return () => {
			if (element.parentNode === document.body) {
				document.body.removeChild(element);
			}
		};
	}, [position, element]);

	return mounted && element ? ReactDOM.createPortal(children, element) : null;
};
