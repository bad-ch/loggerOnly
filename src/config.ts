import { Module } from "./dto";
import { Level } from "./level";

export class Config {

    public logLevel: Level = Level.DEBUG
    public timeStamp: boolean = true;
    public timeStampFormat: string = 'dd.MM.yyyy hh:mm:ss ms'

    public levelStyle : { [level in Level]: string } = {
        [Level.DEBUG]: "color: #9C27B0;",
        [Level.LOG]: "color: #616161;",
        [Level.INFO]: "color: #1976D2;",
        [Level.WARN]: "color: #FF5722;",
        [Level.ERROR]: "color: #EF5350; font-weight: bold;",
        [Level.FATAL]: "color: #C62828; font-weight: bold;"
    };

    public modules: Array<Module> = [
        { name: 'Global', css: 'background: #7CB342; color: white; font-weight: bold;'},
        { name: 'Modul1', css: 'background: #43A047; color: white; font-weight: bold;'}
    ]

    public GetMaxLength(): number{
        return Math.max(...this.modules.map(x => x.name.length));
    }
}