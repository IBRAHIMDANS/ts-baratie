import chalk from 'chalk';
import os from 'os';
import prompt from './prompt';

export class Server {
	public run(): void {
		const params = process.argv
			.slice(2)
			.toString()
			.split(',');
		const nbCPUs = os.cpus().length;
		console.log(`I have ${nbCPUs} CPUs availables`);
		prompt().then(r => r);
		console.log(chalk.bold.magenta(`💫  hello world ${params}`));
	}
}

export default Object.freeze(new Server());
