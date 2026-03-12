const chalk = require('chalk');
const mpath = require('mpath');

console.log(chalk.blue('Hello from your npm package!'));
console.log('mpath (phantom):', mpath.version || 'loaded');
