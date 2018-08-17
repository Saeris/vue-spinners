import styled, { keyframes } from 'vue-emotion'
import { range } from './utils'

const bounce = keyframes`
  0%, 100% {transform: scale(0)} 
  50% {transform: scale(1.0)}
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
    width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
    background-color: ${({ color }) => color};
    border-radius: 100%;
    opacity: 0.6;
    top: 0;
    left: 0;
    animation-fill-mode: both;
    animation: ${bounce} 2.1s ${({ version }) => (version === 1 ? '1s' : '0s')}
      infinite ease-in-out;
  }
`

export const BounceLoader = {
  functional: true,
  props: {
    loaderStyle: { type: Object, default: () => ({}) },
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 60 },
    sizeUnit: { type: String, default: 'px' }
  },
  render(h, { props }) {
    return props.loading ? (
      <Wrapper
        class={props.loaderStyle}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        {range(2, 1).map(i => (
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
