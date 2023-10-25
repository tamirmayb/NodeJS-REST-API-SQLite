const winston = require('winston');
const { format } = require('winston');

const loggerLevel = process.env.LOGGERLEVEL;

const logger = winston.createLogger({
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}` + (info.splat !== undefined ? `${info.splat}` : " "))
    ),
    transports: [ // Add log files as needed in this section
        new (winston.transports.Console)({level: loggerLevel}),
    ]
});
module.exports = logger;
