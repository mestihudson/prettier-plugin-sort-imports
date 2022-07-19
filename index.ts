import * as shell from 'shelljs';

async function run() {
  const { stdout, stderr, code } = shell.exec("npm view @nestjs/platform-express dependencies --json", { silent: true });
  console.log(typeof stdout, stdout, stderr, code);
}

run();
