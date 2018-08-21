# Vue Spinners

A Vue.js port of [react-spinners](https://github.com/davidhu2000/react-spinners).

## Demo

[Demo Sandbox](https://codesandbox.io/s/github/Saeris/vue-spinners/tree/master/example)
[Demo Page](https://vue-spinners.saeris.io/)

## Installation

```bash
yarn add @saeris/vue-spinners
```

## Usage

There are a number of ways you can use this library! Here are a few examples:

**[Vue Plugin](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)**
```js
import Vue from 'vue'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)

// Each spinner can now be used in your templates anywhere in the app!
```

**[Local Component Registration](https://vuejs.org/v2/guide/components-registration.html#Local-Registration)**
```js
import { BarLoader } from '@saeris/vue-spinners'

export default {
  components: {
    BarLoader
  },
  // ...
}
```

**[JSX Component](https://vuejs.org/v2/guide/render-function.html#JSX)**

```js
import { BarLoader } from '@saeris/vue-spinners'

export default {
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

**[Unpkg Import](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#What-does-my-packaged-component-look-like)**
```html
<!--Load libraries in your page's header-->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@saeris/vue-spinners"></script>

<!--Use a component somewhere in your app-->
<div id="app">
  <bar-loader class="custom-class" :color="#bada55" :loading="loading" :size="150" :sizeUnit="px"></bar-loader>
</div>

<script>
  new Vue({ el: '#app', data: { loading: true } })
</script>
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
ClimbingBoxLoader       | `15`     |            |           |            |
ClipLoader              | `35`     |            |           |            |
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
SkewLoader              | `20`     |            |           |            |
SquareLoader            | `50`     |            |           |            |
SyncLoader              | `15`     |            |           |            | `2px`

## Acknowledgements

This library is a Vue port of [react=spinners](https://github.com/davidhu2000/react-spinners) by [David Hu](https://github.com/davidhu2000), who's library is based on [Halogen](https://github.com/yuanyan/halogen).
