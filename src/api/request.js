/*
 * @Author: Custer
 * @Date: 2021-09-08 09:55:36
 * @LastEditors: zhongzhaoli 525966315@qq.com
 * @LastEditTime: 2023-06-05 21:12:38
 * @Description: file content
 */
import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_API + '/api'
})

export default service;