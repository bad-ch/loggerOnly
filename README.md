# Main features:

- set log levels
- define modules
- set css styles for console output
- replace current console
- add time stamps and set format

# Examples Javascript

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Demo typescript-logger</title>
    
        <script src="dist/loggerOnly.js"></script>
    </head>
    <body>
    <h1>Demo</h1>
    <h3>Open the console to see the log. (Chromes by default hides the debug logs)</h3>
    <button onclick="runLogs()">Run logs</button>
    <script type="text/javascript">
        //import {Logger, Display, Level} from Loggi;
    
        function runLogs(){
            const logger = new loggerOnly.Logger({logLevel: 5, timeStampFormat: 'dd.MM.yyyy hh:mm:ss'})
    
            window.console = logger;
    
            console.debug('Test ori debug')
            console.log('Test ori log')
            console.info('Test ori info')
            console.warn('Test ori warn')
            console.error('Test ori error')
            console.fatal('Test ori fatal')
    
            logger.debug('Test ori debug')
            logger.log('Test ori log', 'Modul1')
            logger.info('Test ori info')
            logger.warn('Test ori warn')
            logger.error('Test ori error')
            logger.fatal('Test ori fatal')
    
            window.console = logger.originalInstance();
            delete logger;
    
            console.log('Test console after')
        }
      </script>
    </body>
    </html>

# Example Angular

    import { Component } from '@angular/core';
    import { Level, Logger } from 'loggeronly';
    
    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
    })
    export class AppComponent {
      constructor(private progressService: ProgressService, private userInfoService: UserInfoService) {
        this.userInfoService.setCurrentUserInfo();
         (window.console as any) = new Logger({
           logLevel: Level.ERROR,
           timeStampFormat: 'dd.MM.yyyy hh:mm:ss',
           levelStyle: {
             [Level.DEBUG]: 'color: #9C27B0;',
             [Level.LOG]: 'color: #616161;',
             [Level.INFO]: 'color: #1976D2;',
             [Level.WARN]: 'color: #FF5722;',
             [Level.ERROR]: 'color: #EF5350; font-weight: bold;',
             [Level.FATAL]: 'color: #C62828; font-weight: bold;',
           },
           timeStamp: false,
           modules: [
             { name: 'Global', css: 'background: #7CB342; color: white; font-weight: bold;' },
             { name: 'Modul1', css: 'background: #43A047; color: white; font-weight: bold;' },
           ],
         });
      }
    }

# Other Topics

- Please have a look to index.html.
- For configuration have a look to config.js