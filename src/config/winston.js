const appRoot = require("app-root-path");
const winston = require("winston");

const customFormat = winston.format.printf(info => {
  return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const options = {
  file: {
    level: "info",
    format: winston.format.combine(winston.format.timestamp(), customFormat),
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      customFormat
    ),
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false // do not exit on handled exceptions
});

logger.stream = {
  write(message) {
    logger.info(message);
  }
};

module.exports = logger;
