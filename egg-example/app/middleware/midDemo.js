// 中间件 demo
module.exports = options => {
  return async function midDemo(ctx, next) {
    ctx.logger.info("中间件测试 start.");
    await next();
    ctx.logger.info("中间件测试 end." + options.midDemoOption);
  };
};
