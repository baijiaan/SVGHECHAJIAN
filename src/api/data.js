import axios from "@/utils/request.js";

export const getHome = () => {
  return axios.request({
    url: "/home.getData",
    method: "GET",
  });
};
