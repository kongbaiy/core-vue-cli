#!/usr/bin/env node

const program = require("commander");
const pkg = require("../package");
const chalk = require("chalk");
const download = require("download-git-repo");
const ora = require("ora");
const spinner = ora("Loading undead unicorns");

/**
 * version
 */
program.version(chalk.green(`${pkg.version}`));

/**
 * init 项目
 */
program
  .command("init <app-name>")
  .description(
    "generate a project from a remote template (legacy API, requires ./wk-init)"
  )
  .option("-c, --clone", "Use git clone when fetching remote template")
  .action((appName, opts, cmd) => {
    spinner.start("开始下载");
    download(
      "direct:https://github.com/vue-admin/vue-admin.git#main",
      appName,
      { clone: true },
      (err) => {
        if (err) {
          spinner.fail(chalk.green("下载失败 \n" + err));
          process.exit();
        }
        spinner.succeed(chalk.green(`下载成功`));
      }
    );
  });

program.parse(process.argv);