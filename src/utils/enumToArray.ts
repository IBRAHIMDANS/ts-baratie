export function enumToArray(Enum: { [x: string]: any }) {
	return Object.keys(Enum).map(key => ({
		id: Enum[key],
		title: key,
		name: key,
	}));
}
