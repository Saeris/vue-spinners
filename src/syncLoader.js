import styled, { keyframes } from 'vue-emotion'
import { range } from './utils'

const sync = keyframes`
  33% {transform: translateY(10px)}
  66% {transform: translateY(-10px)}
  100% {transform: translateY(0)}
`

const El = styled(`div`)`
   {
    background-color: ${({ color }) => color};
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    margin: ${({ margin }) => margin};
    border-radius: 100%;
    display: inline-block;
    animation: ${sync} 0.6s ${({ version }) => version * 0.07}s infinite
      ease-in-out;
    animation-fill-mode: both;
  }
`

export const SyncLoader = {
  functional: true,
  props: {
    loaderStyle: { type: Object, default: () => ({}) },
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 15 },
    sizeUnit: { type: String, default: `px` },
    margin: { type: String, default: `2px` }
  },
  render(h, { props }) {
    return props.loading ? (
      <div class={props.loaderStyle}>
        {range(3, 1).map(i => (
          <El
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
