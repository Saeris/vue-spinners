import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`

const Bar = styled(`div`)`
  display: inline-block;
  width: ${({ width, widthUnit }) => `${width}${widthUnit}`};
  height: ${({ height, heightUnit }) => `${height}${heightUnit}`};
  margin: ${({ margin }) => margin};
  border-radius: ${({ radius, radiusUnit }) => `${radius}${radiusUnit}`};
  background-color: ${({ color }) => color};
  animation: ${({ version }) => `${scale} 1s cubic-bezier(0.2, 0.68, 0.18, 1.08) ${version * 0.1}s infinite normal both running`};
`

export const ScaleLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    height: { type: Number, default: 35 },
    heightUnit: { type: String, default: `px` },
    width: { type: Number, default: 4 },
    widthUnit: { type: String, default: `px` },
    radius: { type: Number, default: 2 },
    radiusUnit: { type: String, default: `px` },
    margin: { type: String, default: `2px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <div {...data}>
        {range(5, 1).map(i => (
          <Bar
            color={props.color}
            height={props.height}
            heightUnit={props.heightUnit}
            width={props.width}
            widthUnit={props.widthUnit}
            radius={props.radius}
            radiusUnit={props.radiusUnit}
            margin={props.margin}
            version={i}
          />
        ))}
      </div>
    ) : null
  }
}
