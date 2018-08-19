import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const rotate = keyframes`
  100% {transform: rotate(360deg)}
`

const bounce = keyframes`
  0%, 100% {transform: scale(0)}
  50% {transform: scale(1.0)}
`

const Wrapper = styled(`div`)`
  position: relative;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  animation-fill-mode: forwards;
  animation: ${rotate} 2s 0s infinite linear;
`

const Circle = styled(`div`)`
  position: absolute;
  top: ${({ version }) => (version % 2 ? `0` : `auto`)};
  bottom: ${({ version }) => (version % 2 ? `auto` : `0`)};
  height: ${({ size, sizeUnit }) => `${size / 2}${sizeUnit}`};
  width: ${({ size, sizeUnit }) => `${size / 2}${sizeUnit}`};
  background-color: ${({ color }) => color};
  border-radius: 100%;
  animation-fill-mode: forwards;
  animation: ${({ version }) => `${bounce} 2s ${(version === 2 ? `-1s` : `0s`)} infinite linear`};
`

export const DotLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 60 },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper
        {...data}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        {range(2, 1).map(i => (
          <Circle
            color={props.color}
            size={props.size}
            sizeUnit={props.sizeUnit}
            version={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
