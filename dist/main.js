/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0; }\\n\\nbody {\\n  background: #466368;\\n  background: linear-gradient(to right bottom, #64883f, #293f61);\\n  height: 100vh;\\n  font-family: 'Quicksand', sans-serif; }\\n\\n.todoList {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  min-height: 70vh;\\n  width: 60%;\\n  max-width: 80%;\\n  background: #c0c0c0; }\\n  .todoList #nav {\\n    border-right: 2px solid #64883f;\\n    background: #f3eded; }\\n    .todoList #nav .todoApp {\\n      padding: 8px 0;\\n      margin: 8px 0; }\\n      .todoList #nav .todoApp h3 {\\n        font-weight: 900;\\n        color: #64883f; }\\n    .todoList #nav .projectTitle {\\n      display: flex;\\n      justify-content: space-between;\\n      align-items: center; }\\n      .todoList #nav .projectTitle h4 {\\n        font-size: 20px;\\n        font-weight: 700;\\n        margin: 0;\\n        color: #64883f; }\\n      .todoList #nav .projectTitle i {\\n        font-size: 1.5rem;\\n        color: #80cc35;\\n        cursor: pointer; }\\n    .todoList #nav .projects {\\n      height: 70vh;\\n      overflow-y: auto;\\n      padding: 5px 0; }\\n      .todoList #nav .projects p {\\n        font-weight: 600;\\n        margin: 0;\\n        padding-bottom: 8px;\\n        border-bottom: 1px solid #acdf79;\\n        cursor: pointer;\\n        border-radius: 5px; }\\n        .todoList #nav .projects p button {\\n          outline: none; }\\n        .todoList #nav .projects p:hover {\\n          background-color: #e0e0e0; }\\n\\n.task {\\n  background: white;\\n  min-height: 50vh;\\n  margin: 1.5rem;\\n  border-radius: 10px; }\\n  .task .task-title {\\n    border-bottom: 5px double #89e232;\\n    padding: 8px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between; }\\n    .task .task-title #task-title {\\n      color: #64883f;\\n      font-weight: 700; }\\n    .task .task-title #new-task {\\n      font-size: 1.5rem;\\n      color: #80cc35;\\n      cursor: pointer; }\\n  .task .tasks-list .task-item {\\n    padding: 0 10px;\\n    border-bottom: 1px solid #b9ec86;\\n    cursor: pointer; }\\n    .task .tasks-list .task-item #first-task {\\n      color: #64883f; }\\n\\nul {\\n  list-style: none;\\n  display: flex;\\n  width: 100%;\\n  position: absolute;\\n  bottom: 0;\\n  background: #64883f;\\n  margin: 0;\\n  padding: 0; }\\n\\n.project {\\n  position: absolute;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.123);\\n  backdrop-filter: blur(5px);\\n  z-index: 10;\\n  justify-content: center;\\n  align-items: center;\\n  display: none; }\\n  .project form {\\n    background-color: white;\\n    padding: 1rem 2rem;\\n    border-radius: 5px; }\\n\\n.show-modal {\\n  display: flex !important; }\\n\\n#close-task,\\n#close-project {\\n  position: absolute;\\n  right: 1rem;\\n  top: 1rem;\\n  background-color: transparent;\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  border-radius: 100%;\\n  color: white;\\n  border: none; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/*! exports provided: showProject, projectModal, taskModal, closeProject, closeTask, projectForm, name, projectsList, newTask, taskForm, taskTitle, taskDescription, taskDueDate, taskPriority, titleText, tasksList, taskDetails, icon, deleteIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showProject\", function() { return showProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectModal\", function() { return projectModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskModal\", function() { return taskModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeProject\", function() { return closeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeTask\", function() { return closeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectForm\", function() { return projectForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsList\", function() { return projectsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newTask\", function() { return newTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskForm\", function() { return taskForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskTitle\", function() { return taskTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskDescription\", function() { return taskDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskDueDate\", function() { return taskDueDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskPriority\", function() { return taskPriority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleText\", function() { return titleText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasksList\", function() { return tasksList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskDetails\", function() { return taskDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"icon\", function() { return icon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteIcon\", function() { return deleteIcon; });\nconst showProject = document.getElementById('show-project');\nconst projectModal = document.getElementById('project-modal');\nconst taskModal = document.getElementById('task-modal');\nconst closeProject = document.getElementById('close-project');\nconst closeTask = document.getElementById('close-task');\nconst projectForm = document.getElementById('project-form');\nconst name = document.getElementById('name');\nconst projectsList = document.getElementById('projects-list');\nconst newTask = document.getElementById('new-task');\nconst taskForm = document.getElementById('task-form');\nconst taskTitle = document.getElementById('title');\nconst taskDescription = document.getElementById('description');\nconst taskDueDate = document.getElementById('duedate');\nconst taskPriority = document.getElementById('priority');\nconst titleText = document.getElementById('task-title');\nconst tasksList = document.getElementById('tasks-list');\nconst taskDetails = document.getElementById('task-details');\nconst icon = document.createElement('i');\nconst deleteIcon = document.createElement('i');\nicon.className = 'fas fa-pen';\ndeleteIcon.className = 'fas fa-trash-alt';\n\n\n//# sourceURL=webpack:///./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\n\n\nconst projects = new _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet gproject = '';\n\nconst nameEncode = name => name.split(' ').join('+');\n\nconst decode = name => name.split('+').join(' ');\n\nconst refresh = () => {\n  const list = projects.getProjects();\n  let contents = '';\n\n  if (list) {\n    list.forEach(item => {\n      const dataName = nameEncode(item.projectName);\n      contents += `\n      <p data-project=${dataName}>${item.projectName}\n      <button class='fas fa-trash-alt' data-name=${dataName}></button>\n      </p>`;\n    });\n  }\n\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"projectsList\"].innerHTML = contents;\n};\n\nrefresh();\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"projectsList\"].addEventListener('click', e => {\n  if (e.target.nodeName !== 'BUTTON') {\n    return;\n  }\n\n  let pname = e.target.dataset.name;\n  pname = decode(pname);\n  projects.deleteProject(pname);\n  refresh();\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"showProject\"].addEventListener('click', () => {\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"projectModal\"].classList.add('show-modal');\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"newTask\"].addEventListener('click', () => {\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskModal\"].classList.add('show-modal');\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"closeProject\"].addEventListener('click', () => {\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"projectModal\"].classList.remove('show-modal');\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"closeTask\"].addEventListener('click', () => {\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskModal\"].classList.remove('show-modal');\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"projectForm\"].addEventListener('submit', e => {\n  e.preventDefault();\n  const {\n    value\n  } = _elements__WEBPACK_IMPORTED_MODULE_3__[\"name\"];\n  projects.addProject(value);\n  refresh();\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"projectModal\"].classList.remove('show-modal');\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"projectForm\"].reset();\n});\n\nconst listTasks = tasks => {\n  let list = '';\n  tasks.forEach(item => {\n    list += `<div class=\"task-item d-flex justify-content-between\">\n    <p id=\"first-task\" class=\"m-0\" data-task=${nameEncode(item.title)} >${item.title}</p>\n    <p class=\"m-0\">${item.duedate}</p>\n    <p class=\"m-0\">${item.priority}</p>\n    </div>\n    `;\n  });\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"tasksList\"].innerHTML = list;\n};\n\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"projectsList\"].addEventListener('click', e => {\n  if (e.target.nodeName !== 'P') {\n    return;\n  }\n\n  let pname = e.target.dataset.project;\n  pname = decode(pname);\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"titleText\"].innerText = pname;\n  const project = projects.singleProject(pname);\n  gproject = project;\n  listTasks(project.tasks);\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"newTask\"].dataset.project = nameEncode(pname);\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"taskForm\"].addEventListener('submit', e => {\n  e.preventDefault();\n  const title = _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskTitle\"].value;\n  const description = _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDescription\"].value;\n  const duedate = _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDueDate\"].value;\n  const priority = _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskPriority\"].value;\n  let {\n    project\n  } = _elements__WEBPACK_IMPORTED_MODULE_3__[\"newTask\"].dataset;\n  project = projects.singleProject(decode(project));\n  const task = new _tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](project);\n  const tList = project.tasks.map(item => item.title);\n  const taskDetails = {\n    title,\n    description,\n    duedate,\n    priority\n  };\n\n  if (tList.includes(title)) {\n    const updated = task.updateTask(taskDetails);\n    project.tasks = updated;\n    projects.updateProject(project);\n    const newData = updated.filter(item => item.title === title)[0];\n    _elements__WEBPACK_IMPORTED_MODULE_3__[\"icon\"].dataset.task = nameEncode(newData.title);\n    listTasks(project.tasks);\n  } else {\n    const createdTask = task.createTask(taskDetails);\n    projects.updateProject(createdTask);\n    listTasks(createdTask.tasks);\n  }\n\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskModal\"].classList.remove('show-modal');\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskForm\"].reset();\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"tasksList\"].addEventListener('click', e => {\n  if (e.target.nodeName !== 'P') return;\n  const value = decode(e.target.dataset.task);\n  const findTask = gproject.tasks.filter(item => item.title === value)[0];\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDetails\"].innerHTML = `\n  <h3>${findTask.title} <span><small>\n  ${findTask.priority} priority</small></span></h3>\n  <p>${findTask.description}</p>\n  <small>${findTask.duedate}</small>\n  `;\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"icon\"].dataset.task = nameEncode(findTask.title);\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"deleteIcon\"].dataset.task = nameEncode(findTask.title);\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDetails\"].appendChild(_elements__WEBPACK_IMPORTED_MODULE_3__[\"icon\"]);\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDetails\"].appendChild(_elements__WEBPACK_IMPORTED_MODULE_3__[\"deleteIcon\"]);\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"icon\"].addEventListener('click', e => {\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskModal\"].classList.add('show-modal');\n  const taskName = decode(e.target.dataset.task);\n  const taskDetails = gproject.tasks.filter(item => item.title === taskName)[0];\n  const {\n    title,\n    description,\n    duedate,\n    priority\n  } = taskDetails;\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskTitle\"].value = title;\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskTitle\"].disabled = true;\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDescription\"].value = description;\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDueDate\"].value = duedate;\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskPriority\"].value = priority;\n});\n_elements__WEBPACK_IMPORTED_MODULE_3__[\"deleteIcon\"].addEventListener('click', e => {\n  const data = decode(e.target.dataset.task);\n  const tList = gproject.tasks.filter(item => item.title === data)[0];\n  const task = new _tasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gproject);\n  const deleted = task.deleteTask(tList);\n  gproject.tasks = deleted;\n  projects.updateProject(gproject);\n  listTasks(gproject.tasks);\n  _elements__WEBPACK_IMPORTED_MODULE_3__[\"taskDetails\"].innerHTML = '';\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-alert */\n\n/* eslint-disable class-methods-use-this */\nclass Projects {\n  getProjects() {\n    const projectList = JSON.parse(localStorage.getItem('projects'));\n    return projectList;\n  }\n\n  saveProject(project) {\n    return localStorage.setItem('projects', JSON.stringify(project));\n  }\n\n  addProject(name) {\n    if (!name) {\n      alert('Project name is required!');\n    }\n\n    const list = this.getProjects() || [];\n    const names = list.map(item => item.projectName);\n\n    if (names.includes(name)) {\n      alert('Project already exists!');\n    } else {\n      list.push({\n        projectName: name,\n        tasks: []\n      });\n      this.saveProject(list);\n    }\n  }\n\n  singleProject(project) {\n    const list = this.getProjects();\n    const single = list.filter(item => project === item.projectName);\n    return single[0];\n  }\n\n  deleteProject(project) {\n    const single = this.singleProject(project);\n    const list = this.getProjects();\n    const removed = list.filter(item => item.projectName !== single.projectName);\n    return this.saveProject(removed);\n  }\n\n  updateProject(project) {\n    let single = this.singleProject(project.name);\n    single = project;\n    const list = this.getProjects();\n    const removed = list.filter(item => item.projectName !== single.projectName);\n    removed.push(single);\n    return this.saveProject(removed);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable no-alert */\n\n/* eslint-disable class-methods-use-this */\nclass Tasks {\n  constructor(project) {\n    this.project = project;\n  } // eslint-disable-next-line consistent-return\n\n\n  createTask(task) {\n    const {\n      title,\n      description,\n      duedate,\n      priority\n    } = task;\n    const titles = this.project.tasks.map(item => item.title);\n\n    if (!title || !description || !duedate || !priority) {\n      alert('Please fill all fields');\n    } else if (titles.includes(title)) {\n      alert('Similar task exists!');\n    } else {\n      this.project.tasks.push(task);\n      return this.project;\n    }\n  }\n\n  singleTask(task) {\n    const tasksList = this.project.tasks;\n    const single = tasksList.filter(item => item.title === task.title);\n    return single[0];\n  }\n\n  deleteTask(task) {\n    const single = this.singleTask(task);\n    const removed = this.project.tasks.filter(item => item.title !== single.title);\n    return removed;\n  }\n\n  updateTask(task) {\n    const removed = this.deleteTask(task);\n    removed.push(task);\n    return removed;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tasks);\n\n//# sourceURL=webpack:///./src/tasks.js?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ })

/******/ });