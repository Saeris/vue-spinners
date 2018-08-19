import styled, { css, keyframes } from 'vue-emotion'

const moon = keyframes`
  100% {transform: rotate(360deg)}
`

const moonSize = size => (size / 7).toFixed(5)

const ballStyle = (size, sizeUnit) => css`
  width: ${`${size}${sizeUnit}`};
  height: ${`${size}${sizeUnit}`};
  border-radius: 100%;
`

const Wrapper = styled(`div`)`
  position: relative;
  width: ${({ size, sizeUnit }) => `${size + moonSize(size) * 2}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size + moonSize(size) * 2}${sizeUnit}`};
  animation: ${moon} 0.6s linear 0s infinite normal forwards running;
  box-sizing: content-box;
`

const Moon = styled(`div`)`
  position: absolute;
  top: ${({ size, sizeUnit }) => `${size / 2 - moonSize(size) / 2}${sizeUnit}`};
  background-color: ${({ color }) => color};
  opacity: 0.8;
  animation: ${moon} 0.6s linear 0s infinite normal forwards running;
  box-sizing: content-box;
  ${({ size, sizeUnit }) => ballStyle(moonSize(size), sizeUnit)};
`

const Ring = styled(`div`)`
  border-width: ${({ size }) => `${moonSize(size)}px`};
  border-style: solid;
  border-color: ${({ color }) => `${color}`};
  border-image: initial;
  opacity: 0.1;
  box-sizing: content-box;
  ${({ size, sizeUnit }) => ballStyle(size, sizeUnit)};
`

export const MoonLoader = {
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
        <Moon size={props.size} sizeUnit={props.sizeUnit} color={props.color} />
        <Ring
          size={props.size}
          sizeUnit={props.sizeUnit}
          color={props.color}
        />
      </Wrapper>
    ) : null
  }
}
