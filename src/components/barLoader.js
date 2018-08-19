import styled, { keyframes } from 'vue-emotion'
import { calculateRgba, range } from '../utils'

const long = keyframes`
  0% {left: -35%;right: 100%}
  60% {left: 100%;right: -90%}
  100% {left: 100%;right: -90%}
`

const short = keyframes`
  0% {left: -200%;right: 100%}
  60% {left: 107%;right: -8%}
  100% {left: 107%;right: -8%}
`

const Wrapper = styled(`div`)`
  position: relative;
  width: ${({ width, widthUnit }) => `${width}${widthUnit}`};
  height: ${({ height, heightUnit }) => `${height}${heightUnit}`};
  overflow: hidden;
  background-color: ${({ color }) => calculateRgba(color, 0.2)};
  background-clip: padding-box;
`

const Bar = styled(`div`)`
  position: absolute;
  height: ${({ height, heightUnit }) => `${height}${heightUnit}`};
  overflow: hidden;
  background-color: ${({ color }) => color};
  background-clip: padding-box;
  display: block;
  border-radius: 2px;
  will-change: left, right;
  animation-fill-mode: forwards;
  animation: ${({ version }) => ` ${(version === 1 ? long : short)} 2.1s ${(version === 2 ? `1.15s` : ``)} ${(version === 1 ? `cubic-bezier(0.65, 0.815, 0.735, 0.395)` : `cubic-bezier(0.165, 0.84, 0.44, 1)`)} infinite`};
`

export const BarLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    width: { type: Number, default: 100 },
    widthUnit: { type: String, default: `px` },
    height: { type: Number, default: 4 },
    heightUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper
        {...data}
        width={props.width}
        widthUnit={props.widthUnit}
        height={props.height}
        heightUnit={props.heightUnit}
        color={props.color}
      >
        {range(2, 1).map(i => (
          <Bar
            height={props.height}
            heightUnit={props.heightUnit}
            color={props.color}
            version={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
