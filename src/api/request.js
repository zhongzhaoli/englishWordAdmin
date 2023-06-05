/*
 * @Author: Custer
 * @Date: 2021-09-08 09:55:36
 * @LastEditors: Custer
 * @LastEditTime: 2021-10-16 02:07:33
 * @Description: file content
 */
import axios from 'axios';

const service = axios.create({
  baseURL: '/api'
})

export default service;