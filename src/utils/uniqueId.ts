let counter = 0;

export const uniqueId = (prefix = ''): string => {
	counter += 1;
	return `${prefix}${counter}`;
};
