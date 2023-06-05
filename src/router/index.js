/*
 * @Author: Custer
 * @Date: 2021-10-16 01:56:25
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-28 11:07:08
 * @Description: file content
 */

import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [{
      path: "",
      component: Layout,
      redirect: "/index",
      children: [
        {
          path: "index",
          name: "index",
          component: () => import("@/views/index"),
          meta: {title: "首页", icon: "dashboard"}
        },
        {
          path: "test",
          name: "test",
          component: () => import("@/views/test"),
          meta: {title: "测试", icon: "dashboard"}
        }
      ]
  }]
});

export default router;