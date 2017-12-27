#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')

const weexPackCommon = require('weexpack-common');

program
  .version(require('../package').version)
  .usage('<command> [options]')
  // .command('init [name]', 'initialize a standard weex project')
  .command('create [name]', 'initialize a standard weex project')
  .command('platform [command]', 'command for add or remove a  platform project')
  .command('run [platform]', 'run weex app on the specific platform')
  .command('build [platform]', 'build weex app generator package(apk or ipa)')
  .command('plugin [command]', 'command for add,create,login,publish weex plugins')
  // .command('weexplugin [command]', 'create a project that is a manager of plugin')
  .option('-d, --verbose', 'set loglevel to verbose')

program.parse(process.argv)

if (program.args.length < 1) {
  program.help();
  process.exit();
}

if(program.args.length >= 1){
  let isSupport = false;
  const list = ["create", "platform","run", "build", "plugin", "weexplugin","market"]

  if (list.indexOf(program.args[0]) > -1) {
    isSupport = true;
  }
  if(!isSupport){
    console.log("  error: unknown command '"+ program.args[0]+ "'")
    process.exit();
  }
}


