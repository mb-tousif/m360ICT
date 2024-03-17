const handleJoiError = (error) => {
  const errorMessages = error.details.map((detail) => {
    return {
      path: detail.path.join("."),
      message: detail.message,
    };
  });

  return {
    statusCode: 400,
    message: "Validation Error",
    errorMessages,
  };
};

export default handleJoiError;
