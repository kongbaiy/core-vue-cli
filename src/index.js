const path = require('path')
const commander = require('commander')
const package = require('../package.json')
const figlet = require('figlet')
const cliName = figlet.textSync('core-vue-cli')
const download = require('download-git-repo')
const ora = require('ora')
const spinner = ora('loading').start();

/**
 * version 
 */ 
commander.program.version(
    `\n    ${package.version} \n ${cliName}`
).parse(process.argv)

/**
 * init 项目 
 */ 
commander.program
.command('init <projectName>') // [] 可填  <>必填
.description('monorepo core vue template')
.action(async (dir) => {
    const fullDir = path.resolve(process.cwd(), dir)

    spinner.start()
    download('direct:https://github.com/kongbaiy/core-vue-template#develop', fullDir, { clone: true  }, (error) => {
        if (error) console.error('template download error!')
        spinner.stop()
    })

})
commander.program.parse(process.argv)
