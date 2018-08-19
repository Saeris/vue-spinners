import styled, { css, keyframes } from 'vue-emotion'
import { range } from '../utils'

const rotate = keyframes`
  0% {transform: rotate(0deg)}
  50% {transform: rotate(180deg)}
  100% {transform: rotate(360deg)}
`

const fill = (color, margin, size, sizeUnit) => css`
  width: ${`${size}${sizeUnit}`};
  height: ${`${size}${sizeUnit}`};
  margin: ${margin};
  border-radius: 100%;
  background-color: ${color};
`

const Wrapper = styled(`div`)`
  position: relative;
  display: inline-block;
  animation: ${rotate} 1s 0s infinite cubic-bezier(0.7, -0.13, 0.22, 0.86);
  animation-fill-mode: both;
  ${({ color, margin, size, sizeUnit }) => fill(color, margin, size, sizeUnit)}
`

const Circle = styled(`div`)`
  position: absolute;
  top: 0;
  left: ${({ side }) => `${side ? -28 : 25}px`};
  opacity: 0.8;
  ${({ color, margin, size, sizeUnit }) => `${fill(color, margin, size, sizeUnit)}`}
`

export const RotateLoader = {
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
      <Wrapper
        {...data}
        color={props.color}
        margin={props.margin}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        {range(2).map(i => (
          <Circle
            color={props.color}
            margin={props.margin}
            size={props.size}
            sizeUnit={props.sizeUnit}
            side={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
