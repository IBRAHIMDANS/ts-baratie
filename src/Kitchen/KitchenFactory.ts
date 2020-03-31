import Kitchen from './Kitchen';
import Cooker from '../Cooker/Cooker';
import { DishIngredients } from '../interfaces/DishIngredients';

export default class KitchenFactory {
	public static instance: KitchenFactory | null = null;

	constructor() {}

	getInstance() {
		return KitchenFactory.instance === null
			? (KitchenFactory.instance = new KitchenFactory())
			: KitchenFactory.instance;
	}

	public create() {
		const stock: DishIngredients = {
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

		// const kitchen: Kitchen = new Kitchen(stock);
		// for (let i = 0; i < 5; i++) {
		//     kitchen.addCooker(new Cooker());
		// }
		//
		// return kitchen;
	}
}
