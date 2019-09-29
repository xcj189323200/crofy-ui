<!--
 * @Description:  redmine
 * @Author: 徐长剑
 * @Date: 2019-09-27 17:33:42
 * @LastEditTime: 2019-09-29 14:50:53
 * @LastEditors: 徐长剑
 -->
# crofy-ui

## 安装
```js
npm i crofy-ui --save
// or
yarn add  crofy-ui
```
## 使用

```js
import CrofyUi from 'crofy-ui'
import 'crofy-ui/lib/crofy-ui.css'

Vue.use(CrofyUi)
```


## 组件

### wow

> 滚动到指定位置执行动画

#### 使用：

```html
<wow type="slideInLeft" :duration="1" :delay='0'>
      <div>scroll here</div>
</wow>
```

#### Attribute:

属性 | 类型 | 默认 | 说明
- | - | - | -
type | String | '' | 动画执行类名
duration | Number | 0 | 动画执行时间
iteration | Number | 1 | 动画执行时间
delay | Number | 0 | 动画延时执行时间
mobile | Boolean | true | 是否在移动端执行
live | Boolean | true | 是否异步加载内容是否有效
offset | Number | 0 | 距离可见区域的距离(与浏览器底部有关))
scrollContainer | String | null | 可选的滚动容器选择器,默认使用窗口
resetAnimation | Boolean | true | 重置动画结束


----

#### Methods:

属性 | 说明
- | -
perform | 动画执行的回调函数