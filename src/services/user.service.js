const RESPONSE_CODES = require("../constants/response.constant");
const { BadRequestError, APIError } = require("../utils/error.util");

class UserService {
  constructor() {}

  async GoogleAuthService() {
    try {
    } catch (error) {
      throw APIError.generate();
    }
  }
}

module.exports = UserService;
