const nodes: SceneNode[] = [];
const allFrames = figma.currentPage.findAll(n => !isNaN(parseInt(n.name, 10)) && n.type === "FRAME")
var converter = require('number-to-words'); 

function rename(){
  for (let i = 0; i < allFrames.length; i++) {
    allFrames[i].name = converter.toWords(allFrames[i].name);
  }
}
rename();

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

figma.closePlugin();
