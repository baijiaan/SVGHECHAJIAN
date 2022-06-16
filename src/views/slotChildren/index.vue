<template>
  <div>
    <!-- 需要使用slot用于显示父组件显示的内容
      如果不确定父组件是否显示值 也可以在slot中写写值 如果父组件传值可以被覆盖 没写值则显示slot的默认值
    -->
    <!--  匿名插槽 -->
    <slot>白家安</slot>
    <hr />
    <b>下边是具名插槽</b>
    <!-- 具名插槽 -->
    <div>
      <div>我希望头部内容可以放在这里:<slot name="header"></slot></div>
      <div>我希望内容放在这里:<slot></slot></div>
      <div>我希望尾部放在这里:<slot name="fotter"></slot></div>
    </div>
  </div>

  <!-- 作用域插槽 -->
  <div>
    <!-- 将子组件数据传给父组件 (通过插槽) -->
    <slot name="data" v-for="item in data" :data="item"> </slot>
  </div>
</template>

<script>
// import Slot from "../Slot.vue";
export default {
  setup() {
    const data = [{ name: "白家安" }, { name: "中国人" }, { name: "18" }];
    return {
      data,
    };
  },
  // components: { Slot },
};
</script>
<style lang="scss" scoped></style>
