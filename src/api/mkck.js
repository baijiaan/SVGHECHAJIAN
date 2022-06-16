import Mock from "mockjs";

import home from "./mockServeData/home.js";
// 要拦截的请求 第二个参数返回的值
Mock.mock("/api/home.getData", home.getStatisticalData());
