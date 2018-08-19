import styled, { css, keyframes } from 'vue-emotion'
import { characterRange, range, zip } from '../utils'

const fade = keyframes`
  50% {opacity: 0.3}
  100% {opacity: 1}
`

const rad = 20
const quarter = rad / 2 + rad / 5.5

const Wrapper = styled(`div`)`
  position: relative;
  font-size: 0;
  top: ${rad}px;
  left: ${rad}px;
  width: ${rad * 3}px;
  height: ${rad * 3}px;
`

const Bar = styled(`div`)`
  position: absolute;
  width: ${({ width, widthUnit }) => `${width}${widthUnit}`};
  height: ${({ height, heightUnit }) => `${height}${heightUnit}`};
  margin: ${({ margin }) => margin};
  background-color: ${({ color }) => color};
  border-radius: ${({ radius, radiusUnit }) => `${radius}${radiusUnit}`};
  transition: 2s;
  animation-fill-mode: 'both';
  animation: ${({ version }) => `${fade} 1.2s ${version * 0.12}s infinite ease-in-out`};
  ${({ variation }) => variation}
`

const styles = {
  a: css`
    top: ${rad}px;
    left: 0;
  `,
  b: css`
    top: ${quarter}px;
    left: ${quarter}px;
    transform: rotate(-45deg);
  `,
  c: css`
    top: 0;
    left: ${rad}px;
    transform: rotate(90deg);
  `,
  d: css`
    top: ${-quarter}px;
    left: ${quarter}px;
    transform: rotate(45deg);
  `,
  e: css`
    top: ${-rad}px;
    left: 0;
  `,
  f: css`
    top: ${-quarter}px;
    left: ${-quarter}px;
    transform: rotate(-45deg);
  `,
  g: css`
    top: 0;
    left: ${-rad}px;
    transform: rotate(90deg);
  `,
  h: css`
    top: ${quarter}px;
    left: ${-quarter}px;
    transform: rotate(45deg);
  `
}

const rows = zip(characterRange(`a`, `i`).split(``), range(9, 1))

export const FadeLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    height: { type: Number, default: 15 },
    width: { type: Number, default: 5 },
    margin: { type: String, default: `2px` },
    radius: { type: Number, default: 2 },
    widthUnit: { type: String, default: `px` },
    heightUnit: { type: String, default: `px` },
    radiusUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper {...data}>
        {rows.map(([style, i]) => (
          <Bar
            color={props.color}
            margin={props.margin}
            width={props.width}
            widthUnit={props.widthUnit}
            height={props.height}
            heightUnit={props.heightUnit}
            radius={props.radius}
            radiusUnit={props.radiusUnit}
            variation={styles[style]}
            version={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
