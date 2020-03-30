import chalk from 'chalk';

export class Server {
	public run(): void {
		console.log(chalk.bold.magenta(`💫  hello world ${process.platform}`));
	}
}

export default Object.freeze(new Server());
