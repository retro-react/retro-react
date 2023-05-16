import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
	children: React.ReactNode;
	position?: { top: number; left: number };
}

export const Portal = ({ children, position }: PortalProps) => {
	const [mounted, setMounted] = useState(false);
	const elRef = useRef(document.createElement('div'));

	useEffect(() => {
		const element = elRef.current;
		setMounted(true);
		document.body.appendChild(element);

		if (position) {
			element.style.position = 'absolute';
			element.style.top = `${position.top}px`;
			element.style.left = `${position.left}px`;
		}

		return () => {
			document.body.removeChild(element);
		};
	}, [position]);

	return mounted ? ReactDOM.createPortal(children, elRef.current) : null;
};
