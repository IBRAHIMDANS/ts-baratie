import chalk from 'chalk';

const argv = process.argv;

if (argv.length === 2) {
	console.log(process.argv.length);
	console.log(chalk.red.bold(`Sorry  params are missing on your  command `));
	process.exit(42);
}
