<template>
  <div class="box">
    <div class="title">导出excel</div>
    <svg-icon iconClass="close" className="use" />
    <!-- <svg-icon class="article-create" /> -->
    <el-button @click="exportExcel">导出</el-button>
  </div>
</template>

<script>
import ExportJsonExcel from "js-export-excel";
export default {
  data() {
    return {
      list: {
        getList: [
          {
            id: "1",
            province: "江西",
            city: "赣州",
          },
          {
            id: "2",
            province: "广东",
            city: "深圳",
          },
          {
            id: "3",
            province: "湖南",
            city: "长沙",
          },
          {
            id: "4",
            province: "浙江",
            city: "杭州",
          },
          {
            id: "5",
            province: "河南",
            city: "洛阳",
          },
          {
            id: "6",
            province: "山东",
            city: "青岛",
          },
          {
            id: "7",
            province: "安徽",
            city: "烟台",
          },
        ],
      },
    };
  },
  methods: {
    exportExcel() {
      console.log(123);
      const dataList = this.list.getList;

      let option = {}; //   option代表的就是excel文件

      let dataTable = []; //   dataTable代表excel文件中的数据内容
      if (dataList) {
        for (let i in dataList) {
          let obj = {
            序号: dataList[i].id,
            省份: dataList[i].province,
            城市: dataList[i].city,
          };
          console.log(obj);
          dataTable.push(obj); //   设置excel每列获取的数据源
        }
      }

      option.fileName = "省份城市表"; //excel文件名
      //excel文件数据
      option.datas = [
        {
          //   excel文件的数据源
          sheetData: dataTable,
          //   excel文件sheet的表名
          sheetName: "白家安",
          //   excel文件表头名
          sheetHeader: ["序号", "省份", "城市"],
          //   excel文件列名
          // sheetFilter: ["序号", "省份", "城市"],
        },
      ];
      //   创建ExportJsonExcel实例对象
      let toExcel = new ExportJsonExcel(option);
      //   调用保存方法
      toExcel.saveExcel();
    },
  },
};
</script>

<style></style>
