const fs = require('fs');
const path = require('path');
const plist = require('plist');

module.exports = ({ opts: { projectRoot, platforms } }) => {
    if (!platforms.includes('ios')) return;

    const projectName = 'RecycleBot';
    const platformPath = path.join(projectRoot, 'platforms/ios');
    const infoPlistPath = path.join(platformPath, projectName, `${projectName}-Info.plist`);

    const infoPlist = plist.parse(fs.readFileSync(infoPlistPath, 'utf8'));



    fs.writeFileSync(infoPlistPath, plist.build(infoPlist, { indent: '\t' }));
}
