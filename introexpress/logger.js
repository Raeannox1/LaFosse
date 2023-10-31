const logger = (request, respond, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
};

module.exports = {
    logger
};
