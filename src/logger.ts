import { Level } from "./level";
import { Display } from "./display";
import { Config } from "./config";

export class Logger {
  private _consoleOriginal: Console;
  private _config: Config;

  public config(): Config {
    return this._config;
  }

  private _logLevelAsString: { [level in Level]: string } = {
    [Level.DEBUG]: 'Debug',
    [Level.LOG]: 'Log',
    [Level.INFO]: 'Info',
    [Level.WARN]: 'Warning',
    [Level.ERROR]: 'Error',
    [Level.FATAL]: 'Fatal'
  };

  constructor(config: Config | undefined) {
    this._consoleOriginal = window.console;

    if (!config) {
      this._config = new Config();
    } else {
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

  originalInstance(): Console {
    return this._consoleOriginal;
  }

  debug(message: string, moduleName: string) {
    return this._logMessage(message, Level.DEBUG, moduleName);
  }

  log(message: string, moduleName: string) {
    return this._logMessage(message, Level.LOG, moduleName);
  }

  error(message: string, moduleName: string) {
    return this._logMessage(message, Level.ERROR, moduleName);
  }

  info(message: string, moduleName: string) {
    return this._logMessage(message, Level.INFO, moduleName);
  }

  warn(message: string, moduleName: string) {
    return this._logMessage(message, Level.WARN, moduleName);
  }

  fatal(message: string, moduleName: string) {
    return this._logMessage(message, Level.FATAL, moduleName);
  }

  logLevel(): string {
    return this._logLevelAsString[this._config.logLevel]
  }

  private _logMessage(message: string, level: Level, moduleName: string) {
    Display.msg(this._consoleOriginal, message, level, moduleName, this._config);
    return this;
  }
}
