export function enumToArray(Enum: any) {
	return Object.keys(Enum)
		.map(key => ({
			id: Enum[key],
			title: key,
		}))
		.filter(value => typeof value.id === 'number');
}
