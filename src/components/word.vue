<!--
 * @Author: Custer
 * @Date: 2021-10-16 02:52:51
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-18 13:30:23
 * @Description: file content
-->
<template>
  <div class="wordComponent">
    <div class="name" v-if="item.showWord">{{ item.word }}</div>
    <el-button v-else class="wordBtn" @click="showWordFun(item)" type="default" size="mini">显示单词</el-button>
    <div class="desc" v-if="item.showDesc" style="white-space: pre-wrap;" v-html="item.desc"></div>
    <el-button v-else class="descBtn" @click="showDescFun(item)" type="default" size="mini">显示解释</el-button>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  props: { 
    item: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {},
  setup() {
    const data = reactive({});
    const showWordFun = (item) => {
      item.showWord = true;
    };
    const showDescFun = (item) => {
      item.showDesc = true;
    }
    return {
      ...toRefs(data),
      showWordFun,
      showDescFun
    };
  },
};
</script>
<style lang='scss' scoped>
  .wordComponent{
    & > .name{
      color: #000;
      font-size: 18px;
      line-height: 28px;
      height: 28px;
    }
    & > .desc{
      font-size: 14px;
      margin-top: 5px;
      color: #999;
    }
    & > .wordBtn{
      margin-top: 0;
    }
    & > .descBtn{
      margin-top: 5px;
    }
  }
</style>