const { ValidationError } = require('yup');

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({
      errors: [
        {
          title: 'Validation error',
          details: err.errors,
        },
      ],
    });
  }

  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(status).json({
    errors: [
      {
        title: message,
      },
    ],
  });
};

module.exports = errorHandler;
