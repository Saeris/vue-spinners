import Vue from 'vue'
import Component from 'vue-class-component'
import styled from "vue-emotion"

const Container = styled(`section`)`
  margin: 50px auto;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    background: #2b303b;
    padding: 16px 32px;
    font-size: 20px;
    margin: 0 auto;
    font-family: Courier New, Courier, monospace;
    opacity: 0.9;
    transition: 0.3s ease-out;

    &:hover {
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
        0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
  }
`

@Component
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
      <Container>
        <span onClick={this.handleClick}>{this.text[this.index]}</span>
      </Container>
    )
  }
}
