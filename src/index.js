import Vue from 'vue'
import * as Components from './components'

Object.entries(Components).forEach(([name, component]) => {
  Vue.component(name, component)
})

export default Components
