# require-esm

Use `default` while requiring an esmodule

## How to use

```js
// a.js
export default 1;

// b.js
import req from 'require-esm';
// import a from 'a'
// const a = require('a').default;
const a = req(require('a'));
export default { a, b: 2 }
```
