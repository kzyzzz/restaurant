/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderContact = () => {\n    const main = document.querySelector('.main');\n\n    main.textContent = \"\";\n\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    \n    const leftText = document.createElement('div'); \n\n    const map = document.createElement('img');\n    map.src = '../dist/img/map.png';\n    map.id = 'map';\n    leftText.appendChild(map);\n\n\n    // leftText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n    //                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n    //                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n    //                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;\n\n    const rightText = document.createElement('div');\n    \n    rightText.innerHTML = `<h1>Contact Us</h1>\n                           <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Friday Harbor Washington 98250 United States</p>\n                           <p><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> wine@loremipsum.com</p>`;\n\n    rightText.style.paddingRight = '1rem';\n    \n    contact.appendChild(rightText);\n    contact.appendChild(leftText);\n    \n    \n    main.appendChild(contact);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderHome = () => {\n    const main = document.querySelector('.main');\n\n    main.textContent = \"\";\n\n    const header = document.createElement('h1');\n    const text = document.createElement('p');\n\n    header.textContent = \"Lorem Ipsum Wine Bar\";\n    text.textContent = ` Lorem ipsum is fueled by a collection of individuals passionate about creating a space for people to connect. \n                         Our restaurants are an ode to our communities – providing familiar yet inspired surroundings, wine appropriate \n                         for both the most casual and sacred of gatherings, and a menu that satisfies all your cravings. Our mission is to \n                         make every moment that we’re a part of, one that leaves people feeling crazy-good.`;\n\n    main.appendChild(header);\n    main.appendChild(text);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site.js */ \"./src/site.js\");\n\n\n\n(0,_site_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderMenu = () => {\n    const menu = [\n        {\n            name: `Joguet, \"Les Petites Roches\" 2017`,\n            description: `Following the typical Charles Joguet style, the 2017 Chinon Les Petites \n            Roches is muscular with decadent aromas of cranberries, black pepper, violets, fennel,\n             and a little smoke. It seems to mingle perfectly at the table with autumnal flavors.`,\n            price: `$60`,\n        },\n        {\n            name: `Barnett Vineyards 2017`,\n            description: `The 2017 Spring Mountain Cabernet Sauvignon is one of the darkest we’ve\n             made. Big black raspberry jumps from the glass as well as blueberry jam and black pepper.\n              There is a bright chocolate element surrounded by cedar notes. The mouthfeel is rich and lush`,\n            price: `$92`,\n        },\n        {\n            name: `Broadside 2018`,\n            description: `Brilliant violet. Spice-accented cherry and dark berry aromas show very\n             good clarity and a subtle smoky nuance. Sappy and focused on the palate, offering bitter\n              cherry and black currant flavors that become sweeter with air. Shows very good energy and\n               clarity on the finish, which is firmed by supple, slow-building tannins.`,\n            price: `$40`,\n        },\n        {\n            name: `De Toren, \"Fusion V\" 2017`,\n            description: `The iconic Left Bank-based blend from De Toren, Fusion V is meticulously \n            crafted from Bordeaux’s ‘Noble Five’ varietals and, with its complex flavours of liquorice,\n             black cherry, cedar and dark berries, it offers a stylish departure for sophisticated\n              oenophilic tastes.Soft as spun silk, with a lingering hint of sweet fruit on the back palate,\n               this is a wine that will only improve with age.`,\n            price: `$100`,\n        },\n        {\n            name: `Frog's Leap Estate Grown 2017`,\n            description: `A wine with all the hallmarks of the legendary Cabernets of Rutherford: \n            deep, cassis currant aromas, the classic notes of Rutherford Dust, earthen flavors of \n            cedar and black olive and a velvety, plush mouthfeel.`,\n            price: `$140`,\n        },\n        {\n            name: `Horizon de Lynch 2016`,\n            description: `The wine gives the expression of the soil and the noble grape varieties \n            that grow on it: the Cabernet Sauvignon and the Merlot. Very pleasant wine with dark fruits,\n             light spice, vanilla, and a smooth, dry finish.`,\n            price: `$48`,\n        },\n        {\n            name: `Lake Sonoma 2017`,\n            description: `It is where these gravelly loam soils straddle the river to create optimal \n            growing conditions that our Cabernet Sauvignon grapes are selected and crafted into this \n            complex, inviting wines.`,\n            price: `$64`,\n        },\n        {\n            name: `Leviathan 2018`,\n            description: `An intense mix of fresh boysenberry, black cherry and plum jump from the\n             glass with cocoa powder, allspice and nutmeg. Its earthy elements of our rocky northern \n             California hillsides include Bay Laurel, sage, cedar, dry red earth which speak to its origins.\n              Supple and balanced tannins of this rich wine lead to a long savory finish with hints of graphite and star anise.`,\n            price: `$80`,\n        },\n\n    ];\n    const main = document.querySelector('.main');\n\n    main.textContent = \"\";\n\n    let menuHeader = document.createElement('h1');\n    menuHeader.textContent = \"Menu\";\n    menuHeader.style.textAlign = \"center\";\n    main.appendChild(menuHeader);\n\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    menu.forEach((wine) => {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item-card');\n\n        let menuItemHeader = document.createElement('div');\n        menuItemHeader.classList.add('menu-item-header');\n        menuItemHeader.textContent = wine.name;\n        menuItem.appendChild(menuItemHeader);\n\n        let menuItemDescription = document.createElement('div');\n        menuItemDescription.textContent = wine.description;\n        menuItemDescription.classList.add('menu-item-description');\n        menuItem.appendChild(menuItemDescription);\n\n        let menuItemPrice = document.createElement('div');\n        menuItemPrice.textContent = wine.price;\n        menuItem.appendChild(menuItemPrice);\n    \n        menuContainer.appendChild(menuItem);\n    });\n\n    main.appendChild(menuContainer);\n\n\n};\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst createContainer = () => {\n    let container = document.createElement('div');\n    container.classList.add('container');\n\n    return container;\n}\n\nconst createNav = () => {\n    let menuItems = [\"Home\", \"Menu\", \"Contact\"];\n\n    let menu = document.createElement('nav');\n    menu.classList.add('main-menu');\n\n    let menuUl = document.createElement('ul');\n    \n\n    menuItems.forEach((item) => {\n        let menuItem = document.createElement('li');\n        menuItem.classList.add('menu-item');\n\n        menuItem.textContent = item;\n        menuItem.id = item;\n\n        if (menuItem.id == \"Home\") menuItem.classList.add('menu-item-active');\n\n        menuItem.addEventListener('click', (e) => {\n\n            let menuActive = document.querySelector('.menu-item-active');\n            if (menuActive) menuActive.classList.remove('menu-item-active');\n\n            e.target.classList.add('menu-item-active');\n\n            let main = document.querySelector('.main');\n            main.style.animation = 'none';\n\n            setTimeout(function() {\n                main.style.animation = '';\n            }, 1);\n\n            switch (e.target.innerText) {\n                case 'Home':\n                    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n                    break;\n\n                case 'Menu':\n                    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n                    break;\n                \n                case 'Contact':\n                    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.default)();\n                    break;                \n            };\n        });\n\n        menuUl.appendChild(menuItem);\n    });\n\n    menu.appendChild(menuUl);\n\n    return menu;\n\n}\n\nconst createMain = () => {\n    let main = document.createElement('div');\n    main.classList.add('main');\n\n    return main;\n}\n\nconst createFooter = () => {\n    let footer = document.createElement('footer');\n    footer.classList.add('footer');\n\n    let footerDiv = document.createElement('div');\n    footerDiv.textContent = 'Developed by Vladimir Baraev'\n\n    let links = document.createElement('div');\n    links.innerHTML = '<a href=\"https://github.com/kzyzzz\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a>';\n\n    footer.appendChild(footerDiv);\n    footer.appendChild(links);\n\n    return footer;\n}\n\nconst renderSite = () => {\n    let content = document.getElementById(\"content\");\n\n    let container = createContainer();\n    container.appendChild(createNav());\n    container.appendChild(createMain());\n    container.appendChild(createFooter());\n\n    content.appendChild(container);    \n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSite);\n\n//# sourceURL=webpack://restaurant/./src/site.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;