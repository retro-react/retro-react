/**
 * Conditionally joining classNames together.
 *
 * @param names list names that need to be concat.
 * @returns a concat classNames string.
 */
export const classNames = (...names: (string | undefined)[]): string => {
	return names.filter((name) => !!name).join(' ');
};
