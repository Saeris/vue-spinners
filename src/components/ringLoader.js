import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const right = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}
`

const left = keyframes`
  0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)}
  100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}
`

const Wrapper = styled(`div`)`
  position: relative;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
`

const Ring = styled(`div`)`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  border: ${({ size, sizeUnit, color }) => `${size / 10}${sizeUnit} solid ${color}`};
  border-radius: 100%;
  opacity: 0.4;
  animation: ${({ version }) => `${(version === 1 ? right : left)} 2s 0s infinite linear`};
  animation-fill-mode: forwards;
  perspective: 800px;
`

export const RingLoader = {
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
          <Ring
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
