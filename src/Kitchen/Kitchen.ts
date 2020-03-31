import DishIngredients from '../interfaces/DishIngredients';

export default class Kitchen {
	private readonly numberOfCookers: number;
	private readonly ingredients: DishIngredients;

	constructor(numberOfCookers: number) {
		this.numberOfCookers = numberOfCookers;
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
}
