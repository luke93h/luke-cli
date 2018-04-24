#!/usr/bin/env node

/**
 * Module dependencies.
 */
const chalk = require('chalk');
const program = require('commander');
const spawn = require('win-spawn');
const join = require('path').join;
const resolve = require('path').resolve;
const exists = require('fs').existsSync;
const readFileSync = require('fs').readFileSync;

// Notify update when process exits
const updater = require('update-notifier');
const pkg = require('../package.json');
updater({ pkg: pkg }).notify({ defer: true });
// 版本提示
if (process.argv.slice(2).join('') === '-v') {
  const pkg = require('../package');
  console.log('luke-cli version ' + pkg.version);
  try {
    const cwd = process.cwd();
    const lukePkg = resolve('node_modules/luke/package.json');
    const lukeVersion = JSON.parse(readFileSync(lukePkg, 'utf-8')).version;
    console.log('    luke version ' + lukeVersion);
  } catch (e) {
  }
  if (!(pkg._from && pkg._resolved)) {
    console.log(chalk.cyan('@local'));
  }
  return;
}

program
  .usage('[options]')
  .on('--help', printHelp)
  .option('--demo <demo>', 'The template you want to generate')
  .option('--dest <dest>', 'The destination dirname')
  .parse(process.argv);
const args = program.args
if(!program.demo){
  console.error(error('Please enter the template you want to generate'));
  return
}
let src = program.demo
let dest = program.dest || src
console.log(src, dest)
const bin = executable();
if (bin) {
  wrap(spawn(bin, [ dest, src ], {stdio: 'inherit', customFds: [0, 1, 2]}));
} else {
  program.help();
}

function wrap(sp) {
  sp.on('close', function(code) {
    process.exit(code);
  });
}

function printHelp() {
  console.log('  Commands:');
  console.log();
  console.log('  All commands can be run with -h (or --help) for more information.')
}

function executable() {
  var file = join(__dirname, 'luke-new.js');
  if (exists(file)) {
    return file;
  }
}