<!--
 * @Author: Custer
 * @Date: 2021-10-16 01:57:46
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-16 01:57:46
 * @Description: file content
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  props: {},
  components: {},
  setup() {
    const data = reactive({});
    return { ...toRefs(data) };
  },
};
</script>
<style lang='scss' scoped>
</style>