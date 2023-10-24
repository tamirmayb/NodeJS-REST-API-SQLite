const winston = require('winston');
const { createLogger, format, transports } = require('winston');

const loggerLevel = process.env.LOGGERLEVEL;

const logger = winston.createLogger({
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : " "))
    ),
    transports: [
        new (winston.transports.Console)({level: loggerLevel}),
    ]
});
module.exports = logger;
