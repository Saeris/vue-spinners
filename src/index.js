import * as Components from './components'

export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Object.entries(Components).forEach(([name, component]) => {
    Vue.component(name, component)
  })
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== `undefined`) {
  GlobalVue = window.Vue
} else if (typeof global !== `undefined`) {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default Components
export * from './components'
