/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-09-27 17:42:50
 * @LastEditTime: 2019-09-27 17:45:20
 * @LastEditors: 徐长剑
 */
import Main from './src/main'

/* istanbul ignore next */
Main.install = (Vue) => {
  Vue.component(Main.name, Main)
}

export default Main
