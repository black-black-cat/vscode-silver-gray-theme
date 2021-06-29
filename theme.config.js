let ref = {
  blue: '#4fb4d8',
  green: '#78bd65',
  orange: '#ef7c2a',
  red: '#eb3d54',
  yellow: '#e5cd52',
};
let darkThemeTokenColors = {
  comment: '#5b858b',
  text: '#b2cacd',
  keyword: '#df769b',
  variable: '#b2cacd',
  annotation: ref.orange,
  constant: ref.orange,
  tag: ref.orange,
  string: ref.green,
  stringInterpolated: ref.green,
  number: ref.blue,
  function: ref.yellow,
  support: ref.blue,
  misc: ref.blue,
  invalid: '#e3541c'
};
module.exports = [{
  name: 'Silver Gray',
  inputFile: 'templates/theme.json',
  outputDir: 'output',
  colors: {
    comment: '#858585',
    text: '#222',
    keyword: '#80a',
    variable: '#222',
    annotation: '#80a',
    constant: '#222',
    tag: '#80a',
    string: '#005cc5',
    stringInTemplate: '#D000D0',
    number: '#750',
    function: '#00e',
    support: '#080',
    misc: '#080',
    invalid: '#a00',
    objectProperty: '#555'
  }
}, {
  name: 'Silver Dark',
  inputFile: 'templates/dark.json',
  outputDir: 'output',
  colors: darkThemeTokenColors
}, {
  name: 'Silver Yarra',
  inputFile: 'templates/yarra.json',
  outputDir: 'output',
  colors: darkThemeTokenColors
}, {
  name: 'Silver Primer',
  inputFile: 'templates/primer.json',
  outputDir: 'output',
  colors: {
    comment: '#959da5',
    text: '#24292e',
    keyword: '#d03592',
    variable: '#24292e',
    annotation: '#d03592',
    constant: '#22863a',
    tag: '#d03592',
    string: '#d15704',
    stringInTemplate: '#d15704',
    number: '#6f42c1',
    function: '#005cc5',
    support: '#22863a',
    misc: '#22863a',
    invalid: '#d73a49',
    objectProperty: '#24292e'
  }
}]