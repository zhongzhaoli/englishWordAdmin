/*
 * @Author: Custer
 * @Date: 2021-10-16 02:04:48
 * @LastEditors: Custer
 * @LastEditTime: 2021-12-23 16:06:42
 * @Description: file content
 */

import request from './request';

export function dayList(){
  return request({
    url: "/dayList",
    method: "get"
  })
}

export function dayCreate(data){
  return request({
    url: "/dayCreate",
    method: "post",
    data
  })
}

export function wordSelect(params){
  return request({
    url: `/wordSelect`,
    method: "get",
    params
  })
}

export function wordCreate(data){
  return request({
    url: "/wordCreate",
    method: "post",
    data
  })
}