import styled, { css, keyframes } from 'vue-emotion'

const moon = keyframes`
  100% {transform: rotate(360deg)}
`

const moonSize = size => size / 7

const ballStyle = (size, sizeUnit) => css`
   {
    width: ${size} ${sizeUnit};
    height: ${size} ${sizeUnit};
    border-radius: 100%;
  }
`

const Wrapper = styled(`div`)`
   {
    position: relative;
    width: ${({ size, sizeUnit }) => `${size + moonSize(size) * 2}${sizeUnit}`};
    height: ${({ size, sizeUnit }) =>
      `${size + moonSize(size) * 2}${sizeUnit}`};
    animation: ${moon} 0.6s 0s infinite linear;
    animation-fill-mode: forwards;
  }
`

const Ball = styled(`div`)`
   {
    ${({ size, sizeUnit }) => ballStyle(moonSize(size), sizeUnit)};
    background-color: ${({ color }) => color};
    opacity: 0.8;
    position: absolute;
    top: ${({ size, sizeUnit }) =>
      `${size / 2 - moonSize(size) / 2}${sizeUnit}`};
    animation: ${moon} 0.6s 0s infinite linear;
    animation-fill-mode: forwards;
  }
`

const Circle = styled(`div`)`
   {
    ${({ size, sizeUnit }) => ballStyle(size, sizeUnit)};
    border: ${({ size, color }) => `${moonSize(size)}px solid ${color}`};
    opacity: 0.1;
  }
`

export const MoonLoader = {
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
        <Ball size={props.size} sizeUnit={props.sizeUnit} color={props.color} />
        <Circle
          size={props.size}
          sizeUnit={props.sizeUnit}
          color={props.color}
        />
      </Wrapper>
    ) : null
  }
}
