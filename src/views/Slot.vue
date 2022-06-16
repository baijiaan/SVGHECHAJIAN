<template>
  <div>
    <!-- 这就是匿名插槽 -->
    <slot-children>
      <b>我是匿名插槽</b><br />
      123123123
      <div>niuhaoa</div>
      <h1>hhhhhhh</h1>
    </slot-children>
    <hr />
    <!-- 具名插槽 -->
    <slot-children>
      <!-- 注意具名插槽时一定要加上template标签  通过使用v-slot绑定子组件的name属性
      实现想让内容放哪里 内容就渲染哪里 注意v-slot也可以使用#代替简写-->
      <template v-slot:header
        ><span style="color: red">我是头部的内容</span></template
      >
      <!-- 注意 如果不写template 以及v-slot的话 会成为匿名插槽 就是子组件哪里有slot就将默认内容显示在哪 default代表默认 也就是成为了匿名插槽 -->
      <template v-slot:default
        ><span style="color: red">我是主体的内容</span></template
      >
      <template #fotter
        ><span style="color: red">我是尾部的内容</span></template
      >
    </slot-children>
  </div>
  <hr />
  <b>下边是作用域插槽</b>
  <!-- 作用:可以在父组件中使用子组件的数据 也就是带数据的插槽 -->
  <slot-children>
    <!-- 这里的v-slot:data 这里的data是子组件定义的name名 slotProps是接收的数据
     也可以使用#简写代替v-slot
    -->
    <template v-slot:data="item">
      <!-- <ul v-for="(item, index) in slotProps.data" :key="index">
        <li>{{ item.name + ":" + index }}</li>
      </ul> -->
      <div>{{ item }}</div>
    </template>
  </slot-children>
  <!-- 展示作用域的不同渲染 -->
</template>
<script>
import slotChildren from "./slotChildren/index.vue";
export default {
  setup() {
    return {
      // slotChildren,
    };
  },
  components: {
    // ,
    slotChildren,
  },
};
</script>
<style lang="scss" scoped></style>
