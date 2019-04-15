# Simple Skeleton Loader

Fork of https://github.com/henrykuzmick/react-skeleton-loader

`simple-skeleton-loader` is a cross platform component designed to help you easily integrate custom animated skeletons for loading states. It best works with text elements as it adopts to the fonts size and line height of your content, but it can be easily fitted to use with other objects like images and avatars.

## Basic Usage

The components you create should have loading states embeded in them. You can do this however you want. You could rely on state changes, promise responses, or simply checking if the props passed aren't undefined.

```jsx
// React / JSX
import Skeleton from 'simple-skeleton-loader/dist/skeleton-loader';

const Page = (props) => {
  return(
    <div>
      <h1>props.title | <Skeleton /></h1>
      <p>props.body | <Skeleton count={5} /></p>
    </div>
  )
}
```

## Properties

| Property           | Attribute           | Description | Type      | Default     |
| ------------------ | ------------------- | ----------- | --------- | ----------- |
| `animated`         | `animated`          |             | `boolean` | `true`      |
| `borderRadius`     | `border-radius`     |             | `string`  | `"8px"`     |
| `color`            | `color`             |             | `string`  | `"#EFF1F6"` |
| `count`            | `count`             |             | `number`  | `1`         |
| `height`           | `height`            |             | `string`  | `"100%"`    |
| `heightRandomness` | `height-randomness` |             | `number`  | `0`         |
| `width`            | `width`             |             | `string`  | `"150px"`   |
| `widthRandomness`  | `width-randomness`  |             | `number`  | `0.25`      |

---

_Built with [StencilJS](https://stenciljs.com/)_
