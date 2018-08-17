import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const riseAmount = 30

const even = keyframes`
  0% {transform: scale(1.1)}
  25% {translateY(-${riseAmount}px)}
  50% {transform: scale(0.4)}
  75% {transform: translateY(${riseAmount}px)}
  100% {transform: translateY(0) scale(1.0)}
`

const odd = keyframes`
  0% {transform: scale(0.4)}
  25% {translateY(${riseAmount}px)}
  50% {transform: scale(1.1)}
  75% {transform: translateY(${-riseAmount}px)}
  100% {transform: translateY(0) scale(0.75)}
`

const El = styled(`div`)`
   {
    background-color: ${({ color }) => color};
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    margin: ${({ margin }) => margin};
    border-radius: 100%;
    display: inline-block;
    animation: ${({ version }) => (version % 2 === 0 ? even : odd)} 1s 0s
      infinite cubic-bezier(0.15, 0.46, 0.9, 0.6);
    animation-fill-mode: both;
  }
`

export const RiseLoader = {
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
        {range(5, 1).map(i => (
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
