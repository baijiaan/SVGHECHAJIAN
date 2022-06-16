<template>
  <div>
    <el-input v-model="input" placeholder="Please input" />
    <el-button @click="search()">点击过滤</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="naming" label="Date" width="180" />
      <el-table-column prop="sex" label="Name" width="180" />
      <el-table-column prop="wordnum" label="Address" />
    </el-table>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";

const input = ref("");
const tableData = ref([]);
let arr = ref([]);

// 封装函数方便复用使用
const reuseFn = () => {
  return axios({
    url: "http://api.tianapi.com/cname/index",
    method: "POST",
    params: {
      key: "f2367c2483a2bc11dfe52e61c607d266",
      sex: 3,
      wordnum: 3,
      num: 50,
      word: "白",
    },
  }).then((res) => {
    // console.log(res.data.newslist);
    tableData.value = res.data.newslist;
    arr.value = res.data.newslist;
  });
};
onMounted(() => {
  // 页面dom加载完成后调用函数 给页面展示数组赋值
  reuseFn();
});
// 搜索事件
const search = () => {
  if (input.value != "") {
    let time_tableData = tableData.value.filter((item) => {
      return item.naming === input.value;
    });
    tableData.value = time_tableData;
    if (time_tableData.length === 0) {
      ElMessage({
        message: "您所输入的字段没有匹配的请您重新输入",
        type: "success",
      });
    }
  }
};

watch(input, (newValue) => {
  if (newValue === "".trim()) {
    // reuseFn();
    console.log("123");
    tableData.value = arr.value;
  } else if (arr.value.some((item) => item.naming === newValue)) {
    if (tableData.value.length === 0) {
      // console.log("????");
      tableData.value = arr.value;

      search();
    }
  }
});
</script>
<style lang="scss" scoped></style>
