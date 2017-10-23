var path = require('path');
var exec = require('child_process').exec;
var gitCommits = require('git-commits');
var fs = require('fs');
// Location Vars
var serverLocation = process.env.SERVER_LOCALE;
var cdnLocation = path.resolve('../rex-cdn');
var serverLocation = process.env.SERVER_LOCALE;
var buildFolder = `${cdnLocation}/${serverLocation}/${process.env.npm_package_name}`;
var buildPath = `${buildFolder}/${process.env.npm_package_version}`;
var repoPath = path.resolve(process.env.REPO || path.resolve('.git'));
var changelogFile = `${process.cwd()}/CHANGELOG.md`;
var versionFile = `${buildFolder}/version.json`;
var timestamp = require('time-stamp');

makeChangelog(changelogFile);
const versionList = getVersionList();
const changelogWrite = []
versionList.history.map((single) => {
if(single.version !== 'latest'){
const fileTemplate = `
# CHANGELOG ${single.version} \r\n
---
### Build: ${single.changelog ? single.changelog.build : null    } \r\n
### Date: ${single.changelog  ? single.changelog.timestamp : null } \r\n
---
### Commits \r\n
${single.changelog ? single.changelog.changes.join('\r\n') : null}
`;
changelogWrite.push(fileTemplate);
}
})

fs.writeFileSync(changelogFile, '');
fs.writeFileSync(changelogFile, changelogWrite.join('\r\n'));

function getVersionList(){
  return JSON.parse(fs.readFileSync(versionFile, 'utf8'));
}

function getChangelog() {
  return fs.readFileSync(changelogFile, 'utf8');
}

function makeChangelog(location) {
  var cmd = `touch ${location}`
  // create simple base
  exec(cmd, function (err, stdout, stderr) {
    if (err === null) { } else {
      return console.error(err);
    }
  });
}
