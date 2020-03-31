import chalk from 'chalk';
import prompt from '../utils/prompt';
import Kitchen from '../Kitchen/Kitchen';
import KitchenFactory from '../Kitchen/KitchenFactory';

export class Reception {
	public static instance: Reception | null = null;

	public static getInstance() {
		return Reception.instance === null
			? (Reception.instance = new Reception())
			: Reception.instance;
	}

	public async run(): Promise<void> {
		// const nbCPUs = os.cpus().length;
		// console.log(`I have 2 CPUs availables`);
		const [, , multiplierCook, numberCooks, timeCooks] = process.argv;
		console.log(
			chalk.bold.magenta(`
        💫  Welcome to Baratie 🙃 
        Multiplier cooks ==> ${multiplierCook}
        Number of cooks per kitchen ==> ${numberCooks}
        Time of cooks ==> ${timeCooks} /ms
        `),
		);
		const dish = await prompt()
			.then(r => r)
			.catch(error => console.log(error));

		const kitchenFactory = new KitchenFactory();
		const kitchen = new Kitchen(dish);
		KitchenFactory.instance?.create();
		//console.log(userPrompted)
	}
}

export default Object.freeze(new Reception());
