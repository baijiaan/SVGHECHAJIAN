<template>
  <el-select
    v-model="value"
    placeholder="Select"
    filterable
    remote
    default-first-option
    :remote-method="querySearch"
    @change="fn"
  >
    <el-option
      v-for="optione in arr"
      :key="optione.item.path"
      :label="optione.item.path"
      :value="optione.item.path"
    >
    </el-option>
  </el-select>
</template>

<script>
import { ref } from "vue";
import Fuse from "fuse.js";
export default {
  setup() {
    const value = ref("");
    console.log(value.value);
    const arr = ref([]);
    const querySearch = (query) => {
      arr.value = [...fuse.search(query)]; // 将输入的值传入配置好的文件内进行匹配并返回相应的数据
      console.log(fuse.search(query));
    };
    const fn = (val) => {
      // console.log(val);
    };
    const lsits = ref([
      { path: "/profile" },
      { path: "/user" },
      { path: "/user/manage" },
      { path: "/user/role" },
      { path: "/user/permission" },
      { path: "/user/import" },
      { path: "/article" },
      { path: "/article/ranking" },
      { path: "/article/create" },
    ]);

    // 初始化 fuse.js 作用:模糊查询工具
    let fuse;
    const initFuse = (list) => {
      fuse = new Fuse(list, {
        shouldSort: true, // 搜索的结果是否按照优先级排序
        minMatchCharLength: 2, // 至少输入两个值才开始模糊查询
        isCaseSensitive: true, // 是否区分大小写
        keys: [
          {
            name: "path", // 搜索的字段
            weight: 0.7, // 如果设置了多种搜索功能则根据优先级决定以那种方式搜索
          },
        ],
      });
    };
    initFuse(lsits.value);
    return {
      value,
      querySearch,
      arr,
      fn,
    };
  },
};
</script>
