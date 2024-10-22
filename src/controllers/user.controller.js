const { cookie, validationResult } = require("express-validator");
const CustomResponse = require("../utils/response.util");
const { BadRequestError } = require("../utils/error.util");
const { UserService } = require("../services/index.service");

class UserController {
  constructor() {
    this.response = new CustomResponse();
    this.userService = new UserService();
  }

  async SignupController(req, res) {
    try {
      const userData = req.userData;
      if (!userData) {
        throw BadRequestError.generate("Error authenticating google account");
      } else {
        const result = await this.userService.GoogleAuthService();
        return result
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
