// 从 app 实例上获取
module.exports = app => {
    return class HomeTwoController extends app.Controller {
        // implement
        async index() {
            this.ctx.body = app.foo('123') + app.appExtendFunction('extendFcuntion');
        }
    };
};
