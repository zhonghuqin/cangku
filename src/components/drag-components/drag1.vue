<template>
  <div
    style="
      width: 100%;
      height: 100%;
      border: 2px solid rgba(0,0,0,0.3);
      background: #fff;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      font-size: 16px;
    "
  >
    自定义节点
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressNode",
  inject: ["getNode"],
  mounted() {
    const node = (this as any).getNode?.();
  }
});
</script>

