# Object.assign plugin for Babel

Babel plugin that replaces `Object.assign()` with the extends helper.

Useful to reduce the need for additional polyfills or libraries when you want something that extends objects in browsers without native support.

Thanks to @sebmck for the implementation.

## Usage

Instead of using `_.extend(obj1, obj2...)` or `xtend(obj1, obj2...)` just use `Object.assign` in your code and include this plugin for Babel.

Install:

```
$ npm install babel babel-core babel-plugin-object-assign
```

_Note:_ you need to specify `babel-core` as a dependency for your project (not just `babel`). This is also true if you are using a wrapper like `babelify`.

Use:


```
$ babel --plugins object-assign script.js
```

or:

```js
require("babel").transform("code", { plugins: ["object-assign"] });
```

with `browserify` / `babelify`:

```js
var b = browserify({
  // browserifyoptions
}).transform(
  babelify.configure({
    plugins: ["object-assign"]
  })
);
```

# License

The MIT License (MIT)

Copyright (c) 2015 Jed Watson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
