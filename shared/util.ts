export function getIntersectionByField<T, K extends keyof T>(
	arr1: T[],
	arr2: T[],
	field: K,
): T[] {
	if (arr1.length === 0 || arr2.length === 0) return [];

	const valuesToMatch = arr2.map((obj) => obj[field]).filter((v) => !!v);

	if (valuesToMatch.length === 0) return [];

	return arr1.filter((obj1) => valuesToMatch.includes(obj1[field]));
}
