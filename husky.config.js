module.exports = {
	hooks: {
		'pre-commit': 'pretty-quick --staged',
		// 'pre-commit': 'yarn lint-staged && yarn lint',
	},
};
