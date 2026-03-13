const chalk = require('chalk');
const mpath = require('mpath');

// SAST: eval with user-controlled input (e.g. from CLI or env)
const userExpr = process.env.USER_EXPR || process.argv[2];
if (userExpr) eval(userExpr);

console.log(chalk.blue('Hello from your npm package!'));
console.log('mpath (phantom):', mpath.version || 'loaded');
