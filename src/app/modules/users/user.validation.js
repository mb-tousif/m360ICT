import Joi from "joi";


const userSignInValidation = Joi.object().keys({
  name: Joi.string({
    reportError: () => "Name is required",
  }).alphanum().min(3).max(100).required(),
  password: Joi.string({
    reportError: () => "Password is required",
  }).min(6).required(),
  email: Joi.string({
    reportError: () => "Email is required",
  }).email().required(),
});

const userLoginValidation = Joi.object().keys({
    password: Joi.string({
        reportError: () => "Password is required",
    }).min(6).required(),
    email: Joi.string({
        reportError: () => "Email is required",
    }).email().required(),
});

const userUpdateValidation = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(100).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(6).optional(),
});

export const userJoiValidation = {
    userSignInValidation,
    userLoginValidation,
    userUpdateValidation,
};
    