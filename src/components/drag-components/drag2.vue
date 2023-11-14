<template>
  <div
    style="
      width: 100px;
      height: 100px;
      border: 2px solid rgba(0,0,0,0.3);
      background: #fff;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      font-size: 16px;
    "
    >
    30
  </div>
</template>

<script setup lang="ts">
import { defineComponent, getCurrentInstance, reactive } from "vue";

const { getNode } = getCurrentInstance()!.appContext.provides;

const mounted = () => {
  const node = getNode?.();
};
// const LIST = reactive([
//   {
//     name:"蜡笔小新"
//   },
//   {
//     name:"大头儿子"
//   },
//   {
//     name:"小头爸爸"
//   }
// ])

</script>


