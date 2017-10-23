var path = require('path');
var inquirer = require('inquirer');
var version = process.env.npm_package_version;
var packageName = process.env.npm_package_name;
var cdnLocation = path.resolve('../surge-dist');
var fs = require('fs');
var exec = require('child_process').exec;
const Ora = require('ora');



var questions = [
  {
    type: 'list',
    name: 'build',
    message: 'What environment do you want to build?',
    choices: [
      'example-soshi',
    ]
  }
];
inquirer.prompt(questions).then(function (answers) {
  if (fs.existsSync(cdnLocation)) {
  const buildCMD = `SERVER_LOCALE=${answers['build']} webpack --config ./.builder/webpack.config.prod.js;`
    //Creates a build in the selected folder
    const spinner = new Ora({
        text: `[BUILD] creating release: ${version} of ${packageName}`,
        spinner: {
          interval: 200, // optional
          frames: ['🐲', '🔥🐲', '🔥🔥🐲', '🔥🔥🔥🐲', '🔥🔥🔥🔥🐲', '🔥🔥🔥🐲', '🔥🔥🐲', '🔥🐲']
        }
      });
    console.log(``)
    spinner.start();
    exec(buildCMD, function (err, stdout, stderr) {
      if (err === null) {
        console.log(stdout);
        spinner.succeed();
        createLatest(answers);
      } else {
        console.error('Error: please the error above ^^^');
        console.log(stdout)
        process.exit(1);
      }
    });
  } else {
    console.log(`🔥 🔥 🔥 Error: the rex cdn was not found at ${cdnLocation} 🔥 🔥 🔥`);
  }

});


function createLatest(answers){
    const spinner = new Ora({
    text: `[BUILD] creating release: Latest of ${packageName}`,
    spinner: {
      interval: 200, // optional
      frames: ['🐉', '⚡🐉', '⚡⚡🐉', '⚡⚡⚡🐉', '⚡⚡⚡⚡🐉', '⚡⚡⚡🐉', '⚡⚡🐉', '⚡🐉']
    }
  });
  const latestCMD = `SERVER_LOCALE=${answers['build']} LATEST=true webpack --config ./.builder/webpack.config.prod.js;`
    //Creates a build in the selected folder
    console.log(``)
    spinner.start();
    exec(latestCMD, function (err, stdout, stderr) {
      if (err === null) {
        console.log(stdout);
        spinner.succeed();
        versionlistCMD(answers);
      } else {
        console.error('Error: please the error above ^^^');
        console.log(stdout)
        process.exit(1);
      }
    });

}

function changelogCMD(answers) {
  // Create a Changelog List for this project version
  const changelogCMD = `
  SERVER_LOCALE=${answers['build']} node ./.builder/changelog.js
  `
  console.log(`📋 [CHANGELOG] creating changelog from commits : ${packageName}/${answers['build']}/changelog.md`)
  exec(changelogCMD, function (err, stdout, stderr) {
    if (err === null) {
      console.log(stdout);
    } else {
      return console.error(err);
    }
  });
}

function versionlistCMD(answers) {
  // Create a Version List for this folder
  const versionlistCMD = `
  SERVER_LOCALE=${answers['build']} node ./.builder/versionMarker.js
  `
  console.log(`📝 [VERSIONING] creating versionlist from folder in ${answers['build']}${packageName}/version.json`)
  exec(versionlistCMD, function (err, stdout, stderr) {
    if (err === null) {
      changelogCMD(answers);
    } else {
      return console.error(err);
    }
  });
}
