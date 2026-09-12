const responseObj = (status, success, message, data) => {
  return {
    status,
    success,
    message,
    data,
  };
};

module.exports = responseObj;
