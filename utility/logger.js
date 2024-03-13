const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/access.log', level: 'info'}),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});



module.exports = logger;
