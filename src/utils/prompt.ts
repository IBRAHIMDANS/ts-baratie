import prompts from 'prompts';
import { DishType } from '../enums/DishType';
import { enumToArray } from './enumToArray';
import { DishSize } from '../enums/DishSize';
import readline from 'readline';

export default async function prompt() {
	if (process.argv.length >= 5) {
		const rgx = /([a-zA-Z]+) ([a-zA-Z]+) x([0-9]+)/gi;
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rl.question('Waiting for orders: ', answer => {
			const arrayAnswer = answer.split(';');
			arrayAnswer.map(item => {
				console.log(item.match(rgx));
			});
			console.log(`Ingredients: ${answer}`);

			// rl.close();
		});
	} else {
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
		return await prompts(question as any[]).then((result: any) => {
			return {
				dishName: result.dishName,
				dishSize: result.dishSize,
				disNumber: `x${result.dishNumber}`,
			};
		});
	}
}
