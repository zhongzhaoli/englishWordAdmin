/*
 * @Author: Custer
 * @Date: 2021-09-08 10:02:29
 * @LastEditors: zhongzhaoli 525966315@qq.com
 * @LastEditTime: 2023-06-05 18:05:02
 * @Description: file content
 */
'use strict'



module.exports = {
  devServer: {
    port: 2021,
    proxy: {
      '/api': {
        // target: `http://114.132.222.212`,
        target: `http://localhost:8888`,
        changeOrigin: true,
      }
    }
  }
}