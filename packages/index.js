/*
 * @Description:
 * @Author: 徐长剑
 * @Date: 2019-09-27 17:39:27
 * @LastEditTime: 2019-09-29 13:54:02
 * @LastEditors: 徐长剑
 */

import wow from './wow/index'

const components = [wow]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  // Vue.prototype.$message = Message;
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// export { wow }

export default {
  version: '1.0.0',
  install,
  ...components
}
