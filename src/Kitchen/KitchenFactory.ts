import chalk from 'chalk';

export default class KitchenFactory {
	public static instance: KitchenFactory | null = null;

	constructor() {}

	getInstance() {
		return KitchenFactory.instance === null
			? (KitchenFactory.instance = new KitchenFactory())
			: KitchenFactory.instance;
	}

	create() {
		console.log(chalk.blue(' create a kitchen '));
	}
}
