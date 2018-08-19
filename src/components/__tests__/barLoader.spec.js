import { mount } from '@vue/test-utils'
import { BarLoader } from '../barLoader.js'

describe(`Bar Loader`, () => {
  it(`renders props.color when passed`, () => {
    const color = `#bada55`
    const wrapper = mount(BarLoader, {
      context: {
        props: { color }
      }
    })
    expect(wrapper.attributes().color).toBe(color)
  })

  it(`renders a div`, () => {
    const wrapper = mount(BarLoader)
    expect(wrapper.contains(`div`)).toBe(true)
  })
})
