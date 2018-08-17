import styled, { css, keyframes } from 'vue-emotion'

const rotate = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`

const ball = (color, margin, size, sizeUnit) => css`
   {
    background-color: ${color};
    width: ${size} ${sizeUnit};
    height: ${size} ${sizeUnit};
    margin: ${margin};
    border-radius: 100%;
  }
`

const Wrapper = styled(`div`)`
   {
    ${({ color, margin, size, sizeUnit }) =>
      ball(color, margin, size, sizeUnit)};
    display: inline-block;
    position: relative;
    animation-fill-mode: both;
    animation: ${rotate} 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);
  }
`

const style = i => css`
   {
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: ${i % 2 ? -28 : 25}px;
  }
`

const Long = styled(`div`)`
   {
    ${({ color, margin, size, sizeUnit }) =>
      ball(color, margin, size, sizeUnit)};
    ${style(1)};
  }
`

const Short = styled(`div`)`
   {
    ${({ color, margin, size, sizeUnit }) =>
      ball(color, margin, size, sizeUnit)};
    ${style(2)};
  }
`

export const RotateLoader = {
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
      <Wrapper
        class={props.loaderStyle}
        color={props.color}
        margin={props.margin}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        <Long
          color={props.color}
          margin={props.margin}
          size={props.size}
          sizeUnit={props.sizeUnit}
        />
        <Short
          color={props.color}
          margin={props.margin}
          size={props.size}
          sizeUnit={props.sizeUnit}
        />
      </Wrapper>
    ) : null
  }
}
