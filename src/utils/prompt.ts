import prompts from 'prompts';
import { DishType } from '../enums/DishType';
import { enumToArray } from './enumToArray';
import { DishSize } from '../enums/DishSize';

export default async function prompt() {
	const question = [
		{
			type: 'select',
			name: 'dishName',
			message: 'What did you choose ?',
			choices: enumToArray(DishType),
			initial: 0,
		},
		{
			type: 'select',
			name: 'dishSize',
			message: 'What is size ?',
			choices: enumToArray(DishSize),
			initial: 0,
		},
		{
			type: 'number',
			name: 'dishNumber',
			message: 'What is number ?',
			initial: 1,
		},
	];
	const [response] = await Promise.all([
		prompts(question as any).then((result: any) => {
			return {
				dishName: result.dishName,
				dishSize: result.dishSize,
				disNumber: `x${result.dishNumber}`,
			};
		}),
	]);
}
