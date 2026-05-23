export const fontSizeForVariant = (variant) => {
	const sizes = {
		h1: '24px',
		h2: '20px',
		h3: '16px',
		h4: '14px',
		h5: '13px',
		h6: '12px',
		body1: '13px',
		body2: '12px',
		paragraph: '12px',
		small: '11px',
	};
	return sizes[variant] || '12px';
};

export const fontSizeForBreakpoint = () => {
	return '';
};
