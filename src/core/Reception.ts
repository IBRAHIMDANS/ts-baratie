import chalk from 'chalk';
import os from 'os';

export class Reception {
	public static instance: Reception | null = null;
	public argv = process.argv;

	public static getInstance() {
		return Reception.instance === null
			? (Reception.instance = new Reception())
			: Reception.instance;
	}

	public run(): void {
		const nbCPUs = os.cpus().length;
		console.log(`I have ${nbCPUs} CPUs availables`);
		const multiplierCook = this.argv[2];
		const numberCooks = this.argv[3];
		const timeCooks = this.argv[4];
		// const userPrompted = prompt().then(r => {
		// 	console.log(r);
		// });
		console.log(
			chalk.bold.magenta(`
        💫  Welcome to Baratie 🙃 
        Multiplier cooks ==> ${multiplierCook}
        Number of cooks per kitchen ==> ${numberCooks}
        Time of cooks ==> ${timeCooks} /ms
        `),
		);
	}
}

export default Object.freeze(new Reception());
