const joi = require("joi");

const schema = joi.object({
    name: joi.string().min(2).required().messages({
        "string.empty": "Name is required",
        'string.min': 'This field is required, please, introduce a email with a minimum of 2 letters.',     
        "any.required": "Name is required",
    }),
    description: joi.string().required().messages({
        "string.empty": "The field 'description' is required, please enter it",
        "any.required": "The field 'description' is required, please enter it",
    }),
    photo: joi.array().items(joi.string().required().uri().messages({
        'string.empty': 'Photo is required',
        'string.uri': 'Photo must be a valid URL',
        'any.required': 'Photo is required',
        })),
    price: joi.number().min(0).required().messages({
        "number.base": "The field 'price' must be a number",
        "number.empty": "The field 'price' is required, please enter it",
        "any.required": "The field 'price' is required, please enter it",
        "number.min": "The field 'price' must be greater than or equal to 0",
    }),
    video: joi.string().required().uri().messages({
        'string.empty': 'Video is required',
        'string.uri': 'Video must be a valid URL',
        'any.required': 'Video is required',
        }),
    date: joi.date().required().messages({
        "date.base": "The field 'date' must be a date",
        "date.empty": "The field 'date' is required, please enter it",
        "any.required": "The field 'date' is required, please enter it",
    }),
    category:joi.array().items(joi.string()),
    rate: joi.array(),
    buyed: joi.any()
    
});

module.exports = schema;    