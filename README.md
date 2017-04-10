# trim-with

[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/trim-with.svg)](https://greenkeeper.io/)

Functional array trimming: provide a function that decides whether a value
is falsy, and this trims the array from both sides.

```js
var trimWith = require('trim-with');

trimWith([0, 1, 0], function(element) {
  // removes falsy values from sides
  return !element;
});
```
