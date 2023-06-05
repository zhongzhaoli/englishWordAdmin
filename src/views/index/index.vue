<!--
 * @Author: Custer
 * @Date: 2021-10-16 01:57:31
 * @LastEditors: Custer
 * @LastEditTime: 2022-02-09 08:31:55
 * @Description: file content
-->
<template>
  <div class="indexPage" v-loading="loading">
    <div class="handleBox">
      <el-form :inline="true">
        <el-form-item label="搜索天数：">
          <el-select
            size="small"
            placeholder="请选择"
            v-model="selectDay"
            @change="selectChange"
            value-key="id"
          >
            <el-option
              v-for="item in dayList"
              :key="item.id"
              :value="item.id"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="搜索类型：">
          <el-select
            size="small"
            placeholder="请选择"
            v-model="selectType"
            @change="selectChange"
            value-key="id"
          >
            <el-option label="全部" :value="0"></el-option>
            <el-option label="单词" :value="1"></el-option>
            <el-option label="短语" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开头单词">
          <el-select
            size="small"
            placeholder="请选择开头字母"
            v-model="start"
            @change="selectChange"
          >
            <el-option label="全部" value=""></el-option>
            <el-option label="A" value="a"></el-option>
            <el-option label="B" value="b"></el-option>
            <el-option label="C" value="c"></el-option>
            <el-option label="D" value="d"></el-option>
            <el-option label="E" value="e"></el-option>
            <el-option label="F" value="f"></el-option>
            <el-option label="G" value="g"></el-option>
            <el-option label="H" value="h"></el-option>
            <el-option label="I" value="i"></el-option>
            <el-option label="J" value="j"></el-option>
            <el-option label="K" value="k"></el-option>
            <el-option label="L" value="l"></el-option>
            <el-option label="M" value="m"></el-option>
            <el-option label="N" value="n"></el-option>
            <el-option label="O" value="o"></el-option>
            <el-option label="P" value="p"></el-option>
            <el-option label="Q" value="q"></el-option>
            <el-option label="R" value="r"></el-option>
            <el-option label="S" value="s"></el-option>
            <el-option label="T" value="t"></el-option>
            <el-option label="U" value="u"></el-option>
            <el-option label="V" value="y"></el-option>
            <el-option label="W" value="w"></el-option>
            <el-option label="X" value="x"></el-option>
            <el-option label="Y" value="y"></el-option>
            <el-option label="Z" value="z"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="搜索关键词：">
          <el-input
            size="small"
            v-model="keyword"
            placeholder="请输入关键词"
            @change="searchFun"
          ></el-input>
        </el-form-item>
        <el-form-item label="创建：">
          <el-button type="danger" size="small" @click="openDayDialog"
            >新建天数</el-button
          >
          <el-button type="danger" size="small" @click="openWordDialog"
            >新建单词</el-button
          >
        </el-form-item>
        <el-form-item label="功能：">
          <el-button type="primary" size="small" @click="randFun"
            >打乱顺序</el-button
          >
          <el-button
            type="success"
            size="small"
            @click="showSelect(true, false)"
            >隐藏英文</el-button
          >
          <el-button
            type="warning"
            size="small"
            @click="showSelect(false, true)"
            >隐藏中文</el-button
          >
          <el-button type="danger" size="small" @click="showSelect(true, true)"
            >全部显示</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div>
      共
      <b>{{ wordList.length }}</b>
      个单词
    </div>
    <div class="wordList">
      <el-row :gutter="20">
        <el-col
          style="margin-top: 20px;"
          :xs="12"
          :sm="12"
          :md="8"
          :lg="4"
          :xl="4"
          v-for="item in wordList"
          :key="item.id"
        >
          <Word :item="item"></Word>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="新建单词" width="500px" v-model="createDialog">
      <el-form ref="wordRef" :model="wordObj" :rules="rules">
        <el-form-item label="单词：" prop="word">
          <el-input v-model="wordObj.word" placeholder="请输入单词"></el-input>
        </el-form-item>
        <el-form-item label="解释：" prop="desc">
          <el-input
            v-model="wordObj.desc"
            :rows="8"
            type="textarea"
            placeholder="请输入解释"
          ></el-input>
        </el-form-item>
        <el-form-item label="天数：" prop="day">
          <el-select
            size="small"
            placeholder="请选择"
            v-model="wordObj.day"
            value-key="id"
          >
            <el-option
              v-for="item in createDayList"
              :key="item.id"
              :value="item.id"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是短语吗">
          <el-radio-group v-model="wordObj.isPhrase">
            <el-radio label="0">否</el-radio>
            <el-radio label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="small" @click="createDialog = false">取消</el-button>
          <el-button size="small" type="primary" @click="createWordFun"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
    <el-dialog title="新建天数" width="500px" v-model="dayDialog">
      <el-input
        v-model="dayContent"
        @keyup.enter="createDayFun"
        placeholder="请输入天数"
      ></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button size="small" @click="dayDialog = false">取消</el-button>
          <el-button size="small" type="primary" @click="createDayFun"
            >确认</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, toRefs, ref } from "vue";
import { ElMessage } from "element-plus";
import { dayList, dayCreate, wordSelect, wordCreate } from "@/api";
import Word from "@/components/word";
export default {
  props: {},
  components: { Word },
  setup() {
    const data = reactive({
      createDialog: false,
      dayDialog: false,
      dayContent: "",
      dayList: [],
      createDayList: [],
      wordList: [],
      selectDay: "",
      selectType: "",
      start: "",
      keyword: "",
      wordObj: {
        isPhrase: "0",
      },
      loading: false,
      rules: {
        word: [{ required: true, message: "单词不能为空", trigger: "blur" }],
        desc: [{ required: true, message: "解释不能为空", trigger: "blur" }],
        day: [{ required: true, message: "天数不能为空", trigger: "blur" }],
      },
    });
    const openWordDialog = () => {
      data.createDialog = true;
    };
    const openDayDialog = () => {
      data.dayDialog = true;
    };
    const createDayFun = () => {
      dayCreate({ name: data.dayContent }).then(() => {
        ElMessage.success("操作成功");
        data.dayDialog = false;
        data.dayContent = "";
        dayList().then((res) => {
          data.dayList = [{ id: 0, name: "全部" }, ...(res?.data?.data || [])];
          data.createDayList = res?.data?.data || [];
        });
      });
    };
    const randFun = () => {
      let randomNumber = function() {
        return 0.5 - Math.random();
      };
      data.wordList.sort(randomNumber);
    };
    const searchFun = () => {
      data.loading = true;
      wordSelect({
        day: data.selectDay,
        selectType: data.selectType,
        keyword: data.keyword,
        start: data.start,
      }).then((res) => {
        data.loading = false;
        data.wordList =
          res?.data?.data.map((item) => {
            return {
              ...item,
              showWord: true,
              showDesc: true,
            };
          }) || [];
      });
    };
    const selectChange = () => {
      data.loading = true;
      wordSelect({
        day: data.selectDay,
        selectType: data.selectType,
        keyword: data.keyword,
        start: data.start,
      }).then((res) => {
        data.loading = false;
        data.wordList =
          res?.data?.data.map((item) => {
            return {
              ...item,
              showWord: true,
              showDesc: true,
            };
          }) || [];
      });
    };
    const wordRef = ref(0);
    const createWordFun = () => {
      wordRef.value.validate((valid) => {
        if (valid) {
          wordCreate(data.wordObj).then(() => {
            ElMessage.success("操作成功");
            data.wordObj.word = "";
            data.wordObj.desc = "";
          });
        }
      });
    };
    const initSelect = () => {
      data.dayList = [{ id: 0, name: "全部" }];
      data.selectDay = 0;
      data.selectType = 0;
    };
    const showSelect = (showDesc, showWord) => {
      data.wordList.forEach((item) => {
        (item.showWord = showWord), (item.showDesc = showDesc);
      });
    };
    initSelect();
    data.loading = true;
    Promise.all([dayList(), wordSelect()]).then((arr) => {
      const dayList = arr[0]?.data?.data || [];
      const wordList =
        arr[1]?.data?.data.map((item) => {
          return {
            ...item,
            showWord: true,
            showDesc: true,
          };
        }) || [];
      data.dayList = [...data.dayList, ...dayList];
      data.createDayList = dayList;
      data.wordList = wordList;
      data.loading = false;
    });
    return {
      ...toRefs(data),
      randFun,
      openWordDialog,
      openDayDialog,
      createDayFun,
      selectChange,
      createWordFun,
      wordRef,
      showSelect,
      searchFun,
    };
  },
};
</script>
<style lang="scss" scoped>
.indexPage {
  padding: 20px;
}
</style>
