#!/usr/bin/env node

const program = require('commander');
const mkdirpSync = require('fs-extra').mkdirpSync;
const existsSync = require('fs').existsSync;
const join = require('path').join;
const chalk = require('chalk');
const error = chalk.red;

program
  .usage('[options] appName')
  .option('--demo', 'The template you want to generate')
  .option('--dest', 'The destination dirname')
  .option('--no-install', 'Disable npm install after files created')
  .parse(process.argv)
  let dirName = program.args[1]
  console.log(dirName)
  const dest = join(process.cwd(), dirName);
  console.log(dest)
  if (existsSync(dest)) {
    console.error(error('Existing directory here, please run command for an empty folder!'));
    process.exit(1);
  }
  mkdirpSync(dest);
  process.chdir(dest);
  require('../lib/init')(program);