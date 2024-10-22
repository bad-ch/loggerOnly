import { Module } from "./dto";
import { Level } from "./level";
export declare class Config {
    logLevel?: Level;
    timeStamp?: boolean;
    timeStampFormat?: string;
    levelStyle?: {
        [level in Level]: string;
    };
    modules?: Array<Module>;
    GetMaxLength?(): number;
}
