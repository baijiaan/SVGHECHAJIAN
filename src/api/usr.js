import axios from "@/utils/request.js";

// 文章列表
export const Thearticlelists = (data) => {
  return axios.request({
    url: "/articles",
    method: "GET",
    params: data,
  });
};
