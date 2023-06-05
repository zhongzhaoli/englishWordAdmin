/*
 * @Author: Custer
 * @Date: 2021-09-03 15:05:13
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-16 01:59:36
 * @Description: file content
 */
import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementUI from 'element-plus';

const app = createApp(App);
app.use(ElementUI).use(router).mount('#app')
