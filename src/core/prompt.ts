import prompts from 'prompts';
import { DishType } from '../interfaces/DishType';
import { enumToArray } from '../utils/enumToArray';

export default async function prompt() {
	console.log(enumToArray(DishType));
	const response = await prompts([
		{
			type: 'multiselect',
			name: 'dishName',
			message: 'What did you choose ?',
			//     choices: ,
		},
		{
			type: 'number',
			name: 'dishSize',
			message: 'What is size ?',
			validate: dishName =>
				typeof dishName !== 'string' ? `Please give me a dishName ` : true,
		},
		{
			type: 'text',
			name: 'dishName',
			message: 'What did you choose ?',
			validate: dishName =>
				typeof dishName !== 'string' ? `Please give me a dishName ` : true,
		},
	]);

	//console.log(response); // => { value: 24 }
}
