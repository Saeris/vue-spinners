import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const circle = keyframes`
  0% {transform: rotate(0deg)} 
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`

const Wrapper = styled(`div`)`
   {
    position: relative;
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  }
`

const El = styled(`div`)`
   {
    position: absolute;
    height: ${({ size, sizeUnit, version }) =>
      `${size * (1 - version / 10)}${sizeUnit}`};
    width: ${({ size, sizeUnit, version }) =>
      `${size * (1 - version / 10)}${sizeUnit}`};
    border: 1px solid ${({ color }) => color};
    border-radius: 100%;
    transition: 2s;
    border-bottom: none;
    border-right: none;
    top: ${({ version }) => version * 0.7 * 2.5}%;
    left: ${({ version }) => version * 0.35 * 2.5}%;
    animation-fill-mode: '';
    animation: ${circle} 1s ${({ version }) => version * 0.2}s infinite linear;
  }
`

export const CircleLoader = {
  functional: true,
  props: {
    loaderStyle: { type: Object, default: () => ({}) },
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 50 },
    sizeUnit: { type: String, default: 'px' }
  },
  render(h, { props }) {
    return props.loading ? (
      <Wrapper
        class={props.loaderStyle}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        {range(5).map(i => (
          <El
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
