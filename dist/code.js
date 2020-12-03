/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/number-to-words/numberToWords.min.js ***!
  \***********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_exports__, __webpack_require__.g, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/*!
 * Number-To-Words util
 * @version v1.2.4
 * @link https://github.com/marlun78/number-to-words
 * @author Martin Eneqvist (https://github.com/marlun78)
 * @contributors Aleksey Pilyugin (https://github.com/pilyugin),Jeremiah Hall (https://github.com/jeremiahrhall),Adriano Melo (https://github.com/adrianomelo),dmrzn (https://github.com/dmrzn)
 * @license MIT
 */
!function(){"use strict";var e="object"==typeof self&&self.self===self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||this,t=9007199254740991;function f(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=t}var n=/(hundred|thousand|(m|b|tr|quadr)illion)$/,r=/teen$/,o=/y$/,i=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,s={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function h(e){return n.test(e)||r.test(e)?e+"th":o.test(e)?e.replace(o,"ieth"):i.test(e)?e.replace(i,a):e}function a(e,t){return s[t]}var u=10,d=100,p=1e3,v=1e6,b=1e9,y=1e12,c=1e15,g=9007199254740992,m=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],w=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function x(e,t){var n,r=parseInt(e,10);if(!f(r))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(r))throw new RangeError("Input is not a safe number, it’s either too large or too small.");return n=function e(t){var n,r,o=arguments[1];if(0===t)return o?o.join(" ").replace(/,$/,""):"zero";o||(o=[]);t<0&&(o.push("minus"),t=Math.abs(t));t<20?(n=0,r=m[t]):t<d?(n=t%u,r=w[Math.floor(t/u)],n&&(r+="-"+m[n],n=0)):t<p?(n=t%d,r=e(Math.floor(t/d))+" hundred"):t<v?(n=t%p,r=e(Math.floor(t/p))+" thousand,"):t<b?(n=t%v,r=e(Math.floor(t/v))+" million,"):t<y?(n=t%b,r=e(Math.floor(t/b))+" billion,"):t<c?(n=t%y,r=e(Math.floor(t/y))+" trillion,"):t<=g&&(n=t%c,r=e(Math.floor(t/c))+" quadrillion,");o.push(r);return e(n,o)}(r),t?h(n):n}var M={toOrdinal:function(e){var t=parseInt(e,10);if(!f(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it’s either too large or too small.");var n=String(t),r=Math.abs(t%100),o=11<=r&&r<=13,i=n.charAt(n.length-1);return n+(o?"th":"1"===i?"st":"2"===i?"nd":"3"===i?"rd":"th")},toWords:x,toWordsOrdinal:function(e){return h(x(e))}}; true?( true&&module.exports&&(exports=module.exports=M),exports.numberToWords=M):0}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
const nodes = [];
const allFrames = figma.currentPage.findAll(n => !isNaN(parseInt(n.name, 10)) && n.type === "FRAME");
var converter = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/numberToWords.min.js");
function rename() {
    for (let i = 0; i < allFrames.length; i++) {
        allFrames[i].name = converter.toWords(allFrames[i].name);
    }
}
rename();
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);
figma.closePlugin();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OdW1lcm8vLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL251bWJlclRvV29yZHMubWluLmpzIiwid2VicGFjazovL051bWVyby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9OdW1lcm8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9OdW1lcm8vLi9zcmMvY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWEsc0VBQXNFLHFCQUFNLEVBQUUscUJBQU0sVUFBVSxxQkFBTSxFQUFFLHFCQUFNLDBCQUEwQixjQUFjLHFEQUFxRCxjQUFjLHlDQUF5QyxnSkFBZ0osd0xBQXdMLGNBQWMsNEZBQTRGLGdCQUFnQixZQUFZLHVVQUF1VSxnQkFBZ0IsdUJBQXVCLDBFQUEwRSxpR0FBaUcsdUJBQXVCLHVCQUF1QixzREFBc0QsVUFBVSxxQ0FBcUMsNlZBQTZWLFVBQVUsY0FBYyxhQUFhLE9BQU8sc0JBQXNCLHFCQUFxQiwwRUFBMEUsaUdBQWlHLHdFQUF3RSw4REFBOEQsc0NBQXNDLGlCQUFpQixLQUEyQixFQUFFLEtBQTBCLDZDQUE2QyxxQkFBcUIsSUFBSSxDQUFpQixDQUFDLEc7Ozs7OztVQ1I5ekU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsNEVBQWlCO0FBQ3pDO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBOdW1iZXItVG8tV29yZHMgdXRpbFxuICogQHZlcnNpb24gdjEuMi40XG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbWFybHVuNzgvbnVtYmVyLXRvLXdvcmRzXG4gKiBAYXV0aG9yIE1hcnRpbiBFbmVxdmlzdCAoaHR0cHM6Ly9naXRodWIuY29tL21hcmx1bjc4KVxuICogQGNvbnRyaWJ1dG9ycyBBbGVrc2V5IFBpbHl1Z2luIChodHRwczovL2dpdGh1Yi5jb20vcGlseXVnaW4pLEplcmVtaWFoIEhhbGwgKGh0dHBzOi8vZ2l0aHViLmNvbS9qZXJlbWlhaHJoYWxsKSxBZHJpYW5vIE1lbG8gKGh0dHBzOi8vZ2l0aHViLmNvbS9hZHJpYW5vbWVsbyksZG1yem4gKGh0dHBzOi8vZ2l0aHViLmNvbS9kbXJ6bilcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4hZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZiYmc2VsZnx8XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbCYmZ2xvYmFsfHx0aGlzLHQ9OTAwNzE5OTI1NDc0MDk5MTtmdW5jdGlvbiBmKGUpe3JldHVybiEoXCJudW1iZXJcIiE9dHlwZW9mIGV8fGUhPWV8fGU9PT0xLzB8fGU9PT0tMS8wKX1mdW5jdGlvbiBsKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiZNYXRoLmFicyhlKTw9dH12YXIgbj0vKGh1bmRyZWR8dGhvdXNhbmR8KG18Ynx0cnxxdWFkcilpbGxpb24pJC8scj0vdGVlbiQvLG89L3kkLyxpPS8oemVyb3xvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkkLyxzPXt6ZXJvOlwiemVyb3RoXCIsb25lOlwiZmlyc3RcIix0d286XCJzZWNvbmRcIix0aHJlZTpcInRoaXJkXCIsZm91cjpcImZvdXJ0aFwiLGZpdmU6XCJmaWZ0aFwiLHNpeDpcInNpeHRoXCIsc2V2ZW46XCJzZXZlbnRoXCIsZWlnaHQ6XCJlaWdodGhcIixuaW5lOlwibmludGhcIix0ZW46XCJ0ZW50aFwiLGVsZXZlbjpcImVsZXZlbnRoXCIsdHdlbHZlOlwidHdlbGZ0aFwifTtmdW5jdGlvbiBoKGUpe3JldHVybiBuLnRlc3QoZSl8fHIudGVzdChlKT9lK1widGhcIjpvLnRlc3QoZSk/ZS5yZXBsYWNlKG8sXCJpZXRoXCIpOmkudGVzdChlKT9lLnJlcGxhY2UoaSxhKTplfWZ1bmN0aW9uIGEoZSx0KXtyZXR1cm4gc1t0XX12YXIgdT0xMCxkPTEwMCxwPTFlMyx2PTFlNixiPTFlOSx5PTFlMTIsYz0xZTE1LGc9OTAwNzE5OTI1NDc0MDk5MixtPVtcInplcm9cIixcIm9uZVwiLFwidHdvXCIsXCJ0aHJlZVwiLFwiZm91clwiLFwiZml2ZVwiLFwic2l4XCIsXCJzZXZlblwiLFwiZWlnaHRcIixcIm5pbmVcIixcInRlblwiLFwiZWxldmVuXCIsXCJ0d2VsdmVcIixcInRoaXJ0ZWVuXCIsXCJmb3VydGVlblwiLFwiZmlmdGVlblwiLFwic2l4dGVlblwiLFwic2V2ZW50ZWVuXCIsXCJlaWdodGVlblwiLFwibmluZXRlZW5cIl0sdz1bXCJ6ZXJvXCIsXCJ0ZW5cIixcInR3ZW50eVwiLFwidGhpcnR5XCIsXCJmb3J0eVwiLFwiZmlmdHlcIixcInNpeHR5XCIsXCJzZXZlbnR5XCIsXCJlaWdodHlcIixcIm5pbmV0eVwiXTtmdW5jdGlvbiB4KGUsdCl7dmFyIG4scj1wYXJzZUludChlLDEwKTtpZighZihyKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm90IGEgZmluaXRlIG51bWJlcjogXCIrZStcIiAoXCIrdHlwZW9mIGUrXCIpXCIpO2lmKCFsKHIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC5cIik7cmV0dXJuIG49ZnVuY3Rpb24gZSh0KXt2YXIgbixyLG89YXJndW1lbnRzWzFdO2lmKDA9PT10KXJldHVybiBvP28uam9pbihcIiBcIikucmVwbGFjZSgvLCQvLFwiXCIpOlwiemVyb1wiO298fChvPVtdKTt0PDAmJihvLnB1c2goXCJtaW51c1wiKSx0PU1hdGguYWJzKHQpKTt0PDIwPyhuPTAscj1tW3RdKTp0PGQ/KG49dCV1LHI9d1tNYXRoLmZsb29yKHQvdSldLG4mJihyKz1cIi1cIittW25dLG49MCkpOnQ8cD8obj10JWQscj1lKE1hdGguZmxvb3IodC9kKSkrXCIgaHVuZHJlZFwiKTp0PHY/KG49dCVwLHI9ZShNYXRoLmZsb29yKHQvcCkpK1wiIHRob3VzYW5kLFwiKTp0PGI/KG49dCV2LHI9ZShNYXRoLmZsb29yKHQvdikpK1wiIG1pbGxpb24sXCIpOnQ8eT8obj10JWIscj1lKE1hdGguZmxvb3IodC9iKSkrXCIgYmlsbGlvbixcIik6dDxjPyhuPXQleSxyPWUoTWF0aC5mbG9vcih0L3kpKStcIiB0cmlsbGlvbixcIik6dDw9ZyYmKG49dCVjLHI9ZShNYXRoLmZsb29yKHQvYykpK1wiIHF1YWRyaWxsaW9uLFwiKTtvLnB1c2gocik7cmV0dXJuIGUobixvKX0ociksdD9oKG4pOm59dmFyIE09e3RvT3JkaW5hbDpmdW5jdGlvbihlKXt2YXIgdD1wYXJzZUludChlLDEwKTtpZighZih0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm90IGEgZmluaXRlIG51bWJlcjogXCIrZStcIiAoXCIrdHlwZW9mIGUrXCIpXCIpO2lmKCFsKHQpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC5cIik7dmFyIG49U3RyaW5nKHQpLHI9TWF0aC5hYnModCUxMDApLG89MTE8PXImJnI8PTEzLGk9bi5jaGFyQXQobi5sZW5ndGgtMSk7cmV0dXJuIG4rKG8/XCJ0aFwiOlwiMVwiPT09aT9cInN0XCI6XCIyXCI9PT1pP1wibmRcIjpcIjNcIj09PWk/XCJyZFwiOlwidGhcIil9LHRvV29yZHM6eCx0b1dvcmRzT3JkaW5hbDpmdW5jdGlvbihlKXtyZXR1cm4gaCh4KGUpKX19O1widW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzPyhcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9TSksZXhwb3J0cy5udW1iZXJUb1dvcmRzPU0pOmUubnVtYmVyVG9Xb3Jkcz1NfSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJjb25zdCBub2RlcyA9IFtdO1xuY29uc3QgYWxsRnJhbWVzID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChuID0+ICFpc05hTihwYXJzZUludChuLm5hbWUsIDEwKSkgJiYgbi50eXBlID09PSBcIkZSQU1FXCIpO1xudmFyIGNvbnZlcnRlciA9IHJlcXVpcmUoJ251bWJlci10by13b3JkcycpO1xuZnVuY3Rpb24gcmVuYW1lKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFsbEZyYW1lc1tpXS5uYW1lID0gY29udmVydGVyLnRvV29yZHMoYWxsRnJhbWVzW2ldLm5hbWUpO1xuICAgIH1cbn1cbnJlbmFtZSgpO1xuZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gbm9kZXM7XG5maWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcobm9kZXMpO1xuZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=