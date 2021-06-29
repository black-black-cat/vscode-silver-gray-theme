import * as path from 'path';
import { generateTheme, IColorSet } from '@moxer/vscode-theme-generator';

const colors = {
  red: '#aa0000',
  redLight: '#aa0000',
  green: '#008800',
  greenDim: '#008800',
  yellow: '#775500',
  blue: '#0000ee',
  blueLight: '#007fbf',
  purple: '#8800aa',
  purpleLight: '#D000D0',
  pink: '#B168DF',
  teal: '#21C5C7',
  gray: '#555555',
  grayLight: '#858585',
  fg: '#222222',
  bg: '#eeeeee'
};

const colorSet: IColorSet = {
  semanticHighlighting: true,
  type: 'light',
  base: {
    background: colors.bg,
    foreground: colors.fg,
    color1: colors.purple,
    color2: colors.blueLight,
    color3: colors.green,
    color4: colors.yellow
  },
  syntax: {
    function: colors.blue,
    functionCall: colors.blue,
    comment: colors.grayLight
  },
  workbench: {
    'activityBar.activeBackground': '#33aaff50',
    'activityBar.activeBorder': '#33aaff',
    'badge.background': '#0060f0',
    'badge.foreground': '#ffffff',
    'breadcrumb.focusForeground': '#0000ff',
    'breadcrumb.foreground': '#000000',
    'checkbox.border': '#33aaffaa',
    contrastActiveBorder: '#ff000000',
    contrastBorder: '#ff000000',
    'editor.background': '#d8d8d8',
    'editor.findMatchBackground': '#ffdd6688',
    'editor.findMatchBorder': '#33aaffaa',
    'editor.findMatchHighlightBackground': '#ffffcc00',
    'editor.findMatchHighlightBorder': '#777733cc',
    'editor.findRangeHighlightBackground': '#d0e0f0',
    'editor.foldBackground': '#00d0a055',
    'editor.foreground': '#000000',
    'editor.inactiveSelectionBackground': '#33aaff22',
    'editor.lineHighlightBackground': '#00000000',
    'editor.lineHighlightBorder': '#77777730',
    'editor.selectionBackground': '#33aaff77',
    'editor.selectionHighlightBackground': '#33aaff33',
    'editor.selectionHighlightBorder': '#88888866',
    'editor.wordHighlightBackground': '#ff000000',
    'editor.wordHighlightBorder': '#cccccc33',
    'editor.wordHighlightStrongBackground': '#ff000000',
    'editor.wordHighlightStrongBorder': '#2288ff55',
    'editorBracketMatch.background': '#00d0a0',
    'editorGroup.border': '#88888888',
    'editorGutter.background': '#b4b2b0',
    'editorIndentGuide.activeBackground': '#00aa0088',
    'editorIndentGuide.background': '#33aaff44',
    'editorOverviewRuler.bracketMatchForeground': '#00a080',
    'editorOverviewRuler.findMatchForeground': '#ffff00',
    'editorSuggestWidget.background': '#ffffff',
    'editorSuggestWidget.foreground': '#000000',
    'editorSuggestWidget.selectedBackground': '#33aaff55',
    'editorUnnecessaryCode.border': '#ff000077',
    'editorWhitespace.foreground': '#808080',
    focusBorder: '#0000ff',
    'list.focusForeground': '#000000',
    'list.focusBackground': '#33aaff88',
    'list.hoverBackground': '#b0b0b0',
    'list.hoverForeground': '#333333',
    'menu.foreground': '#000000',
    'minimap.background': '#b4b2b0',
    'minimap.findMatchHighlight': '#ffff00',
    'panel.border': '#000000',
    'scrollbar.shadow': '#111122',
    'sideBar.background': '#d4d2d0',
    'sideBar.border': '#88888888',
    'sideBar.foreground': '#000000',
    'sideBarSectionHeader.background': '#c0c0d0',
    'tab.activeForeground': '#000000',
    'tab.border': '#000000',
    'tab.hoverBackground': '#33aaff33',
    'tab.unfocusedActiveBackground': '#e0e0e0',
    'titleBar.border': '#000000',
    'tree.indentGuidesStroke': '#000000'
  }
};

generateTheme('Gray', colorSet, path.join(__dirname, 'themes/main-theme.json'));
