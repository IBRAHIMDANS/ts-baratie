import chalk from 'chalk';
import os from 'os';
import cluster from 'cluster';

export class Server {
	public run(): void {
		const params = process.argv.slice(2);
		const nbCPUs = os.cpus().length;
		console.log(`I have ${nbCPUs} CPUs availables`);
		console.log(chalk.bold.magenta(`💫  hello world ${params}`));
	}
}

export default Object.freeze(new Server());
