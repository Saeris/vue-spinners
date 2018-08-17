import Vue from 'vue'
import Component from 'vue-class-component'
import { Code, ColorPicker, Layout, LoaderItem } from './components'
import Spinners from '../src'
import './styles/index.scss'

@Component
class App extends Vue {
  color = `#36D7B7`
  showPicker = false

  updateColor(color) {
    this.color = color.hex
  }

  togglePicker() {
    this.showPicker = !this.showPicker
  }

  renderSpinner(Spinner) {
    return <Spinner color={this.color} />
  }

  render() {
    return (
      <Layout color={this.color}>
        <section class="controls">
          {this.showPicker ? (
            <ColorPicker
              color={this.color}
              updateColor={this.updateColor}
              togglePicker={this.togglePicker}
            />
          ) : (
            <button onClick={this.togglePicker}>Change Color</button>
          )}
        </section>
        <Code />
        <section class="spinners">
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

new Vue({
  el: '#app',
  render: h => h(App)
})
