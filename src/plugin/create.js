const path = require('path');
const chalk = require('chalk');
const yeoman = require('yeoman-environment');
const TerminalAdapter = require('yeoman-environment/lib/adapter.js');

/**
 * Create Silent TerminalAdapter
 * suppress 'create' output generated by yeoman
 */
class SilentTerminalAdapter extends TerminalAdapter {
  constructor () {
    super();
    this.log.create = function () {};
  }
}

/**
 * Initialize a standard weex project
 * @param {String} project name
 * @param {String} config file path
 */
function init (projectName, configFile) {
  const env = yeoman.createEnv();

  env.register(require.resolve('generator-weex-plugin'), 'weex:plugin');

  // TODO: get generator configs from configFile
  const args = [projectName];

  const generator = env.create('weex:plugin', {
    args
    // options: {
    //   weexpack:true,
    // }
  });

  // generator.destinationRoot(projectName)
  generator.run();
}

module.exports = init;