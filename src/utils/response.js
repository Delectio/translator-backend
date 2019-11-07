const Response = {
  inputError: (res, message) => {
    res.status(400).send({
      status: 400,
      error: message
    });
  },
  error: (res, status, message) => {
    res.status(status).send({
      status,
      error: message
    });
  },
  success: (res, message) => {
    res.status(200).send({
      status: 200,
      message
    });
  },
};

export default Response;
