import arg from "arg"
import inquirer from "inquirer"
import chalk from "chalk"
import { createVelteProject } from "./main"

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
      {
        '--git': Boolean,
        '--yes': Boolean,
        '--install': Boolean,
        '--spa': Boolean,
        '--state-managment': Boolean,
        '--lint': Boolean,
        '--css': Boolean,
        '-g': '--git',
        '-y': '--yes',
        '-i': '--install',
        '-s': '--spa',
        '-m': '--state-managment',
        '-l': '--lint',
        '-c': '--css',
      },
      {
        argv: rawArgs.slice(2),
      }
    )
    return {
      skipPrompts: args['--yes'] || false,
      git: args['--git'] || false,
      template: args._[0],
      runInstall: args['--install'] || false,
      enableSPA:  args['--spa'] || false,
      enableStateManagment: args['--state-managment'] || false,
      enableLint: args['--lint'] || false,
      enableCss: args['--css'] || false,
    }
}

function decideTemplate(options){
    let template = options.template
    if(options.template == "webpack"){
        if(options.enableSPA == true){
            template = template.concat("_spa")
        }
        if(options.enableStateManagment == true){
            template = template.concat("_state")
        }
        if(options.enableCss == true){
            template = template.concat("_css")
        }
        if(options.enableLint == true){
            template = template.concat("_lint")
        }
    }else if(options.template == "rspack"){
        if(options.enableSPA == true){
            template = template.concat("_spa")
        }
        if(options.enableStateManagment == true){
            template = template.concat("_state")
        }
        if(options.enableCss == true){
            template = template.concat("_css")
        }
        if(options.enableLint == true){
            template = template.concat("_lint")
        }
    }else if(options.template == "vite"){
        if(options.enableSPA == true){
            template = template.concat("_spa")
        }
        if(options.enableStateManagment == true){
            template = template.concat("_state")
        }
        if(options.enableCss == true){
            template = template.concat("_css")
        }
        if(options.enableLint == true){
            template = template.concat("_lint")
        }
    }
    options.template = template
    return options
}

async function promptForMissingOptions(options) {
    const defaultTemplate = 'webpack';
    const defaultVersion = 'Velte v1';
    if (options.skipPrompts) {
      return {
        ...options,
        template: options.template || defaultTemplate,
        version: options.template || defaultVersion,
      }
    }
   
    const questions = [];

    if (!options.version) {
      questions.push({
        type: 'list',
        name: 'version',
        message: 'Choose a version of Velte.js you would like to use for your project',
        choices: ['Velte v1', 'Velte v2 (rc)'],
        default: defaultVersion,
      })
    }

    if (!options.template) {
      questions.push({
        type: 'list',
        name: 'template',
        message: 'Choose a build tool for compiling and bundling your project',
        choices: ['webpack', 'rspack', 'vite'],
        default: defaultTemplate,
      })
    }
   
    if (!options.git) {
      questions.push({
        type: 'confirm',
        name: 'git',
        message: 'Initialize a git repository?',
        default: false,
      })
    }

    if (!options.enableSPA) {
        questions.push({
          type: 'confirm',
          name: 'enableSPA',
          message: 'Add Router for Single Page App development?',
          default: false,
        })
    }

    if (!options.enableStateManagment) {
        questions.push({
          type: 'confirm',
          name: 'enableStateManagment',
          message: 'Configure global state managment? (Valtio for v1, VelX for v2)',
          default: false,
        })
    }

    if (!options.enableCss) {
        questions.push({
          type: 'confirm',
          name: 'enableCss',
          message: 'Add Tailwind CSS for design system?',
          default: false,
        })
    }

    if (!options.enableLint) {
        questions.push({
          type: 'confirm',
          name: 'enableLint',
          message: 'Add ESLint for code quality?',
          default: false,
        })
    }
   
    const answers = await inquirer.prompt(questions);
    return {
      ...options,
      template: options.template || answers.template,
      version: options.version || answers.version,
      git: options.git || answers.git,
      enableSPA: options.enableSPA || answers.enableSPA,
      enableStateManagment: options.enableStateManagment || answers.enableStateManagment,
      enableLint: options.enableLint || answers.enableLint,
      enableCss: options.enableCss || answers.enableCss,
    }
}

export async function cli(args){
  console.log(chalk.hex("#784CE5").bold("\nVelte.js - The Cordial Javascript UI Framework.\n"))
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  options = decideTemplate(options)
  createVelteProject(options)
}