import Vue from 'vue'
import Component from 'vue-class-component'
import styled from "vue-emotion"
import { Form } from './form'

const Item = styled(`li`)`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 0.5px solid #e2e2e2;
  box-shadow: 1px 1px 1px #e2e2e2;
  width: 300px;
  height: 300px;
  margin: 30px;
  font-size: 18px;
  letter-spacing: 1px;
  position: relative;
`

const Title = styled(`span`)`
  position: absolute;
  top: 20px;
`

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
      <Item>
        <Title>{this.name}</Title>
        {this.renderSpinner(this.spinner)}
        <Form inputs={this.defaults} update={this.update.bind(this)} />
      </Item>
    )
  }
}
