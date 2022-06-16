<template>
  <el-dialog :model-value="showDialogVariable" width="30%" @close="handleClose">
    <!-- 取色器 -->
    <div class="content">
      <p class="title">123</p>
      <el-color-picker v-model="color" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose"> 取消 </el-button>
        <el-button type="primary" @click="confirm">开启 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { useStore } from "vuex";
// import { predefineColors } from "@/common/common.js";
import { generateNewStyle, writeStyleToHearTag } from "@/utils/theme.js";
const store = useStore();
defineProps({
  showDialogVariable: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["closeDialog"]);
// 关闭模态框按钮
const handleClose = () => {
  // 触发自定义的事件 名为closeDialog
  emits("closeDialog");
};

const color = ref(store.state.theme_color);

// 确认切换按钮
const confirm = async () => {
  // console.log(color.value);
  // 1. 将颜色保存在vuex
  store.commit("setMycolor", color.value);
  // 生成要替换的颜色
  const newStyle = await generateNewStyle(color.value);

  // 最后将替换完成的样式插入到header中,利用css优先级让插入的样式生效
  writeStyleToHearTag(newStyle);
  console.log(newStyle);
  // 3.关闭模态框
  emits("closeDialog");
};
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
