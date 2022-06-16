<template>
  <div>
    <el-button @click="getUserExcel">点击上传数据</el-button>
    <el-tag type="success">{{ filesName }}</el-tag>
    <input type="file" class="input" ref="inp" @change="user($event)" />
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="data" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="role" label="角色"></el-table-column>
      <el-table-column label="图片">
        <template v-slot="{ row }">
          <el-image
            style="width: 100px; height: 100px"
            :src="row.img"
            :fit="fit"
          ></el-image>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import url from "@/assets/logo.png";
import XLXS from "xlsx";
const inp = ref(null);
const tableData = ref([]);
const filesName = ref("");
const getUserExcel = () => {
  // 触发input点击事件
  inp.value.click();
  // console.log(inp.value);
};
// 选中文件触发事件
const user = (e) => {
  // console.log(e);
  const files = e.target.files;
  // console.log(files);
  filesName.value = files[0].name;
  // 定义一个读取对象
  const fileReader = new FileReader();
  console.log(fileReader.onload, "load");
  // 调用数据
  fileReader.onload = (ev) => {
    console.log(ev, "????");
    const data = ev.target.result;
    const workbook = XLXS.read(data, { type: "binary" });

    // 获取到选中文件的第一张表的名称
    const wsname = workbook.SheetNames[1];
    console.log(wsname, "12312312");
    const ws = XLXS.utils.sheet_to_json(workbook.Sheets[wsname]);
    console.log(ws, "123123");
    const list = [];
    ws.forEach((item) => {
      list.push({
        data: item["管控指标"],
        name: item["联系方式"],
        role: item["角色"],
        img: url,
      });
    });
    console.log(list);
    tableData.value = list;
  };
  // 异步读取数据
  fileReader.readAsBinaryString(files[0]);
};
</script>
<style lang="scss" scoped>
.input {
  display: none;
}
</style>
