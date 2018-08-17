import Vue from 'vue'
import Component from 'vue-class-component'
import { Sketch } from 'vue-color'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

@Component({
  props: {
    color: {
      type: String
    },
    togglePicker: {
      type: Function
    },
    updateColor: {
      type: Function
    }
  }
})
export class ColorPicker extends Vue {
  render() {
    return (
      <Sketch
        v-click-outside={this.togglePicker}
        value={this.color}
        onInput={this.updateColor}
      />
    )
  }
}
