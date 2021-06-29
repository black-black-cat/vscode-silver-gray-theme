const theme = require('./theme.json');
const workbenchDark = require('./workbenchDark.json');
const workbenchYarra = require('./workbenchYarra.json');
const workbenchPrimer = require('./workbenchPrimer');

const fs = require('fs');
const path = require('path');

function handleFile(outWay, workbenchColors = {}, isMerge) {
  // data.tokenColors = data.tokenColors.filter(v => !v.name || v.name && v.name.indexOf('ITALIC') < 0);
  let data = {...theme};
  Object.keys(workbenchColors).forEach(key => {
    if (key === 'colors' && isMerge) {
      data[key] = {...data[key], ...workbenchColors[key]};
      return;
    }
    data[key] = workbenchColors[key];
  });
  let outFile = path.resolve(__dirname, outWay);
  fs.writeFileSync(outFile, JSON.stringify(data, null, '  '));
}

try {
  handleFile('../templates/theme.json');
  handleFile('../templates/dark.json', workbenchDark);
  handleFile('../templates/yarra.json', workbenchYarra);
  handleFile('../templates/primer.json', workbenchPrimer);
} catch (err) {
  console.error(err);
}
