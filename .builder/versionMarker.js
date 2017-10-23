var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');
var timestamp = require('time-stamp');
var gitCommits = require('git-commits');
// Location Vars
var cdnLocation = path.resolve('../rex-cdn');
var serverLocation = process.env.SERVER_LOCALE;
var buildFolder = `${cdnLocation}/${serverLocation}/${process.env.npm_package_name}`;
var buildPath = `${buildFolder}/${process.env.npm_package_version}`;
var repoPath = path.resolve(process.env.REPO || path.resolve('.git'));
var versionFile = `${buildFolder}/version.json`;
let versionList = historyTemplate(); //empty until callback
// request file and create it if not made

//===========================
// Get Changes to from git
//===========================
const branchs = [];
// Get Commits
gitCommits(repoPath, {
  searchTerm: 'to develop'
}).on('data', function (commit) {
  // Per Commit fix the title
  const title = prepareTitle(commit.title);
  branchs.push(title);
}).on('end', function () {
  // Check or Create version.json
  versionMarker(versionFile, getVersionList);
});

//===========================
// callback from versionMarker function
//===========================
function getVersionList() {
  const file = fs.readFileSync(versionFile, 'utf8');
  if (file.length > 1) {
    return JSON.parse(file);
  } else {
    fs.writeFileSync(versionFile, JSON.stringify(versionList));
    return versionList;
  }
}
//===========================
// Append changelog to json
//===========================
function appendVersion(versionList, changes) {
  if (versionList.history.length > 0) {
    const singleTemplate = versionLogTemplate(changes);
    let inArray = null;
    versionList.history.map((single, i) => {
      if(single.version === process.env.npm_package_version){ inArray = i; }
    })
      if(inArray !== null){
        versionList.history[inArray] = singleTemplate;
      } else {
        versionList.history.push(singleTemplate);
      }
  } else {
    const versionLog = versionLogTemplate(changes);
    versionList.history.push(versionLog);
  }
}
//===========================
// Blank file template
//===========================
function historyTemplate() {
  return {
    "environment": serverLocation,
    "name": process.env.npm_package_name,
    "history": []
  }
}
function versionLogTemplate(changes) {
  return {
    "version": process.env.npm_package_version,
    "changelog": {
      "build": serverLocation,
      "timestamp": timestamp(),
      "changes": changes
    }
  }
}

  //===========================
  // Check file exsists
  //===========================
  function versionMarker(location, callback) {
    var cmd = `touch ${location}`
    // create simple base
    exec(cmd, function (err, stdout, stderr) {
      versionList = callback();
      setTimeout(() => {
        let newChanges = branchs;
        branchs.map((feature, i) => {
          if (feature.indexOf('release/v') > -1) {
            newChanges = branchs.slice(0, i)
          }
        })
        appendVersion(versionList, newChanges);
        fs.writeFileSync(versionFile, JSON.stringify(versionList));
    }, 1000)
    });
  }
  function prepareTitle(title) {
    let cleanTitle = title.replace(`Merge branch \'`, '')
    title = title.replace(`develop' of `, '')
    title = title.replace(`\' into develop`, '');
    title = title.replace(`feature/`, '');
    return cleanTitle;
  }
