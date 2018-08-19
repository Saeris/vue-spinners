import Vue from "vue"
import Component from "vue-class-component"
import Spinners from "@saeris/vue-spinners"
import { Code, ColorPicker, Layout, LoaderItem } from "./components"
import "./styles/index.scss"

@Component
class App extends Vue {
  color = `#36D7B7`

  updateColor(color) {
    this.color = color.hex
  }

  renderSpinner(Spinner) {
    return <Spinner color={this.color} />
  }

  render() {
    return (
      <Layout color={this.color}>
        <ColorPicker color={this.color} updateColor={this.updateColor} />
        <section class="spinners">
          <Code />
          <ul>
            {Object.entries(Spinners).map(([name, spinner]) => (
              <LoaderItem color={this.color} name={name} spinner={spinner} />
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}

// eslint-disable-next-line
new Vue({
  el: `#app`,
  render: h => h(App)
})
