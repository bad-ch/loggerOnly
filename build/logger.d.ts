import { Config } from "./config";
export declare class Logger {
    private _consoleOriginal;
    private _config;
    config(): Config;
    private _logLevelAsString;
    constructor(config: Config | undefined);
    originalInstance(): Console;
    debug(message: string, moduleName: string): this;
    log(message: string, moduleName: string): this;
    error(message: string, moduleName: string): this;
    info(message: string, moduleName: string): this;
    warn(message: string, moduleName: string): this;
    fatal(message: string, moduleName: string): this;
    logLevel(): string;
    private _logMessage;
}
