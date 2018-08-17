import styled, { keyframes } from 'vue-emotion'
import { range } from './utils'

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`

const El = styled(`div`)`
   {
    background-color: ${({ color }) => color};
    width: ${({ width, widthUnit }) => `${width}${widthUnit}`};
    height: ${({ height, heightUnit }) => `${height}${heightUnit}`};
    margin: ${({ margin }) => margin};
    border-radius: ${({ radius, radiusUnit }) => `${radius}${radiusUnit}`};
    display: inline-block;
    animation: ${scale} 1s ${({ version }) => version * 0.1}s infinite
      cubic-bezier(0.2, 0.68, 0.18, 1.08);
    animation-fill-mode: both;
  }
`

export const ScaleLoader = {
  functional: true,
  props: {
    loaderStyle: { type: Object, default: () => ({}) },
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
  render(h, { props }) {
    return props.loading ? (
      <div class={props.loaderStyle}>
        {range(5, 1).map(i => (
          <El
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
