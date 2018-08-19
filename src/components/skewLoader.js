import styled, { keyframes } from 'vue-emotion'

const skew = keyframes`
  25% {transform: perspective(100px) rotateX(180deg) rotateY(0)}
  50% {transform: perspective(100px) rotateX(180deg) rotateY(180deg)}
  75% {transform: perspective(100px) rotateX(0) rotateY(180deg)}
  100% {transform: perspective(100px) rotateX(0) rotateY(0)}
`

const Triangle = styled(`div`)`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: ${({ size, sizeUnit }) => `${size}${sizeUnit} solid transparent`};
  border-right: ${({ size, sizeUnit }) => `${size}${sizeUnit} solid transparent`};
  border-bottom: ${({ size, sizeUnit, color }) => `${size}${sizeUnit} solid ${color}`};
  animation: ${skew} 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
  animation-fill-mode: both;
`

export const SkewLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 20 },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Triangle
        {...data}
        color={props.color}
        size={props.size}
        sizeUnit={props.sizeUnit}
      />
    ) : null
  }
}
