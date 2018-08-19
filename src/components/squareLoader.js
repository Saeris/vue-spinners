import styled, { keyframes } from 'vue-emotion'

const square = keyframes`
  25% {transform: rotateX(180deg) rotateY(0)}
  50% {transform: rotateX(180deg) rotateY(180deg)}
  75% {transform: rotateX(0) rotateY(180deg)}
  100% {transform: rotateX(0) rotateY(0)}
`

const Square = styled(`div`)`
  display: inline-block;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  background-color: ${({ color }) => color};
  animation: ${square} 3s 0s infinite cubic-bezier(0.09, 0.57, 0.49, 0.9);
  animation-fill-mode: both;
`

export const SquareLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 50 },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Square
        {...data}
        color={props.color}
        size={props.size}
        sizeUnit={props.sizeUnit}
      />
    ) : null
  }
}
