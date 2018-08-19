export const Form = {
  functional: true,
  props: {
    inputs: { type: Object, default: () => ({}) },
    update: { type: Function, required: true }
  },
  render(h, { props: { inputs, update } }) {
    return (
      <div class="form">
        {Object.keys(inputs).map(name => (
          <div class="form-input">
            <input
              name={name}
              type={name === `margin` ? `text` : `number`}
              value={inputs[name]}
              onInput={update(name)}
            />
            <span class="bar" />
            <label htmlFor={name}>{name}</label>
          </div>
        ))}
      </div>
    )
  }
}
