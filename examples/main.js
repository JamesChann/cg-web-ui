import Vue from 'vue'
import App from './App.vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ColorPicker from './../packages/index'

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

Vue.use(ElementUI)
Vue.use(ColorPicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
