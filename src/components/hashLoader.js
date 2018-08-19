import styled, { keyframes } from 'vue-emotion'
import { calculateRgba, range } from '../utils'

const thickness = size => size / 5
const lat = size => (size - thickness(size)) / 2
const offset = size => lat(size) - thickness(size)
const getColor = color => calculateRgba(color, 0.75)

const before = (size, sizeUnit, color) => keyframes`
  0% {width: ${thickness(size)}px;box-shadow: ${lat(size)}px ${-offset(
  size
)}px ${getColor(color)}, ${-lat(size)}px ${offset(size)}px ${getColor(color)}}
  35% {width: ${`${size}${sizeUnit}`};box-shadow: 0 ${-offset(
  size
)}px ${getColor(color)}, 0 ${offset(size)}px ${getColor(color)}}
  70% {width: ${thickness(size)}px;box-shadow: ${-lat(size)}px ${-offset(
  size
)}px ${getColor(color)}, ${lat(size)}px ${offset(size)}px ${getColor(color)}}
  100% {box-shadow: ${lat(size)}px ${-offset(size)}px ${getColor(
  color
)}, ${-lat(size)}px ${offset(size)}px ${getColor(color)}}
`

const after = (size, sizeUnit, color) => keyframes`
  0% {height: ${thickness(size)}px;box-shadow: ${offset(size)}px ${lat(
  size
)}px ${getColor(color)}, ${-offset(size)}px ${-lat(size)}px ${getColor(color)}}
  35% {height: ${`${size}${sizeUnit}`};box-shadow: ${offset(
  size
)}px 0 ${getColor(color)}, ${-offset(size)}px 0 ${getColor(color)}}
  70% {height: ${thickness(size)}px;box-shadow: ${offset(size)}px ${-lat(
  size
)}px ${getColor(color)}, ${-offset(size)}px ${lat(size)}px ${getColor(color)}}
  100% {box-shadow: ${offset(size)}px ${lat(size)}px ${getColor(
  color
)}, ${-offset(size)}px ${-lat(size)}px ${getColor(color)}}
`

const Wrapper = styled(`div`)`
  position: relative;
  width: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size}${sizeUnit}`};
  transform: rotate(165deg);
`

const Lines = styled(`div`)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: ${({ size, sizeUnit }) => `${size / 5}${sizeUnit}`};
  height: ${({ size, sizeUnit }) => `${size / 5}${sizeUnit}`};
  border-radius: ${({ size, sizeUnit }) => `${size / 10}${sizeUnit}`};
  transform: translate(-50%, -50%);
  animation: ${({ size, sizeUnit, color, version }) => `${(version === 1 ? before(size, sizeUnit, color) : after(size, sizeUnit, color))} 2s infinite normal none running`};
  content: '';
`

export const HashLoader = {
  functional: true,
  props: {
    loading: { type: Boolean, default: true },
    color: { type: String, default: `#000000` },
    size: { type: Number, default: 50 },
    sizeUnit: { type: String, default: `px` }
  },
  render(h, { props, data }) {
    return props.loading ? (
      <Wrapper
        {...data}
        size={props.size}
        sizeUnit={props.sizeUnit}
      >
        {range(2, 1).map(i => (
          <Lines
            size={props.size}
            sizeUnit={props.sizeUnit}
            color={props.color}
            version={i}
          />
        ))}
      </Wrapper>
    ) : null
  }
}
