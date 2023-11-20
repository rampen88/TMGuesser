export function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * max) + min;
}

export function getRandomElement(arr: any[]) {
	return arr[Math.floor(Math.random() * arr.length)];
}
