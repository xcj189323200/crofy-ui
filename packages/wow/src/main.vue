<!--
 * @Description: wow
 * @Author: 徐长剑
 * @Date: 2019-09-27 17:42:13
 * @LastEditTime: 2019-09-29 14:40:10
 * @LastEditors: 徐长剑
 -->
<!--test.vue-->
<template>
  <section
    :class="[className,type]"
    :data-wow-duration="duration+'s'"
    :data-wow-delay="delay + 's'"
    :data-wow-iteration="iteration"
  >
    <slot></slot>
  </section>
</template>

<script>
import 'animate.css'
import Wow from 'wow.js'

export default {
  name: 'wow',
  props: {
    type: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 0
    },
    iteration: {
      type: Number,
      default: 1
    },
    mobile: {
      type: Boolean,
      default: true
    },
    live: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 0
    },
    scrollContainer: {
      type: String,
      default: null
    },
    resetAnimation: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      className: 'crofys-' + Math.floor(Math.random(1, 100) * 10000)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      const { className, offset, mobile, live, scrollContainer, resetAnimation } = this
      const wow = new Wow({
        boxClass: className,
        animateClass: 'animated',
        offset, // 距離可見區域多少開始動畫(與瀏覽器底部有關，通常是滑到畫面中央)
        mobile, // 手機上是否執行動畫
        live, // 說明是寫異步加載的內容是否有效
        callback: box => {
          this.$emit('perform', box)
        },
        scrollContainer, // 可选的滚动容器选择器,否则使用窗口,
        resetAnimation // 重置动画结束(默认是正确的)
      })
      wow.init()
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: inline-block;
}
</style>
