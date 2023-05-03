import styled from '@emotion/styled';
import { TextVariant } from './Text';

export const Text = styled.div<{
	$color: string;
	$bevel: boolean;
	$variant: TextVariant;
}>`
	font-family: 'Trebuchet MS', Helvetica, sans-serif;
	font-size: 1rem;
	font-weight: 400;
	color: ${(props) => props.$color};

	${(props) =>
		props.$bevel
			? `
			text-shadow: 0 -4px 3px rgba(255, 255, 255, 0.3), 0 3px 4px rgba(0, 0, 0, 0.2);
				`
			: ''}

	${(props) => {
		switch (props.$variant) {
			case 'h1':
				return `
					font-size: 2rem;
					font-weight: 700;
		
					@media (max-width: 480px) {
						font-size: 2.5rem;
					}
		
					@media (min-width: 481px) and (max-width: 767px) {
						font-size: 3rem;
					}
		
					@media (min-width: 768px) {
						font-size: 4rem;
					}
		
					@media (min-width: 1024px) {
						font-size: 5rem;
					}
		
					@media (min-width: 1280px) {
						font-size: 6rem;
					}
		
					@media (min-width: 1536px) {
						font-size: 7rem;
					}
		
					@media (min-width: 1792px) {
						font-size: 8rem;
					}
		
					@media (min-width: 2048px) {
						font-size: 9rem;
					}
					`;
			case 'h2':
				return `
					font-size: 1.5rem;
					font-weight: 700;
		
					@media (max-width: 480px) {
						font-size: 1.75rem;
					}
		
					@media (min-width: 481px) and (max-width: 767px) {
						font-size: 2rem;
					}
		
					@media (min-width: 768px) {
						font-size: 2.5rem;
					}
		
					@media (min-width: 1024px) {
						font-size: 3rem;
					}
		
					@media (min-width: 1280px) {
						font-size: 3.5rem;
					}
		
					@media (min-width: 1536px) {
						font-size: 4rem;
					}
		
					@media (min-width: 1792px) {
						font-size: 4.5rem;
					}
		
					@media (min-width: 2048px) {
						font-size: 5rem;
					}
					`;
			case 'h3':
				return `
					font-size: 1.25rem;
					font-weight: 700;
		
					@media (max-width: 480px) {
						font-size: 1.375rem;
					}
		
					@media (min-width: 481px) and (max-width: 767px) {
						font-size: 1.5rem;
					}
		
					@media (min-width: 768px) {
						font-size: 1.75rem;
					}
		
					@media (min-width: 1024px) {
						font-size: 2rem;
					}
		
					@media (min-width: 1280px) {
						font-size: 2.25rem;
					}
		
					@media (min-width: 1536px) {
						font-size: 2.5rem;
					}
		
					@media (min-width: 1792px) {
						font-size: 2.75rem;
					}
		
					@media (min-width: 2048px) {
						font-size: 3rem;
					}
					`;
			case 'h4':
				return `
					font-size: 1rem;
					font-weight: 700;
		
					@media (max-width: 480px) {
						font-size: 1.125rem;
					}
		
					@media (min-width: 481px) and (max-width: 767px) {
						font-size: 1.25rem;
					}
		
					@media (min-width: 768px) {
						font-size: 1.5rem;
					}
		
					@media (min-width: 1024px) {
						font-size: 1.75rem;
					}
		
					@media (min-width: 1280px) {
						font-size: 2rem;
					}
		
					@media (min-width: 1536px) {
						font-size: 2.25rem;
					}
		
					@media (min-width: 1792px) {
						font-size: 2.5rem;
					}
		
					@media (min-width: 2048px) {
						font-size: 2.75rem;
					}
					`;
			case 'h5':
				return `
					font-size: 0.75rem;
					font-weight: 700;
		
					@media (max-width: 480px) {
						font-size: 0.875rem;
					}
		
					@media (min-width: 481px) and (max-width: 767px) {
						font-size: 1rem;
					}
		
					@media (min-width: 768px) {
						font-size: 1.25rem;
					}
		
					@media (min-width: 1024px) {
						font-size: 1.5rem;
					}
		
					@media (min-width: 1280px) {
						font-size: 1.75rem;
					}
		
					@media (min-width: 1536px) {
						font-size: 2rem;
					}
		
					@media (min-width: 1792px) {
						font-size: 2.25rem;
					}
		
					@media (min-width: 2048px) {
						font-size: 2.5rem;
					}
					`;
			case 'h6':
				return `
					font-size: 0.5rem;
					font-weight: 700;
		
					@media (max-width: 480px) {
						font-size: 0.625rem;
					}
		
					@media (min-width: 481px) and (max-width: 767px) {
						font-size: 0.75rem;
					}
		
					@media (min-width: 768px) {
						font-size: 1rem;
					}
		
					@media (min-width: 1024px) {
						font-size: 1.25rem;
					}
		
					@media (min-width: 1280px) {
						font-size: 1.5rem;
					}
		
					@media (min-width: 1536px) {
						font-size: 1.75rem;
					}
		
					@media (min-width: 1792px) {
						font-size: 2rem;
					}
		
					@media (min-width: 2048px) {
						font-size: 2.25rem;
					}
					`;
			case 'body1':
				return `
					font-size: 1rem;
					font-weight: 400;

					@media (min-width: 768px) {
						font-size: 1.25rem;
					}

					@media (min-width: 1024px) {
						font-size: 1.5rem;
					}

					@media (min-width: 1280px) {
						font-size: 1.75rem;
					}

					@media (min-width: 1536px) {
						font-size: 2rem;
					}

					@media (min-width: 1792px) {
						font-size: 2.25rem;
					}

					@media (min-width: 2048px) {
						font-size: 2.5rem;
					}`;
			case 'body2':
				return `
					font-size: 0.75rem;
					font-weight: 400;

					@media (min-width: 768px) {
						font-size: 1rem;
					}

					@media (min-width: 1024px) {
						font-size: 1.25rem;
					}

					@media (min-width: 1280px) {
						font-size: 1.5rem;
					}

					@media (min-width: 1536px) {
						font-size: 1.75rem;
					}

					@media (min-width: 1792px) {
						font-size: 2rem;
					}

					@media (min-width: 2048px) {
						font-size: 2.25rem;
					}`;
			case 'paragraph':
				return `
					font-size: 0.5rem;
					font-weight: 400;

				  @media (max-width: 480px) { 
						font-size: 0.875rem;
					}
			
					@media (min-width: 481px) and (max-width: 767px) { 
						font-size: 1rem;
					}
			
					@media (min-width: 768px) {
						font-size: 1.125rem; 
					}
			
					@media (min-width: 1024px) {
						font-size: 1.25rem; 
					}
			
					@media (min-width: 1280px) {
						font-size: 1.375rem; 
					}
					`;
			default:
				return `
					font-size: 1rem;
					font-weight: 400;
					`;
		}
	}}
`;
