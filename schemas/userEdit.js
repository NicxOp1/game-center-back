const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(3).messages({
    "string.empty": "name is required",
    "string.min":
      "This field is required, please, introduce a email with a minimum of 3 letters.",
    "any.required": "name is required",
  }),
  lastName: joi.string().required().min(3).messages({
    "string.empty": "lastName is required",
    "string.min":
      "This field is required, please, introduce a email with a minimum of 3 letters.",
    "any.required": "lastName is required",
  }),
  photo: joi.string().required().uri().messages({
    "string.empty": "photo is required",
    "string.uri": "photo must be a valid uri",
    "any.required": "photo is required",
  }),
  age: joi.number().required().min(18).messages({
    "number.empty": "age is required",
    "number.min": "age must be at least 18",
    "any.required": "age is required",
  }),
});

module.exports = schema;
