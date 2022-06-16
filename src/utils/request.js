import axios from "axios";

// 封装axios
const server = axios.create({
  // 后台配置代理
  timeout: 5000, // 超时时间
  baseURL: "/api",
});

export default server;
