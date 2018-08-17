# Vue Spinners

A Vue.js port of [react-spinners](https://github.com/davidhu2000/react-spinners).

## Demo

[Demo Page](https://v653m2plw5.codesandbox.io/)

## Installation

```bash
yarn add @saeris/vue-spinners
```

## Usage

Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.

Each loader accepts a `loading` prop as a boolean. The loader will not render anything if `loading` is `false`. The `loading` prop defaults to `true`.

### Example
 
```js
import Vue from 'vue'
import { ClipLoader } from '@saeris/vue-spinners';

export const MyComponent = {
  data: () => ({
    loading: true
  }),
  render() {
    return (
      <div class='loader'>
        <ClipLoader
          class="custom-class"
          loading={this.loading}
          color={'#bada55'}
          size={150}
          sizeUnit={"px"}
        />
      </div> 
    )
  }
}
```

## Available Loaders, PropTypes, and Default Values

Common default props for all loaders:

```js
loading: true
color: '#000000'
```

For `size`, `height`, and `width` props, there are `sizeUnit`, `heightUnit`, and `widthUnit` prop that accepts `px`, `%`, or `em`. The default for the unit prop is `px`.

Loader                  | size:int | height:int | width:int | radius:int | margin:str
-----------------------:|:--------:|:----------:|:---------:|:----------:|:---------:
BarLoader               |          | `4`        | `100`     |            |
BeatLoader              | `15`     |            |           |            | `2px`
BounceLoader            | `60`     |            |           |            |
CircleLoader            | `50`     |            |           |            |
ClipLoader              | `35`     |            |           |            |
ClimbingBoxLoader       | `15`     |            |           |            |
DotLoader               | `60`     |            |           |            | `2px`
FadeLoader              |          | `15`       | `5`       | `2`        | `2px`
GridLoader              | `15`     |            |           |            |
HashLoader              | `50`     |            |           |            | `2px`
MoonLoader              | `60`     |            |           |            | `2px`
PacmanLoader            | `25`     |            |           |            | `2px`
PropagateLoader         | `15`     |            |           |            |
PulseLoader             | `15`     |            |           |            | `2px`
RingLoader              | `60`     |            |           |            | `2px`
RiseLoader              | `15`     |            |           |            | `2px`
RotateLoader            | `15`     |            |           |            | `2px`
ScaleLoader             |          | `35`       | `4`       | `2`        | `2px`
SyncLoader              | `15`     |            |           |            | `2px`