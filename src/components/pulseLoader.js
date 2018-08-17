import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const pulse = keyframes`
  0% {transform: scale(1);opacity: 1} 
  45% {transform: scale(0.1);opacity: 0.7}
  80% {transform: scale(1);opacity: 1}
`

const El = styled(`div`)`
   {
    background-color: ${({ color }) => color};
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    margin: ${({ margin }) => margin};
    border-radius: 100%;
    display: inline-block;
    animation: ${pulse} 0.75s ${({ version }) => version * 0.12}s infinite
      cubic-bezier(0.2, 0.68, 0.18, 1.08);
    animation-fill-mode: both;
  }
`

export const PulseLoader = {
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
