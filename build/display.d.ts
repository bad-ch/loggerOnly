import { Config } from "./config";
import { Level } from "./level";
export declare class Display {
    static msg(originalReference: Console, message: string, level: Level, moduleName: string, config: Config): void;
    private static getTimeStamp;
    private static pad;
}
