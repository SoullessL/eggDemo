"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1521892953314_1825";

  // add your config here
  // 中间件配置
  config.middleware = ["midDemo"];
  config.midDemo = {
    midDemoOption: "midDemoOption Value"
  };

  config.security = {
    domainWhiteList: ["http://localhost:7001"],
    csrf: {
      enable: false,
      headerName: "x-csrf-token",
      ignoreJSON: false
    }
  };

  return config;
};
