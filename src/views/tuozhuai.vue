<template>
  <el-table :data="tableData" ref="itxst" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
import Sortable from "sortablejs";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const itxst = ref(null);
    onMounted(() => {
      // console.log(itxst);
      // console.log(itxst.value);
      tuozhuai();
    });
    const tuozhuai = () => {
      // 获取到的是一个数组 所以需要取0
      const el = itxst.value.$el.querySelectorAll(
        ".el-table__body-wrapper > table > tbody"
      );
      console.log(el[0]);
      Sortable.create(el[0], {
        // 拖动动画
        animation: 1000,
        // 延迟1秒允许拖动
        // delay: 1000,
        // 拖动样式
        ghostClass: "drag",
        onEnd(evt) {
          // console.log(evt);
          alert(evt);
        },
      });
    };
    const tableData = ref([
      {
        date: "1",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "3",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "4",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
    return {
      itxst,
      tableData,
    };
  },
};
</script>
<style lang="scss" scoped>
:deep(.drag) {
  background-color: aqua !important;
  color: red !important;
}
</style>
