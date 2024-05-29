export function getIntersectionByField<T, K extends keyof T>(
	arr1: T[],
	arr2: T[],
	field: K,
): T[] {
	return arr1.filter((obj1) =>
		arr2.some((obj2) => obj1[field] === obj2[field]),
	);
}
