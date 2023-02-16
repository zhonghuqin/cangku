<template>
  <AntV />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AntV from './components/antv.vue';

export default defineComponent({
  name: 'App',
  components: {
    AntV
  }
});
</script>

<style>
*, #app {
  padding: 0;
  margin: 0;
}
</style>
