import styled from "vue-emotion"

const Container = styled(`div`)`
  position: absolute;
  bottom: 5px;
  font-family: sans-serif, serif;
  width: 80%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const InputGroup = styled(`div`)`
  margin: 3px;
  display: flex;
  width: 50px;
  height: 20px;
  position: relative;
`

const Input = styled(`input`)`
  width: 50px;
  padding: 0 4px;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  text-align: center;

  &:focus {
    outline: none;
  }
`

const Bar = styled(`span`)`
  position: absolute;
  display: block;
  width: 100%;
  bottom: -1px;

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }

  &::before,
  &::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #36d7b7;
    transition: 0.2s ease all;
  }
`

const Label = styled(`label`)`
  top: -20px;
  flex: 1;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #999;
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all;
  width: 50px;
`

export const Form = {
  functional: true,
  props: {
    inputs: { type: Object, default: () => ({}) },
    update: { type: Function, required: true }
  },
  render(h, { props: { inputs, update } }) {
    return (
      <Container>
        {Object.keys(inputs).map(name => (
          <InputGroup>
            <Input
              name={name}
              type={name === `margin` ? `text` : `number`}
              value={inputs[name]}
              onInput={update(name)}
            />
            <Bar/>
            <Label htmlFor={name}>{name}</Label>
          </InputGroup>
        ))}
      </Container>
    )
  }
}
