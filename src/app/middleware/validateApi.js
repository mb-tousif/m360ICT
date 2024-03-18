import Joi from 'joi';
import ApiError from '../../shared/ApiError.js';

const validateRequest = (schema) => (req, res, next) => {
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    throw new ApiError(400, error.details[0].message);
  }
  next();
};

export default validateRequest;
