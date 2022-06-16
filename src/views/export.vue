<template>
  <div>
    <el-button @click="exportExcel">点击导出数据</el-button>
    <table style="width: 100%; border: 1px solid aqua" border="1">
      <tr>
        <th>姓名</th>
        <td>职责</td>
        <td>id</td>
        <td>id2</td>
        <td>id2</td>
      </tr>
      <tr v-for="item in arr" :key="item">
        <td>{{ item.role }}</td>
        <td>{{ item._id }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.openTime }}</td>
        <td>{{ item.username }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { exportJsonToExcel } from "@/utils/Export.js";
export default {
  setup() {
    const common = {
      姓名: "role",
      职责: "_id",
      标识: "id",
      时间: "openTime",
      内容: "username",
    };
    const arr = [
      {
        role: "村长",
        _id: "61ad1a406248832231775738",
        id: "612710a9ec87aa543c9c3420",
        openTime: "1433088000000",
        username: "super-admin",
      },
      {
        role: "村长1",
        _id: "61ad1a406248832231775739",
        id: "612710a9ec87aa543c9c3421",
        username: "admin",
        openTime: "1559318400000",
      },
      {
        role: "村长2",
        _id: "61ad1a40624883223177573a",
        id: "612710a9ec87aa543c9c3422",
        username: "test",
        openTime: "1633017600000",
      },
      {
        role: "村长3",
        _id: "61adfe00624883223177584c",
        username: "郭爱玲",
        openTime: "NaN-NaN-NaN",
        id: "4abd82ed-028c-4d05-8d37-f053d4c9a7c6",
      },
      {
        role: "村长4",
        _id: "61adfe00624883223177584f",
        username: "李得荣",
        openTime: "NaN-NaN-NaN",
        id: "bca96129-ea36-4a53-859b-a448b96e7754",
      },
    ];
    const fn = (data) => {
      return data.map((item) => {
        return Object.keys(common).map((key) => {
          // console.log(key);
          // console.log(item[common[key]]);
          return item[common[key]];
        });
      });
    };
    const exportExcel = () => {
      exportJsonToExcel({
        header: Object.keys(common),
        data: fn(arr),
        filename: "白家安",
        merges: true,
        autoWidth: true,
      });
    };
    // fn(arr);
    console.log(Object.keys(common));
    console.log(fn(arr));
    return {
      arr,
      exportExcel,
    };
  },
};
</script>
<style lang="scss" scoped></style>
