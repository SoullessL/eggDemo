'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home/:id', controller.home.info);
  router.get('/ht', controller.hometwo.index);
  router.post('/home/user', controller.home.user);
};
