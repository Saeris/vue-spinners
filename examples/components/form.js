export const Form = ({ props: { inputs, update } }) => (
  <div class="form">
    {Object.keys(inputs).map(name => (
      <div class="form-input">
        <input
          name={name}
          type={name === 'margin' ? 'text' : 'number'}
          value={inputs[name]}
          onInput={update(name)}
        />
        <span class="bar" />
        <label htmlFor={name}>{name}</label>
      </div>
    ))}
  </div>
)
