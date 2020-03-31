import chalk from 'chalk';
import os from 'os';
import prompt from '../utils/prompt';

export class Reception {
	public static instance: Reception | null = null;

	public static getInstance() {
		return Reception.instance === null
			? (Reception.instance = new Reception())
			: Reception.instance;
	}

	public run(): void {
		const params = process.argv.slice(2);
		const nbCPUs = os.cpus().length;
		console.log(`I have ${nbCPUs} CPUs availables`);
		const userPrompted = prompt().then(r => {
			console.log(r);
		});
		console.log(chalk.bold.magenta(`💫  Welcome to Baratie 🙃 ${params}`));
	}
}

export default Object.freeze(new Reception());
