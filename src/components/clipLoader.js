import styled, { keyframes } from 'vue-emotion'

const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)}
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`

const Ring = styled(`div`)`
  background: transparent !important;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  border-radius: 100%;
  border: 2px solid;
  border-color: ${({ color }) => color};
  border-bottom-color: transparent;
  display: inline-block;
  animation: ${clip} 0.75s 0s infinite linear;
  animation-fill-mode: both;
`

export const ClipLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 35 },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Ring
        {...data}
        size={props.size}
        sizeUnit={props.sizeUnit}
        color={props.color}
      />
    ) : null
  }
}
