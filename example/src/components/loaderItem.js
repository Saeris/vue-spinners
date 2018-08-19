import Vue from 'vue'
import Component from 'vue-class-component'
import { Form } from './form'

@Component({
  props: {
    spinner: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
})
export class LoaderItem extends Vue {
  defaults = {}

  beforeMount() {
    const props = Object.entries(this.spinner.props).filter(
      ([key, values]) => values.default
    )
    const defaults = props.reduce((hash, [key, values]) => {
      hash[key] = values.default
      return hash
    }, {})
    const propTypes = props.reduce((hash, [key, values]) => {
      hash[key] = values.type
      return hash
    }, {})

    delete defaults.color
    delete defaults.loading
    delete defaults.sizeUnit
    delete defaults.widthUnit
    delete defaults.heightUnit
    delete defaults.radiusUnit
    delete defaults.loaderStyle

    this.defaults = defaults
    this.propTypes = propTypes
  }

  update(field) {
    return e => {
      this.defaults[field] = this.propTypes[field](e.target.value)
    }
  }

  renderSpinner(Spinner) {
    return (
      <Spinner
        {...{
          props: {
            color: this.color,
            ...this.defaults
          }
        }}
      />
    )
  }

  render() {
    return (
      <li>
        <span class="title">{this.name}</span>
        {this.renderSpinner(this.spinner)}
        <Form inputs={this.defaults} update={this.update.bind(this)} />
      </li>
    )
  }
}
