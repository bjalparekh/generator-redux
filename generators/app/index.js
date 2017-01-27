'use strict';
//Require dependencies
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.extend({
//Configurations will be loaded here.
//Writing Logic here
writing: {
  //Copy the configuration files
  config: function () {
          this.fs.copyTpl(
              this.templatePath('_package.json'),
              this.destinationPath('package.json')
          );
          this.fs.copyTpl(
              this.templatePath('_webpack.config.js'),
              this.destinationPath('webpack.config.js')
          );
          this.fs.copy(
            this.templatePath('babelrc'),
            this.destinationPath('.babelrc')
          );
          this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
          );
          this.fs.copy(
            this.templatePath('eslintrc'),
            this.destinationPath('.eslintrc')
          );
          this.fs.copy(
            this.templatePath('_index.js'),
            this.destinationPath('index.js')
          );
      },

  //Copy application files
  app: function() {
    /////src
    this.fs.copy(
        this.templatePath('_javascripts/_src/_App.jsx'),
        this.destinationPath('javascripts/src/App.jsx'));
    //Actions
    this.fs.copy(
        this.templatePath('_javascripts/_src/_actions/_index.js'),
        this.destinationPath('javascripts/src/actions/index.js'));

    this.fs.copy(
        this.templatePath('_javascripts/_src/_constants/_actionTypes.js'),
        this.destinationPath('javascripts/src/constants/actionTypes.js'));

    this.fs.copy(
        this.templatePath('_javascripts/_src/_data/_index.js'),
        this.destinationPath('javascripts/src/data/index.js'));

    this.fs.copy(
        this.templatePath('_javascripts/_src/_modules/_Wrapper.jsx'),
        this.destinationPath('javascripts/src/modules/Wrapper.jsx'));
    
    this.fs.copy(
        this.templatePath('_javascripts/_src/_reducers/_app.js'),
        this.destinationPath('javascripts/src/reducers/app.js'));

    this.fs.copy(
        this.templatePath('_javascripts/_src/_reducers/_helper.js'),
        this.destinationPath('javascripts/src/reducers/helper.js'));

    this.fs.copy(
        this.templatePath('_javascripts/_src/_reducers/_index.js'),
        this.destinationPath('javascripts/src/reducers/index.js'));

    this.fs.copy(
        this.templatePath('_dist/_index.html'),
        this.destinationPath('dist/index.html'));
  },

  //Install Dependencies
  install: function() {
    // this.installDependencies();
  }
},

});
