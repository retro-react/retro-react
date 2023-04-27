import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
	children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
	const [mounted, setMounted] = useState(false);
	const elRef = useRef(document.createElement('div'));

	useEffect(() => {
		const element = elRef.current;
		setMounted(true);
		document.body.appendChild(element);

		return () => {
			document.body.removeChild(element);
		};
	}, []);

	return mounted ? ReactDOM.createPortal(children, elRef.current) : null;
};
