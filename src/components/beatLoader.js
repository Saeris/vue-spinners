import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const beat = keyframes`
  50% {transform: scale(0.75);opacity: 0.2}
  100% {transform: scale(1);opacity: 1}
`

const Circle = styled(`div`)`
  display: inline-block;
  background-color: ${({ color }) => color};
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  margin: ${({ margin }) => margin};
  border-radius: 100%;
  animation: ${({ version }) => `${beat} 0.7s ${(version % 2 ? `0s` : `0.35s`)} infinite linear`};
  animation-fill-mode: both;
`

export const BeatLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 15 },
    sizeUnit: { type: String, default: `px` },
    margin: { type: String, default: `2px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <div {...data}>
        {range(3, 1).map(i => (
          <Circle
            color={props.color}
            size={props.size}
            sizeUnit={props.sizeUnit}
            margin={props.margin}
            version={i}
          />
        ))}
      </div>
    ) : null
  }
}
