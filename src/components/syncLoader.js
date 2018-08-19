import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const sync = keyframes`
  33% {transform: translateY(10px)}
  66% {transform: translateY(-10px)}
  100% {transform: translateY(0)}
`

const Circle = styled(`div`)`
  display: inline-block;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  margin: ${({ margin }) => margin};
  border-radius: 100%;
  background-color: ${({ color }) => color};
  animation: ${({ version }) => `${sync} 0.6s ease-in-out ${version * 0.07}s infinite normal both running`};
  box-sizing: content-box;
`

export const SyncLoader = {
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
            margin={props.margin}
            size={props.size}
            sizeUnit={props.sizeUnit}
            version={i}
          />
        ))}
      </div>
    ) : null
  }
}
