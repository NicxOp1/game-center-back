const joi = require("joi");

const schema = joi.object({
    date: joi.date().required(),
    gameId: joi.any(),
    userId: joi.any(),
    comment: joi.string().required().min(3).messages({
        'string.min': 'The comment must have at least 3 characters',
    }),
});

module.exports = schema;