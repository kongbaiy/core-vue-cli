const path = require('path')

const commander = require('commander')
const package = require('../package.json')
const figlet = require('figlet')
const cliName = figlet.textSync('core-vue-cli')
const inquirer = require('inquirer')
const childProcess = require('child_process')
const download = require('download-git-repo')

/**
 * version 
 */ 
commander.program.version(
    `\n    ${package.version} \n ${cliName}`
).parse(process.argv)

/**
 * init 项目 
 */ 
commander.program.arguments('<dir>')  // [] 可填  <>必填
.description('请输入项目名称！')
.action(async (dir) => {
    // return inquirer.default.prompt([
    //     {
    //         type:'list',
    //         name:'framework',
    //         message:'which framework do you like?',
    //         choices:['vue']
    //     }
    // ]).then(() => {
    //     // fs.writeFileSync()  区分不同选择，创建不同文件，写入不同内容，
    //     // 实际 可以将这部分文件单独放在git上，即使安装最新cli也可以下载

    //     const fullDir = path.resolve(process.cwd(), dir)
    //     const gitPath = 'https://github.com/kongbaiy/core-vue-template.git'
    //     const command = `git clone -b develop ${gitPath} ${fullDir}`
    //     childProcess.execSync(command)
    // })

    // const fullDir = path.resolve(process.cwd(), dir)
    // const gitPath = 'https://github.com/kongbaiy/core-vue-template'
    // const command = `git clone -b develop ${gitPath} ${fullDir}`
    // childProcess.execSync(command)
    
    const fullDir = path.resolve(process.cwd(), dir)

    download(
        'direct:https://github.com/kongbaiy/core-vue-template#develop', 
        fullDir,
        { clone: true  },
        (error) => {
        }
    )

}).parse(process.argv)
