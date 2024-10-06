import { Config } from "./config";
import {Level} from "./level";

export class Display {

    static msg(originalReference: Console,
               message: string,
               level: Level,
               moduleName: string,
               config: Config) {

        if(level > config.logLevel)
        {
            // suppress level
            return;
        }

        if(!moduleName)
        {
            moduleName = config.modules[0].name
        }

        const diff = config.GetMaxLength() - moduleName.length;
        if (diff > 0) {
            for (let i = 0; i < diff; i++) {
                moduleName += ' ';
            }
        }

        let ts = ''
        if(config.timeStamp)
        {
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
            case Level.INFO:
                originalReference.info.apply(console, params);
                break;
            case Level.DEBUG:
                originalReference.debug.apply(console, params);
                break;
            case Level.LOG:
                originalReference.log.apply(console, params);
                break;
            case Level.WARN:
                originalReference.warn.apply(console, params);
                break;
            case Level.ERROR:
                originalReference.error.apply(console, params);
                break;
            case Level.FATAL:
                originalReference.error.apply(console, params);
                break;
        }
    }

    private static getTimeStamp(format: string): string {
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
        .replaceAll('dd', String(this.pad(day,2)))
        .replaceAll('MM', String(this.pad(month,2)))
        .replaceAll('yyyy', String(this.pad(year,4)))
        .replaceAll('hh', String(this.pad(hour,2)))
        .replaceAll('mm', String(this.pad(minutes,2)))
        .replaceAll('ss', String(this.pad(seconds,2)))
        .replaceAll('ms', String(this.pad(ms,4)))
    }

    private static pad(num: number, size: number): string {
        let numStr = num.toString();
        while (numStr.length < size) numStr = "0" + numStr;
        return numStr;
    }
}
