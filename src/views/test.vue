<!--
 * @Author: Custer
 * @Date: 2021-10-28 11:06:42
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-28 11:31:55
 * @Description: file content
-->
<template>
  <div class="testPage">
    <input type="text" v-model="inputText" name="" id="">
    <Child :inputText="inputText"></Child>
  </div>
</template>
<script>
import { reactive } from "vue";
import Child from './child.vue';
export default {
  props: {},
  components: { Child },
  setup() {
    const data = reactive({
      inputText: ""
    });
    return data
  },
};
</script>
<style lang='scss' scoped>
</style>