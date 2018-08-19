import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

// 1.5 4.5 7.5
const distance = [1, 3, 5]

const propagate = [
  keyframes`
    25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(-${distance[2]}rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}
  `,
  keyframes`
    25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(-${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(-${distance[1]}rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}
  `,
  keyframes`
    25% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    75% {transform: translateX(-${distance[0]}rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}
  `,
  keyframes`
    25% {transform: translateX(${distance[0]}rem) scale(0.75)}
    75% {transform: translateX(${distance[0]}rem) scale(0.75)}
    95% {transform: translateX(0rem) scale(1)}
  `,
  keyframes`
    25% {transform: translateX(${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(${distance[1]}rem) scale(0.6)}
    95% {transform: translateX(0rem) scale(1)}
  `,
  keyframes`
    25% {transform: translateX(${distance[0]}rem) scale(0.75)}
    50% {transform: translateX(${distance[1]}rem) scale(0.6)}
    75% {transform: translateX(${distance[2]}rem) scale(0.5)}
    95% {transform: translateX(0rem) scale(1)}
  `
]

const Wrapper = styled(`div`)`
  position: relative;
`

const Circle = styled(`div`)`
  position: absolute;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  border-radius: 50%;
  background: ${({ color }) => color};
  font-size: ${({ size, sizeUnit }) => `${size / 3}${sizeUnit}`};
  animation: ${({ version }) => propagate[version]} 1.5s infinite;
  animation-fill-mode: forwards;
`

export const PropagateLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 15 },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper {...data}>
        {range(6).map(i => (
          <Circle
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
