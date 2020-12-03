/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
const nodes = [];
const colors = figma.currentPage.findAll(n => n.name === "1" && n.type === "FRAME");
// var converter = require('number-to-words');
function rename() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OdW1lcm8vLi9zcmMvY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIHN1Y2ggYXMgdGhlIG5ldHdvcmsgYnkgY3JlYXRpbmcgYSBVSSB3aGljaCBjb250YWluc1xuLy8gYSBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbmNvbnN0IG5vZGVzID0gW107XG5jb25zdCBjb2xvcnMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKG4gPT4gbi5uYW1lID09PSBcIjFcIiAmJiBuLnR5cGUgPT09IFwiRlJBTUVcIik7XG4vLyB2YXIgY29udmVydGVyID0gcmVxdWlyZSgnbnVtYmVyLXRvLXdvcmRzJyk7XG5mdW5jdGlvbiByZW5hbWUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29sb3JzW2ldLm5hbWUgPSBcIk9uZVwiO1xuICAgIH1cbn1cbnJlbmFtZSgpO1xuLy8gdmFyIHRlc3RDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIudG9Xb3JkcygxMylcbi8vIGNvbnNvbGUubG9nKHRlc3RDb252ZXJ0ZXIpO1xuZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG5maWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xuLy8gTWFrZSBzdXJlIHRvIGNsb3NlIHRoZSBwbHVnaW4gd2hlbiB5b3UncmUgZG9uZS4gT3RoZXJ3aXNlIHRoZSBwbHVnaW4gd2lsbFxuLy8ga2VlcCBydW5uaW5nLCB3aGljaCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4uXG5maWdtYS5jbG9zZVBsdWdpbigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==