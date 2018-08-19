import styled, { keyframes } from 'vue-emotion'
import { range } from '../utils'

const grid = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`

const random = top => Math.random() * top

const Wrapper = styled(`div`)`
  width: ${({ margin, size, sizeUnit }) => `${parseFloat(size) * 3 + parseFloat(margin) * 6}${sizeUnit}`};
  font-size: 0;
`

const Circle = styled(`div`)`
  display: inline-block;
  background-color: ${({ color }) => color};
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  margin: ${({ margin }) => margin};
  border-radius: 100%;
  animation-fill-mode: 'both';
  animation: ${({ rand }) => `${grid} ${rand / 100 + 0.6}s ${rand / 100 - 0.2}s infinite ease`};
`

export const GridLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 15 },
    margin: { type: String, default: `2px` },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper
        {...data}
        margin={props.margin}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        {range(9).map(_ => (
          <Circle
            color={props.color}
            margin={props.margin}
            size={props.size}
            sizeUnit={props.sizeUnit}
            rand={random(100)}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
