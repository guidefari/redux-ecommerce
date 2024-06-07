type WriteToStorageInput = {
	tableName: "products" | "addresses" | "cards";
	id: string;
	data: unknown;
};

type ReadFromStorage = Omit<WriteToStorageInput, "data">;

export function readFromLocalStorage({ id, tableName }: ReadFromStorage) {
	try {
		const item = localStorage.getItem(`${tableName}-${id}`);
		return item ? JSON.parse(item) : null;
	} catch (error) {
		console.error(`Error reading from local storage: ${error}`);
		return null;
	}
}

export function writeToLocalStorage({
	tableName,
	id,
	data,
}: WriteToStorageInput) {
	try {
		const item = JSON.stringify(data);
		localStorage.setItem(`${tableName}-${id}`, item);
		return true;
	} catch (error) {
		console.error(`Error writing to local storage: ${error}`);
		return false;
	}
}
