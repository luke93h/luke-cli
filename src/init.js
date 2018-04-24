import { join, basename } from 'path';
import vfs from 'vinyl-fs';
import { renameSync, readdirSync } from 'fs';
import through from 'through2';
import { sync as emptyDir } from 'empty-dir';
import leftPad from 'left-pad';
import chalk from 'chalk';
const existsSync = require('fs').existsSync;

function info(type, message) {
  console.log(`${chalk.green.bold(leftPad(type, 12))}  ${message}`);
}

function error(message) {
  console.error(chalk.red(message));
}

function success(message) {
  console.error(chalk.green(message));
}

function init({ demo, install, dest: dirname }) {
  const type = demo || 'test'
  const cwd = join(__dirname, '../templates', type);
  const dest = join(process.cwd());
  const projectName = basename(dest);
  const files = readdirSync(join(__dirname, '../templates'))
  if (!emptyDir(dest)) {
    error('Existing files here, please run init command in an empty folder!');
    process.exit(1);
  }
  if (!existsSync(cwd)) {
    console.error(error(`Don exit this template, please choose one of: ${files.join(', ')}`));
    process.exit(1);
  }
  console.log(`Creating a new ${type} app in ${dest}.`);
  console.log();

  vfs.src(['**/*', '!node_modules/**/*'], {cwd: cwd, cwdbase: true, dot: true})
    .pipe(template(dest, cwd))
    .pipe(vfs.dest(dest))
    .on('end', function() {
      if (install) {
        info('run', 'npm install');
        require('./install')(printSuccess);
      } else {
        printSuccess();
      }
    })
    .resume();

  function printSuccess() {
    success(`
Success! Created ${projectName} at ${dest}.

Inside that directory, you can run several commands:
  * npm start: Starts the development server.

We suggest that you begin by typing:
  cd ${dest}
  npm start

Happy hacking!`);
  }
}

function template(dest, cwd) {
  return through.obj(function (file, enc, cb) {
    if (!file.stat.isFile()) {
      return cb();
    }

    info('create', file.path.replace(cwd + '/', ''));
    this.push(file);
    cb();
  });
}

export default init;
