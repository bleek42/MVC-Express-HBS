const chalk = require('chalk');
const { createLogger, transports, format } = require('winston');

const config = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
  },

  colors: {
    error: chalk.red,
    warn: chalk.yellowBright,
    info: chalk.cyan,
    http: chalk.magentabright,
    verbose: chalk.green,
    debug: chalk.whiteBright,
  },
};

const eventLogger = createLogger({
  defaultMeta: { service: 'logger-service' },
  levels: config.levels,
  format: format.combine(format.json(), format.colorize(config.colors)),

  transports: [
    new transports.Console({ level: 'error' }),
    new transports.Console({ level: 'warn' }),
    new transports.Console({ level: 'info' }),
    new transports.Console({ level: 'http' }),
    new transports.Console({ level: 'verbose' }),
    new transports.File({ level: 'error', filename: 'err.log' }),
    new transports.File({ level: 'debug', filename: 'debug.log' }),
  ],
});

module.exports = eventLogger;
