# pxth

> Tiny utility library for object property path handling

[![npm version](https://img.shields.io/npm/v/pxth)](https://www.npmjs.com/package/pxth)
[![npm downloads](https://img.shields.io/npm/dw/pxth)](https://www.npmjs.com/package/pxth)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/pxth)](https://www.npmjs.com/package/pxth)

## Install

```bash
npm install pxth
```

Or

```bash
yarn add pxth
```

## Api reference

Here are all functions described.

### toPxth

Convert string / number / symbol to Pxth.

Usage:

```ts
import { toPxth, ROOT_PATH } from 'pxth';

toPxth('a.b.c'); // -> ['a', 'b', 'c']

// any symbol
toPxth(Symbol()); // -> [Symbol()]
// ROOT_PATH symbol
toPxth(ROOT_PATH); // -> []

toPxth(0); // -> [0]
```

### pxthToString

Convert Pxth to string. Throws error if pxth cannot be stringified. [Here is function for check](#canBeStringified)

Usage:

```ts
import { pxthToString } from 'pxth';

pxthToString(['lol', 'b', 0, ' .as0 ']); // -> lol.b.0.[" .as0 "]

pxthToString([Symbol(), 'asdf']); // -> throws error
```

### stringToPxth

Convert string to pxth. Function [toPxth](#toPxth) calls it, if first argument is string.

```ts
import { stringToPxth } from 'pxth';

stringToPxth('hello.a.b'); // -> ['hello', 'a', 'b']
```

### get

Deeply get value from object.

Usage:

```ts
import { get } from 'pxth';

get({ a: { b: { c: 'Hello world!' } } }, toPxth('a.b.c')); // -> 'Hello world'

// third argument is default value
get({ a: 'hello' }, toPxth('b.c.d'), 'Default value'); // -> 'Default value'
```

### set

Deeply set value in object. Mutates the object and returns it. If value already exists, overwrites it.

Usage:

```ts
import { set } from 'pxth';

set({ a: { hello: 'asdf' } }, toPxth('a.hello'), 'New value'); // -> { a: { hello: 'New value' } }

set({ a: 'hello' }, toPxth('a.b'), 'New value'); // -> { a: { b: 'New value' } }
```

### isNestedPath

Determines if one path is child path of another.

Usage:

```ts
import { isNestedPath } from 'pxth';

isNestedPath(['hello', 'bye', 'yes'], ['hello']); // -> true

isNestedPath(['hello', 'bye', 'yes'], ['hello', 'bye', 'no']); // -> false
```

### longestCommonPath

Returns longest common path in array

Usage:

```ts
import { longestCommonPath } from 'pxth';

longestCommonPath([
  ['hello', 'a'],
  ['hello', 'b'],
  ['hello', 'c'],
]); // -> ['hello']

longestCommonPath([['a'], ['b'], ['c']]); // -> []
```

### canBeStringified

Function, detecting if `Pxth` instance could be stringified or not.

Usage:

```ts
import { canBeStringified } from 'pxth';

canBeStringified(['hello', 'world']); // -> true

canBeStringified([Symbol(), 'asdf']); // -> false
```

### relativePath

Make one path relative to another

Usage:

```ts
import { relativePath } from 'pxth';

relativePath(['hello', 'world'], ['hello', 'world', 'asdf']); // -> ['asdf']
relativePath(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e']); // -> ['d', 'e']
relativePath(['a'], ['b']); // -> Error
```

### toObjectKey

Convert pxth to object key

Usage:

```ts
import { toObjectKey } from 'pxth';

toObjectKey(['a', 'b', 'c']); // -> 'a.b.c'
toObjectKey([]); // -> ROOT_PATH
```

### ROOT_PATH

Constant, used in [toObjectKey](#toObjectKey) function, to convert empty Pxth to object key.

```ts
import { ROOT_PATH } from 'pxth';
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT © [Artiom Tretjakovas](https://github.com/ArtiomTr)

[Created with aqu 🌊](https://github.com/ArtiomTr/aqu#readme)
