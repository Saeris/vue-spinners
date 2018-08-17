/* @flow */
export const calculateRgba = (color, opacity) => {
  if (color[0] === '#') {
    color = color.slice(1)
  }

  if (color.length === 3) {
    let res = ''
    color.split('').forEach(c => {
      res += c
      res += c
    })
    color = res
  }

  let rgbValues = color
    .match(/.{2}/g)
    .map(hex => parseInt(hex, 16))
    .join(', ')
  return `rgba(${rgbValues}, ${opacity})`
}

export const range = (
  size: number,
  startAt: number = 0
): $ReadOnly<Array<number>> => [...Array(size).keys()].map(i => i + startAt)

export const characterRange = (
  startChar: string,
  endChar: string
): $Readonly<Array<string>> =>
  String.fromCharCode(
    ...range(
      endChar.charCodeAt(0) - startChar.charCodeAt(0),
      startChar.charCodeAt(0)
    )
  )

export const zip = (
  arr: Array<any>,
  ...arrs: Array<any>
): $ReadOnly<Array<any>> =>
  arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]))
