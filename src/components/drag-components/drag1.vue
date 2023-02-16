<template>
  <div style="width: 100%;height: 100%;border: 2px solid rgba(0,0,0,0.3);background: #fff;padding: 10px;box-sizing: border-box;">
    <textarea v-if="isEdit" @blur="blur" v-model="text" style="width: 100%;height: 100%;border: 0;outline: none;text-align: center;font-size: 16px;"></textarea>
    <span @dblclick="isEdit = true" v-else style="width: 100%;height: 100%;text-align: center;font-size: 16px;display: inline-block;">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressNode",
  inject: ["getNode"],
  data() {
    return {
      percentage: 80,
      text: '',
      isEdit: false
    };
  },
  mounted() {
    const node = (this as any).getNode?.();
  },
  methods: {
    blur() {
      this.isEdit = false
    }
  }
});
</script>

