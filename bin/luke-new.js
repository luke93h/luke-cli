#!/usr/bin/env node

const program = require('commander');
const mkdirpSync = require('fs-extra').mkdirpSync;
const existsSync = require('fs').existsSync;
const join = require('path').join;
const chalk = require('chalk');
const error = chalk.red;

program
  .parse(process.argv)
  let dirName = program.args[1]
  const dest = join(process.cwd(), dirName);
  if (existsSync(dest)) {
    console.error(error('Existing directory here, please run command for an empty folder!'));
    process.exit(1);
  }
  mkdirpSync(dest);
  process.chdir(dest);
  require('../lib/init')({
    demo: program.args[0],
    dest: program.args[1],
    install: program.args[2] === 'true'
  });