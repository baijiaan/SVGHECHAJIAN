import axios from "axios";

// 封装axios
const server = axios.create({
  // 后台代理
  timeout: 5000,
  baseURL: "https://api.imooc-admin.lgdsunday.club/api",
});
// 导出封装的axios
export default server;
