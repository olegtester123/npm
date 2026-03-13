// SAST: command injection via exec / execSync
const { exec, execSync } = require('child_process');

function listDir(userPath) {
  return execSync('ls -la ' + userPath).toString();
}

function runCommand(userCmd) {
  exec(userCmd, (err, stdout) => console.log(stdout));
}

module.exports = { listDir, runCommand };
