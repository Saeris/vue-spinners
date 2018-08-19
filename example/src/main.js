import Vue from "vue"
import Component from "vue-class-component"
import Components from "@saeris/vue-spinners"
import styled from "vue-emotion"
import { Code, ColorPicker, Layout, LoaderItem } from "./components"
import "./styles/index.scss"

const Spinners = styled(`section`)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  width: 80%;
  margin: 0 auto;
`

const List = styled(`ul`)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #fff;
`

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
        <Spinners>
          <Code />
          <List>
            {Object.entries(Components).map(([name, spinner]) => (
              <LoaderItem color={this.color} name={name} spinner={spinner} />
            ))}
          </List>
        </Spinners>
      </Layout>
    )
  }
}

// eslint-disable-next-line
new Vue({
  el: `#app`,
  render: h => h(App)
})
