// 注册一个全局组件
import svgIcon from "./svgIcon.vue";
export default function initSvaIcon(app) {
  console.log(app, "?>/.");
  app.component("svg-icon", svgIcon);
}
const file = require.context("@/icons/svg", false, /\.svg$/);
file.keys().map(file);
