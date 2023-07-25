import arg from "arg"
import inquirer from "inquirer"
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
    if (options.skipPrompts) {
      return {
        ...options,
        template: options.template || defaultTemplate,
      }
    }
   
    const questions = [];
    if (!options.template) {
      questions.push({
        type: 'list',
        name: 'template',
        message: 'Please choose which project template to use',
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
          message: 'Add Valtio for state managment?',
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
      git: options.git || answers.git,
      enableSPA: options.enableSPA || answers.enableSPA,
      enableStateManagment: options.enableStateManagment || answers.enableStateManagment,
      enableLint: options.enableLint || answers.enableLint,
      enableCss: options.enableCss || answers.enableCss,
    }
}

export async function cli(args){
    let options = parseArgumentsIntoOptions(args)
    options = await promptForMissingOptions(options)
    options = decideTemplate(options)
    createVelteProject(options)
}