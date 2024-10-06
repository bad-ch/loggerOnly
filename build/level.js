/**
 * Supported levels of logging
 */
export var Level;
(function (Level) {
    Level[Level["DEBUG"] = 5] = "DEBUG";
    Level[Level["LOG"] = 4] = "LOG";
    Level[Level["INFO"] = 3] = "INFO";
    Level[Level["WARN"] = 2] = "WARN";
    Level[Level["ERROR"] = 1] = "ERROR";
    Level[Level["FATAL"] = 0] = "FATAL";
})(Level || (Level = {}));
