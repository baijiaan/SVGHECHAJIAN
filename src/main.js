import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import directiv from "@/views/directive/Alldirective/index.js";
// import "./icons";
import initSvaIcon from "@/icons/index";
// App.withDirectives("image");
const app = createApp(App);
directiv(app);
initSvaIcon(app);
// 这行代码的意思是在开发环境下使用自己模拟的数据
if (process.env.NODE_ENV === "development") {
  // 拦截
  require("@/api/mkck");
}
app.use(ElementPlus).use(store).use(router).mount("#app");
