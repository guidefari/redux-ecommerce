export function readFromLocalStorage(tableName: string, id: string) {
	try {
		const item = localStorage.getItem(`${tableName}-${id}`);
		return item ? JSON.parse(item) : null;
	} catch (error) {
		console.error(`Error reading from local storage: ${error}`);
		return null;
	}
}

type WriteToStorageInput = {
	tableName: "products";
	id: string;
	data: unknown;
};

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
