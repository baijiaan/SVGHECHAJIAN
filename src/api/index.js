import axios from "@/utils/index.js";
// 获取用户列表数据 渲染表格
export const getUser = (data) => {
  return axios.request({
    url: "/user-manage/list",
    method: "GET",
    params: data,
  });
};
