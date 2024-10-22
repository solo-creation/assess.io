const ERROR_CODES = Object.freeze({
  OK: 200,
  BAD_REQUEST: 400,
  UN_AUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
  BAD_GATEWAY: 502,
});

module.exports = ERROR_CODES;
