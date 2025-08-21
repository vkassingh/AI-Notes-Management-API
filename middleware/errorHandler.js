// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error('Centralized Error:', err.stack || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;
