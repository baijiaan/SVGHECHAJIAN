// 全局注册自定义指令
const showPermission = {
  mounted(el, binding) {
    // console.log(el, "自定义指定");
    checkoutPermission(el, binding);
  },
  updated(el, binding) {
    // console.log(el, "自定义指定");
    // checkoutPermission(el, binding);
  },
};
const checkoutPermission = (el, binding) => {
  // 全局注册自定义指令 这个是随机颜色
  var color = Math.floor(Math.random() * 1000000);
  console.log(color);
  var img = new Image();
  img.src = binding.vaule;
  console.log(binding.value);
  img.onload = function () {
    el.style.backgroundImage = "url(" + binding.vaule + ")";
  };
};
export default (app) => {
  // console.log(app, "222");
  app.directive("image", showPermission);
};
