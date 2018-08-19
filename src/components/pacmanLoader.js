import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

// This returns an animation
const pacman = [
  keyframes`
    0% {transform: rotate(0deg)}
    50% {transform: rotate(-44deg)}
  `,
  keyframes`
    0% {transform: rotate(0deg)}
    50% {transform: rotate(44deg)}
  `
]

const Wrapper = styled(`div`)`
  position: relative;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  font-size: 0;
`

const s1 = (size, sizeUnit) => `${size}${sizeUnit} solid transparent`
const s2 = (size, sizeUnit, color) => `${size}${sizeUnit} solid ${color}`

const Pacman = styled(`div`)`
  position: absolute;
  width: 0;
  height: 0;
  border-top: ${({ size, sizeUnit, color, version }) => (version === 0 ? s1(size, sizeUnit) : s2(size, sizeUnit, color))};
  border-left: ${({ size, sizeUnit, color }) => s2(size, sizeUnit, color)};
  border-bottom: ${({ size, sizeUnit, color, version }) => (version === 0 ? s2(size, sizeUnit, color) : s1(size, sizeUnit))};
  border-right: ${({ size, sizeUnit }) => s1(size, sizeUnit)};
  border-radius: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  animation: ${({ version }) => pacman[version]} ease-in-out 0.8s infinite normal both running;
`

const ballAnim = (size, sizeUnit) => keyframes`
  75% {opacity: 0.7}
  100% {transform: translate(${-4 * size}${sizeUnit}, ${-size / 4}${sizeUnit})}
`

const Ball = styled(`div`)`
  position: absolute;
  top: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  left: ${({ size, sizeUnit }) => `${size * 4}${sizeUnit}`};
  width: ${({ size, sizeUnit }) => `${size / 2.5}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size / 2.5}${sizeUnit}`};
  margin: ${({ margin }) => margin};
  border-radius: 100%;
  background-color: ${({ color }) => color};
  transform: ${({ size, sizeUnit }) => `translate(0, ${-size / 4}${sizeUnit})`};
  animation: ${({ size, sizeUnit, version }) => `${ballAnim(size, sizeUnit)} 1s linear ${version * 0.25}s infinite normal both running`};
`

export const PacmanLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 25 },
    sizeUnit: { type: String, default: `px` },
    margin: { type: String, default: `2px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper
        {...data}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        <Pacman
          color={props.color}
          size={props.size}
          sizeUnit={props.sizeUnit}
          version={0}
        />
        <Pacman
          color={props.color}
          size={props.size}
          sizeUnit={props.sizeUnit}
          version={1}
        />
        {range(4, 2).map(i => (
          <Ball
            color={props.color}
            margin={props.margin}
            size={props.size}
            sizeUnit={props.sizeUnit}
            version={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
