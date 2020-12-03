// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

const nodes: SceneNode[] = [];

const colors = figma.currentPage.findAll(n => n.name === "1" && n.type === "FRAME")

// var converter = require('number-to-words');

function rename(){
  for (let i = 0; i < colors.length; i++) {
  colors[i].name = "One";
  }
}
rename();
// var testConverter = converter.toWords(13)
// console.log(testConverter);
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();