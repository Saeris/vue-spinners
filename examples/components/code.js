import Vue from 'vue'
import Component from 'vue-class-component'

@Component()
export class Code extends Vue {
  text = [
    `yarn add @saeris/vue-spinners`,
    `npm install @saeris/vue-spinners --save`
  ]
  index = 0

  handleClick(e) {
    e.preventDefault()
    this.index = +!this.index
  }

  render() {
    return (
      <section class="code">
        <span onClick={this.handleClick}>{this.text[this.index]}</span>
      </section>
    )
  }
}
