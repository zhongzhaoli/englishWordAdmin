<!--
 * @Author: Custer
 * @Date: 2021-10-28 11:30:11
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-28 11:33:38
 * @Description: file content
-->
<template>
  <div class="childComponent">
    <input type="text" v-model="newInputText">
  </div>
</template>
<script>
export default {
  props: {
    inputText: {
      type: String
    }
  },
  components: {},
  setup() {
    return {
    };
  },
};
</script>
<style lang='scss' scoped>
</style>