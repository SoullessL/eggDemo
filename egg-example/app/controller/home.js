"use strict";

const Controller = require("egg").Controller;

const createRule = {
  username: {
    type: "email"
  }
};

class HomeController extends Controller {
  async index() {
    this.ctx.body = this.ctx.app.cities;
  }

  // 路由的id
  async info() {
    this.ctx.body = `Home Id:${this.ctx.params.id}`;
  }

  async user() {
    this.ctx.logger.info("start userVal");
    try {
      this.ctx.validate(createRule);
      this.ctx.logger.info(this.ctx.request.body);
    } catch (err) {
      this.ctx.logger.error(err.errors);
      this.ctx.response.body = { success: false };
      return;
    }
  }
}

module.exports = HomeController;
