
const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      const validationOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
      };

      const { body, query, params, cookies } = req;
      const validationResult = schema.validate(
        { body, query, params, cookies },
        validationOptions
      );

      req.validatedData = validationResult.value;
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
