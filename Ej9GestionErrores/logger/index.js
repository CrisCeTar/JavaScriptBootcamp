const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
  //   defaultMeta: { service: 'user-service' },
    transports: [ //<- Todas las acciones que se van a ejecutar cada vez que haya un log.
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

  module.exports = logger;// para exportar el objeto logger

  // const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   };

const logger = require('./logger');//importamos el objeto logger


logger.info("Esto es un mensaje informativo.")
logger.debug("Esto es un mensaje de depuración.")
logger.warn("Esto es un mensaje de advertencia.")
logger.error("Esto es un error.")