(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navigation bar- Material Design boostrap-->\n<header>\n    <div class=\"container\">\n        <mdb-navbar class=\"navigation\" SideClass=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\">\n\n            <a class=\"navigation__logo navbar-brand waves-light\" mdbWavesEffect routerLink=\"/home\"><strong>Home</strong><span class=\"sr-only\">(current)</span></a>\n            <links>\n                <ul class=\"navigation__list  navbar-nav mr-auto\">\n                    <li class=\"navigation__list-item nav-item waves-light\" mdbWavesEffect>\n                        <a class=\"navigation__link  nav-link\" routerLink=\"/play\">Play</a>\n                    </li>\n                    <li class=\"navigation__list-item  nav-item  waves-light\" mdbWavesEffect>\n                        <a class=\"navigation__link  nav-link\" routerLink=\"/instruction\">Instruction</a>\n                    </li>\n                </ul>\n            </links>\n\n        </mdb-navbar>\n    </div>\n\n    <body>\n        <div class=\"view\"></div>\n        <div [@slideInOutAnimation]=\"prepareRoute(outlet)\">\n            <router-outlet #outlet=\"outlet\"></router-outlet>\n        </div>\n    </body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Home page, Title-->\n\n<div class=\"container flex-center text-center\">\n    <div class=\"row pt-30 mt-25 w-100\">\n        <div class=\"col-md-12\">\n            <h1 class=\"container__header h1-reponsive white-text animated bounce slower font-up font-bold mb-3\"><strong>Tic Tac Toe</strong></h1>\n            <hr class=\"container__line hr-light animated slideInUp mt-7 \">\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Instruction page-->\n<div class=\"container text-md-left white-text\">\n    <p class=\"container__para\"> 1.The game is played on a grid in a \"Play\" tab.<br> 2.Two players are represented by the avators.<br>3.Player X have \"Aqua\" colour avator and Player O it's \"Peach\". <br> 4.Players takes turns putting their marks in empty squares.<br> 5.The first player\n        to get 3 of the row (up, down, across, or diagonally) is the winner.<br> 6.When all 9 squares are full, the game is over.<br> 7.If no player has 3 marks in a row, the game ends in a tie.</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainboard/mainboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mainboard/mainboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Avator Image-->\n<div class=\"header\">\n    <img class=\"header__image rounded-circle\" *ngIf=\"!resultIs && !tieGame\" src=\"./assets/Image/avator1.png\" hspace=\"20\" width=\"5%\" height=auto [ngClass]=\"{'border border-success': plName}\">\n    <img class=\"header__image rounded-circle\" *ngIf=\"!resultIs && !tieGame\" src=\"./assets/Image/avator2 .png\" hspace=\"20\" width=\"5%\" height=auto [ngClass]=\"{'border border-warning':!plName}\">\n</div>\n\n<!-- Card -->\n<section class=\"container\" *ngIf=\"resultIs || tieGame\">\n    <div class=\"flex-center\">\n        <div class=\"column-1 px-2 mb-r\">\n            <div class=\"container__card card text-center border-light mb-3 bg-transparent text-light z-depth-5\" style=\"width:30rem;\">\n                <div class=\"container__card-body \">\n                    <h4 class=\"container__card-header\" *ngIf=\"resultIs \"> Winner : Player {{winnerName}}! </h4>\n                    <h4 class=\"container__card-header\" *ngIf=\"tieGame \">Game is draw!</h4>\n                    <button type=\"button\" class=\"container__card-button btn btn-outline-light\" (click)=\"newGame() \">New Game</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</section>\n\n<!-- Card -->\n\n<main class=\"block\" *ngIf=\"!resultIs && !tieGame \">\n    <app-tboard class=\"block__tboard\" *ngFor=\"let val of playBoard; let i=index \" [value]=\"val \" (click)=\"enterVal(i) \">\n    </app-tboard>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tboard/tboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tboard/tboard.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"button near-moon-gradient z-depth-5\" *ngIf=\"value == 'X'\">{{ value }}</button>\n<button class=\"button sunny-morning-gradient z-depth-5\" *ngIf=\"value == 'O'\">{{ value }}</button>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainboard/mainboard.component */ "./src/app/mainboard/mainboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instruction/instruction.component */ "./src/app/instruction/instruction.component.ts");






const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], },
    { path: 'play', component: _mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_3__["MainboardComponent"], },
    { path: 'instruction', component: _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_5__["InstructionComponent"], },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _mainboard_mainboard_component__WEBPACK_IMPORTED_MODULE_3__["MainboardComponent"], _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_5__["InstructionComponent"]];


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".view {\n  height: 100vh !important;\n  background: linear-gradient(to right, #FC466B, #3F5EFB);\n}\n\n@media (max-width: 740px) {\n  .full-height,\n.full-height body,\n.full-height header,\n.full-height header .view {\n    height: 700px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGlja3BvbnJhai9EZXNrdG9wL1RUVFBsYXkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsdURBQUE7QUNDSjs7QURFQTtFQUNJOzs7O0lBSUksYUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZDNDY2QiwgIzNGNUVGQik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xuICAgIC5mdWxsLWhlaWdodCxcbiAgICAuZnVsbC1oZWlnaHQgYm9keSxcbiAgICAuZnVsbC1oZWlnaHQgaGVhZGVyLFxuICAgIC5mdWxsLWhlaWdodCBoZWFkZXIgLnZpZXcge1xuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIH1cbn0iLCIudmlldyB7XG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkM0NjZCLCAjM0Y1RUZCKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIC5mdWxsLWhlaWdodCxcbi5mdWxsLWhlaWdodCBib2R5LFxuLmZ1bGwtaGVpZ2h0IGhlYWRlcixcbi5mdWxsLWhlaWdodCBoZWFkZXIgLnZpZXcge1xuICAgIGhlaWdodDogNzAwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");



let AppComponent = class AppComponent {
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_route_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tboard_tboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tboard/tboard.component */ "./src/app/tboard/tboard.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _tboard_tboard_component__WEBPACK_IMPORTED_MODULE_8__["TboardComponent"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container__header {\n  letter-spacing: 5px;\n}\n\n.container__line {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGlja3BvbnJhai9EZXNrdG9wL1RUVFBsYXkvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX19oZWFkZXIge1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5jb250YWluZXJfX2xpbmUge1xuICAgIHdpZHRoOiA5MHB4O1xufSIsIi5jb250YWluZXJfX2hlYWRlciB7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5jb250YWluZXJfX2xpbmUge1xuICB3aWR0aDogOTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animations */ "./src/app/route-animations.ts");



let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        animations: [_route_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"]],
        host: { '[@slideInOutAnimation]': '' },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/instruction/instruction.component.scss":
/*!********************************************************!*\
  !*** ./src/app/instruction/instruction.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  padding-top: 200px;\n  padding-left: 200px;\n  line-height: 30px;\n  letter-spacing: 3px;\n}\n\n@media (max-width: 740px) {\n  .container {\n    padding-left: 5px;\n    padding-right: 5px;\n    letter-spacing: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGlja3BvbnJhai9EZXNrdG9wL1RUVFBsYXkvc3JjL2FwcC9pbnN0cnVjdGlvbi9pbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaW5zdHJ1Y3Rpb24vaW5zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW5zdHJ1Y3Rpb24vaW5zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgfVxuICAgIH0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/instruction/instruction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/instruction/instruction.component.ts ***!
  \******************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animations */ "./src/app/route-animations.ts");



let InstructionComponent = class InstructionComponent {
};
InstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-instruction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./instruction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html")).default,
        animations: [_route_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"]],
        host: { '[@slideInOutAnimation]': '' },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./instruction.component.scss */ "./src/app/instruction/instruction.component.scss")).default]
    })
], InstructionComponent);



/***/ }),

/***/ "./src/app/mainboard/mainboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/mainboard/mainboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*Header style*/\n.header {\n  padding-top: 120px;\n  text-align: center;\n}\n/* Card style*/\n.container__card {\n  width: 250px;\n  height: 250px;\n  padding-top: 80px;\n  margin-left: 150px;\n  margin-top: 150px;\n  color: white;\n}\n.container__card-header {\n  padding-bottom: 40px;\n}\n/*Playboard style*/\n.block {\n  display: grid;\n  grid-template-columns: 150px 150px 150px;\n  grid-gap: 5px;\n  justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 80px;\n}\n.block__tboard {\n  border: 0.5px solid lightgrey;\n  height: 150px;\n}\n@media (max-width: 740px) {\n  .container__card {\n    display: inline-block;\n    width: 100%;\n    margin-right: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGlja3BvbnJhai9EZXNrdG9wL1RUVFBsYXkvc3JjL2FwcC9tYWluYm9hcmQvbWFpbmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluYm9hcmQvbWFpbmJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRElBLGNBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0E7RUFDSSxvQkFBQTtBQ0ZKO0FETUEsa0JBQUE7QUFFQTtFQUNJLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNKSjtBRE9BO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0FDSko7QURPQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbmJvYXJkL21haW5ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qSGVhZGVyIHN0eWxlKi9cblxuLmhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDEyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4vKiBDYXJkIHN0eWxlKi9cblxuLmNvbnRhaW5lcl9fY2FyZCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lcl9fY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5cbi8qUGxheWJvYXJkIHN0eWxlKi9cblxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMTUwcHggMTUwcHg7XG4gICAgZ3JpZC1nYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmJsb2NrX190Ym9hcmQge1xuICAgIGJvcmRlcjogLjVweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gICAgLmNvbnRhaW5lcl9fY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XG4gICAgfVxufSIsIi8qSGVhZGVyIHN0eWxlKi9cbi5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ2FyZCBzdHlsZSovXG4uY29udGFpbmVyX19jYXJkIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyX19jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4vKlBsYXlib2FyZCBzdHlsZSovXG4uYmxvY2sge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDE1MHB4IDE1MHB4O1xuICBncmlkLWdhcDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4uYmxvY2tfX3Rib2FyZCB7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmV5O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgLmNvbnRhaW5lcl9fY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/mainboard/mainboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mainboard/mainboard.component.ts ***!
  \**************************************************/
/*! exports provided: MainboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainboardComponent", function() { return MainboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../route-animations */ "./src/app/route-animations.ts");



let MainboardComponent = class MainboardComponent {
    constructor() { }
    // Initialize values
    ngOnInit() {
        this.newGame();
    }
    newGame() {
        this.playerIsnext = true;
        this.playBoard = Array(9).fill(null);
        this.resultIs = null;
        this.plName = true;
        this.gameOver = false;
        this.tieGame = null;
        this.winName = true;
    }
    // Get next player, player name and winner
    get valueOf() { return this.playerIsnext ? 'X' : 'O'; }
    get playerName() { return this.plName ? '1' : '2'; }
    get winnerName() { return this.winName ? '1' : '2'; }
    // Check the playboard array created and if filled stop the game
    // else continue with next player
    enterVal(idx) {
        if (!this.gameOver) {
            if (!this.playBoard[idx]) {
                this.playBoard.splice(idx, 1, this.valueOf);
                this.playerIsnext = !this.playerIsnext;
                this.plName = !this.plName;
            }
        }
        this.resultIs = this.selectWinner();
        this.winName = !this.plName;
    }
    // Check the game algorithm to get the result
    selectWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const line of lines) {
            if (this.playBoard[line[0]] === this.playBoard[line[1]] &&
                this.playBoard[line[1]] === this.playBoard[line[2]] &&
                this.playBoard[line[0]] !== null) {
                this.gameOver = true;
                return this.playBoard[line[0]];
            }
        }
        //Check for Tie
        let chkTie = 0;
        this.playBoard.forEach((e) => { chkTie += (e !== null ? 1 : 0); });
        if (chkTie === 9) {
            this.gameOver = true;
            this.tieGame = 'tie';
        }
        return null;
    }
};
MainboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mainboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mainboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mainboard/mainboard.component.html")).default,
        animations: [_route_animations__WEBPACK_IMPORTED_MODULE_2__["slideInOutAnimation"]],
        host: { '[@slideInOutAnimation]': '' },
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mainboard.component.scss */ "./src/app/mainboard/mainboard.component.scss")).default]
    })
], MainboardComponent);



/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: slideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInOutAnimation", function() { return slideInOutAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const slideInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOutAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: '-400%', }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ right: 0 }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ left: '-400%', }))
    ])
]);


/***/ }),

/***/ "./src/app/tboard/tboard.component.scss":
/*!**********************************************!*\
  !*** ./src/app/tboard/tboard.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 100%;\n  height: 100%;\n  font-family: \"Courier New\", Courier, monospace;\n  color: white;\n  font-size: 5em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJ0aGlja3BvbnJhai9EZXNrdG9wL1RUVFBsYXkvc3JjL2FwcC90Ym9hcmQvdGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90Ym9hcmQvdGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGJvYXJkL3Rib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNWVtICFpbXBvcnRhbnQ7XG59IiwiYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNWVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/tboard/tboard.component.ts":
/*!********************************************!*\
  !*** ./src/app/tboard/tboard.component.ts ***!
  \********************************************/
/*! exports provided: TboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TboardComponent", function() { return TboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TboardComponent = class TboardComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TboardComponent.prototype, "value", void 0);
TboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tboard/tboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tboard.component.scss */ "./src/app/tboard/tboard.component.scss")).default]
    })
], TboardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karthickponraj/Desktop/TTTPlay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);