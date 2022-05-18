# bakeryjs/builder

Generic Builder pattern implementation to simplify the object creation process in JavaScript.

## Installation

Install library via npm:

```bash
$ npm install @bakeryjs/builder
```

## How to use

<!-- prettier-ignore -->
```javascript
const prototype = { name: '', age: 0 };
const user = Builder(prototype)
  .name('John')
  .age(12)
  .build(); // { name: 'John', age: 12 }
```

It is possible to use `Builder` as with object as with class or function.

**Note**: keyword `build` reserved by `Builder` and cannot be used as a variable name in prototype object.
