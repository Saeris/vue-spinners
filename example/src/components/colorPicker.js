import Vue from 'vue'
import Component from 'vue-class-component'
import styled from "vue-emotion"
import { Sketch } from 'vue-color'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

const Container = styled(`section`)`
  top: ${({ pos }) => `${pos}px`};
  left: 20px;
  position: fixed;
  z-index: 999;
`

const Button = styled(`button`)`
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  background: #2b303b;
  color: #fff;
  border: none;
  opacity: 0.9;
  -webkit-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  letter-spacing: 0.5px;
  padding: 0 28px;

  &:hover {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14),
      0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
    opacity: 1;
  }
`

@Component({
  props: {
    color: {
      type: String,
      required: true
    },
    updateColor: {
      type: Function,
      required: true
    }
  }
})
export class ColorPicker extends Vue {
  pos = 370
  showPicker = false

  beforeMount() {
    window.addEventListener(`scroll`, this.updatePosition, true)
  }

  beforeDestroy() {
    window.removeEventListener(`scorll`, this.updatePosition, true)
  }

  updatePosition() {
    let top = 370 - (window.scrollY * 2)
    if (top > 60) {
      this.pos = top
    } else {
      this.pos = 50
    }
  }

  togglePicker() {
    this.showPicker = !this.showPicker
  }

  render() {
    return (
      <Container pos={this.pos}>
        {this.showPicker ? (
          <Sketch
            v-click-outside={this.togglePicker}
            value={this.color}
            onInput={this.updateColor}
          />
        ) : (
          <Button onClick={this.togglePicker}>Change Color</Button>
        )}
      </Container>
    )
  }
}
