<template>
  <el-dropdown
    v-bind="$attrs"
    class="theme"
    trigger="click"
    @command="showSelectColor"
  >
    <!-- 图标 -->
    <div>
      <el-tooltip>
        <button>哈哈哈哈</button>
      </el-tooltip>
    </div>
    <!-- 下拉选项 -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>切换 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 弹出的模态框 -->
  <select-color
    :showDialogVariable="showDialogVariable"
    @closeDialog="hideSelectColor"
  />

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>
</template>
<script setup>
import SelectColor from "@/components/selectColor.vue";
import { ref } from "vue";
const showDialogVariable = ref(false);
const showSelectColor = () => {
  showDialogVariable.value = true;
};
const hideSelectColor = () => {
  showDialogVariable.value = false;
};
</script>
<style lang="scss" scoped></style>
