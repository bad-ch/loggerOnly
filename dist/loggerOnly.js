(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("loggerOnly", [], factory);
	else if(typeof exports === 'object')
		exports["loggerOnly"] = factory();
	else
		root["loggerOnly"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build/config.js":
/*!*************************!*\
  !*** ./build/config.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* binding */ Config)
/* harmony export */ });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./build/level.js");

class Config {
    constructor() {
        this.logLevel = _level__WEBPACK_IMPORTED_MODULE_0__.Level.DEBUG;
        this.timeStamp = true;
        this.timeStampFormat = 'dd.MM.yyyy hh:mm:ss ms';
        this.levelStyle = {
            [_level__WEBPACK_IMPORTED_MODULE_0__.Level.DEBUG]: "color: #9C27B0;",
            [_level__WEBPACK_IMPORTED_MODULE_0__.Level.LOG]: "color: #616161;",
            [_level__WEBPACK_IMPORTED_MODULE_0__.Level.INFO]: "color: #1976D2;",
            [_level__WEBPACK_IMPORTED_MODULE_0__.Level.WARN]: "color: #FF5722;",
            [_level__WEBPACK_IMPORTED_MODULE_0__.Level.ERROR]: "color: #EF5350; font-weight: bold;",
            [_level__WEBPACK_IMPORTED_MODULE_0__.Level.FATAL]: "color: #C62828; font-weight: bold;"
        };
        this.modules = [
            { name: 'Global', css: 'background: #7CB342; color: white; font-weight: bold;' },
            { name: 'Modul1', css: 'background: #43A047; color: white; font-weight: bold;' }
        ];
    }
    GetMaxLength() {
        return Math.max(...this.modules.map(x => x.name.length));
    }
}


/***/ }),

/***/ "./build/display.js":
/*!**************************!*\
  !*** ./build/display.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Display: () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./build/level.js");

class Display {
    static msg(originalReference, message, level, moduleName, config) {
        if (level > config.logLevel) {
            // suppress level
            return;
        }
        if (!moduleName) {
            moduleName = config.modules[0].name;
        }
        const diff = config.GetMaxLength() - moduleName.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                moduleName += ' ';
            }
        }
        let ts = '';
        if (config.timeStamp) {
            ts = `${this.getTimeStamp(config.timeStampFormat)} `;
        }
        let a1 = `${ts}%c ${moduleName} %c ${message}`;
        let a2 = config.modules.find(x => x.name === moduleName).css;
        let a3 = config.levelStyle[level];
        const params = [];
        params.unshift(a3);
        params.unshift(a2);
        params.unshift(a1);
        switch (level) {
            case _level__WEBPACK_IMPORTED_MODULE_0__.Level.INFO:
                originalReference.info.apply(console, params);
                break;
            case _level__WEBPACK_IMPORTED_MODULE_0__.Level.DEBUG:
                originalReference.debug.apply(console, params);
                break;
            case _level__WEBPACK_IMPORTED_MODULE_0__.Level.LOG:
                originalReference.log.apply(console, params);
                break;
            case _level__WEBPACK_IMPORTED_MODULE_0__.Level.WARN:
                originalReference.warn.apply(console, params);
                break;
            case _level__WEBPACK_IMPORTED_MODULE_0__.Level.ERROR:
                originalReference.error.apply(console, params);
                break;
            case _level__WEBPACK_IMPORTED_MODULE_0__.Level.FATAL:
                originalReference.error.apply(console, params);
                break;
        }
    }
    static getTimeStamp(format) {
        const date = new Date();
        const [month, day, year] = [
            date.getMonth() + 1,
            date.getDate(),
            date.getFullYear(),
        ];
        const [hour, minutes, seconds, ms] = [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        ];
        return format
            .replaceAll('dd', String(this.pad(day, 2)))
            .replaceAll('MM', String(this.pad(month, 2)))
            .replaceAll('yyyy', String(this.pad(year, 4)))
            .replaceAll('hh', String(this.pad(hour, 2)))
            .replaceAll('mm', String(this.pad(minutes, 2)))
            .replaceAll('ss', String(this.pad(seconds, 2)))
            .replaceAll('ms', String(this.pad(ms, 4)));
    }
    static pad(num, size) {
        let numStr = num.toString();
        while (numStr.length < size)
            numStr = "0" + numStr;
        return numStr;
    }
}


/***/ }),

/***/ "./build/dto.js":
/*!**********************!*\
  !*** ./build/dto.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./build/level.js":
/*!************************!*\
  !*** ./build/level.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Level: () => (/* binding */ Level)
/* harmony export */ });
/**
 * Supported levels of logging
 */
var Level;
(function (Level) {
    Level[Level["DEBUG"] = 5] = "DEBUG";
    Level[Level["LOG"] = 4] = "LOG";
    Level[Level["INFO"] = 3] = "INFO";
    Level[Level["WARN"] = 2] = "WARN";
    Level[Level["ERROR"] = 1] = "ERROR";
    Level[Level["FATAL"] = 0] = "FATAL";
})(Level || (Level = {}));


/***/ }),

/***/ "./build/logger.js":
/*!*************************!*\
  !*** ./build/logger.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ "./build/level.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./build/display.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./build/config.js");



class Logger {
    constructor(config) {
        this._consoleOriginal = window.console;
        if (!config) {
            this._config = new _config__WEBPACK_IMPORTED_MODULE_2__.Config();
        }
        else {
            this._config = new _config__WEBPACK_IMPORTED_MODULE_2__.Config();
            if (config.logLevel) {
                this._config.logLevel = config.logLevel;
            }
            if (config.levelStyle) {
                this._config.levelStyle = config.levelStyle;
            }
            if (config.modules) {
                this._config.modules = config.modules;
            }
            if (config.timeStamp) {
                this._config.timeStamp = config.timeStamp;
            }
            if (config.timeStampFormat) {
                this._config.timeStampFormat = config.timeStampFormat;
            }
        }
    }
    originalInstance() {
        return this._consoleOriginal;
    }
    debug(message, moduleName) {
        return this._logMessage(message, _level__WEBPACK_IMPORTED_MODULE_0__.Level.DEBUG, moduleName);
    }
    log(message, moduleName) {
        return this._logMessage(message, _level__WEBPACK_IMPORTED_MODULE_0__.Level.LOG, moduleName);
    }
    error(message, moduleName) {
        return this._logMessage(message, _level__WEBPACK_IMPORTED_MODULE_0__.Level.ERROR, moduleName);
    }
    info(message, moduleName) {
        return this._logMessage(message, _level__WEBPACK_IMPORTED_MODULE_0__.Level.INFO, moduleName);
    }
    warn(message, moduleName) {
        return this._logMessage(message, _level__WEBPACK_IMPORTED_MODULE_0__.Level.WARN, moduleName);
    }
    fatal(message, moduleName) {
        return this._logMessage(message, _level__WEBPACK_IMPORTED_MODULE_0__.Level.FATAL, moduleName);
    }
    _logMessage(message, level, moduleName) {
        _display__WEBPACK_IMPORTED_MODULE_1__.Display.msg(this._consoleOriginal, message, level, moduleName, this._config);
        return this;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./build/index.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_3__.Config),
/* harmony export */   Display: () => (/* reexport safe */ _display__WEBPACK_IMPORTED_MODULE_0__.Display),
/* harmony export */   Level: () => (/* reexport safe */ _level__WEBPACK_IMPORTED_MODULE_1__.Level),
/* harmony export */   Logger: () => (/* reexport safe */ _logger__WEBPACK_IMPORTED_MODULE_2__.Logger)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./build/display.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./build/level.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./build/logger.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./build/config.js");
/* harmony import */ var _dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dto */ "./build/dto.js");
/**
 * @file Automatically generated by barrelsby.
 */






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=loggerOnly.js.map