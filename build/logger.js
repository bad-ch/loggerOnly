import { Level } from "./level";
import { Display } from "./display";
import { Config } from "./config";
export class Logger {
    constructor(config) {
        this._consoleOriginal = window.console;
        if (!config) {
            this._config = new Config();
        }
        else {
            this._config = new Config();
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
        return this._logMessage(message, Level.DEBUG, moduleName);
    }
    log(message, moduleName) {
        return this._logMessage(message, Level.LOG, moduleName);
    }
    error(message, moduleName) {
        return this._logMessage(message, Level.ERROR, moduleName);
    }
    info(message, moduleName) {
        return this._logMessage(message, Level.INFO, moduleName);
    }
    warn(message, moduleName) {
        return this._logMessage(message, Level.WARN, moduleName);
    }
    fatal(message, moduleName) {
        return this._logMessage(message, Level.FATAL, moduleName);
    }
    _logMessage(message, level, moduleName) {
        Display.msg(this._consoleOriginal, message, level, moduleName, this._config);
        return this;
    }
}
