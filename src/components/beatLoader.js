import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const beat = keyframes`
  50% {transform: scale(0.75);opacity: 0.2} 
  100% {transform: scale(1);opacity: 1}
`

const Wrapper = styled(`div`)`
   {
  }
`

const El = styled(`div`)`
   {
    display: inline-block;
    background-color: ${({ color }) => color};
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    margin: ${({ margin }) => margin};
    border-radius: 100%;
    animation: ${beat} 0.7s ${({ version }) => (version % 2 ? '0s' : '0.35s')}
      infinite linear;
    animation-fill-mode: both;
  }
`

export const BeatLoader = {
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
      <Wrapper class={props.loaderStyle}>
        {range(3, 1).map(i => (
          <El
            color={props.color}
            size={props.size}
            sizeUnit={props.sizeUnit}
            margin={props.margin}
            version={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
