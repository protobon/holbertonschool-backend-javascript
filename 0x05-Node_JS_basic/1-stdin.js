const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (line) => {
  process.stdout.write('Your name is: ' + line + '\n');
});

rl.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  rl.close();
});
