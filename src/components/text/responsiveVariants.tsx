export const fontSizeForVariant = (variant) => {
	const sizes = {
		h1: '2rem',
		h2: '1.5rem',
		h3: '1.25rem',
		h4: '1rem',
		h5: '0.875rem',
		h6: '0.75rem',
		body1: '1rem',
		body2: '0.875rem',
		paragraph: '0.75rem',
		small: '0.625rem',
	};
	return sizes[variant] || '1rem';
};

export const fontSizeForBreakpoint = (variant) => {
	const breakpoints = [
		'480px',
		'767px',
		'1024px',
		'1280px',
		'1536px',
		'1792px',
		'2048px',
	];
	const sizes = {
		h1: ['2.5rem', '3rem', '4rem', '5rem', '6rem', '7rem', '8rem'],
		h2: ['1.75rem', '2rem', '2.5rem', '3rem', '3.5rem', '4rem', '4.5rem'],
		h3: [
			'1.375rem',
			'1.5rem',
			'1.75rem',
			'2rem',
			'2.25rem',
			'2.5rem',
			'2.75rem',
		],
		h4: [
			'1.125rem',
			'1.25rem',
			'1.5rem',
			'1.75rem',
			'2rem',
			'2.25rem',
			'2.5rem',
		],
		h5: ['0.875rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.25rem'],
		h6: ['0.625rem', '0.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem'],
		body1: [
			'1.125rem',
			'1.25rem',
			'1.5rem',
			'1.75rem',
			'2rem',
			'2.25rem',
			'2.5rem',
		],
		body2: [
			'1rem',
			'1.125rem',
			'1.25rem',
			'1.5rem',
			'1.75rem',
			'2rem',
			'2.25rem',
		],
		paragraph: [
			'0.825rem',
			'0.9rem',
			'1rem',
			'1.125rem',
			'1.25rem',
			'1.375rem',
			'1.5rem',
		],
		small: [
			'0.625rem',
			'0.7rem',
			'0.8rem',
			'0.9rem',
			'1rem',
			'1.125rem',
			'1.25rem',
		],
	};

	let fontSizeForBreakpoints = '';
	breakpoints.forEach((breakpoint, index) => {
		fontSizeForBreakpoints += `
      @media (min-width: ${breakpoint}) {
        font-size: ${sizes[variant][index] || '1rem'};
      }
    `;
	});
	return fontSizeForBreakpoints;
};
