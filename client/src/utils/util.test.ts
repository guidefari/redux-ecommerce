import { getIntersectionByField } from "@shared/util";

describe("filterArrayByFieldEquality function", () => {
	const arr1 = [
		{ id: 1, name: "Alice" },
		{ id: 2, name: "Bob" },
		{ id: 3, name: "Charlie" },
	];

	const arr2 = [
		{ id: 2, name: "Bob" },
		{ id: 4, name: "David" },
	];

	test("Filters array based on equality of 'id' field - 1", () => {
		expect(getIntersectionByField(arr1, arr2, "id")).toEqual([
			{ id: 2, name: "Bob" },
		]);
	});

	test("Empty input arrays should return an empty array", () => {
		expect(getIntersectionByField([], [], "id")).toEqual([]);
	});

	test("No matching values should return an empty array", () => {
		const arr2pointOh = [{ id: 4, name: "David" }];

		expect(getIntersectionByField(arr1, arr2pointOh, "name")).toEqual([]);
	});

	test("All elements in arr1 match with arr2 should return arr1", () => {
		expect(
			getIntersectionByField(arr1, [{ id: 1 }, { id: 2 }, { id: 3 }], "id"),
		).toEqual(arr1);
	});

	test("Field not present in the objects should return empty array", () => {
		expect(getIntersectionByField(arr1, arr2, "age")).toEqual([]);
	});

	test("Matching values in a different order should return filtered array", () => {
		expect(
			getIntersectionByField(arr1, [{ id: 3 }, { id: 2 }, { id: 1 }], "id"),
		).toEqual(arr1);
	});

	test("Empty arr2 should return an empty array", () => {
		expect(getIntersectionByField(arr1, [], "id")).toEqual([]);
	});

	test("Duplicate values in arr2 should filter correctly", () => {
		expect(
			getIntersectionByField(arr1, [{ id: 1 }, { id: 1 }, { id: 2 }], "id"),
		).toEqual([
			{ id: 1, name: "Alice" },
			{ id: 2, name: "Bob" },
		]);
	});

	test("Non-numeric field values should filter correctly", () => {
		expect(
			getIntersectionByField(arr1, [{ id: "2" }, { id: "3" }], "id"),
		).toEqual([]);
	});

	test("Multiple field values match should return all matched elements", () => {
		expect(
			getIntersectionByField(
				arr1,
				[
					{ id: 1, name: "Alice" },
					{ id: 2, name: "Bob" },
				],
				"id",
			),
		).toEqual([
			{ id: 1, name: "Alice" },
			{ id: 2, name: "Bob" },
		]);
	});
});
