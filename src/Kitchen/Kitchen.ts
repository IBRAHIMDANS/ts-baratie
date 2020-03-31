import { DishIngredients } from '../interfaces/DishIngredients';
import Cooker from '../Cooker/Cooker';

export default class Kitchen {
	dish: Promise<DishIngredients[]>;
	private readonly ingredients: DishIngredients;

	constructor(
		dish: {
			disNumber: string;
			dishSize: string | any;
			dishName: string | any;
		} | void,
	) {
		this.dish = dish;
		this.ingredients = {
			octopus: 5,
			sojaSauce: 5,
			rice: 5,
			pork: 5,
			eggs: 5,
			noodle: 5,
			chicken: 5,
			dough: 5,
			matcha: 5,
			chocolate: 5,
		};
	}
	public addCooker(cooker: Cooker) {
		console.log('add new cooker');
	}
}
