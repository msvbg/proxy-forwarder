# proxy-forwarder

> An ES2015 Proxy that forwards every available trap to a new target.

![Build status](https://img.shields.io/travis/msvbg/proxy-forwarder.svg)

`proxy-forwarder` implements all traps listed at [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) for an object, forwarding every trappable operation to a target object. Requires ES2015 Proxy support. In node, that means passing `--harmony_proxies` as a command line argument.

## Install
```
npm i --save proxy-forwarder
```

## Example
```js
import forward from 'proxy-forwarder';

let object = { x: 5 };
let mirror = forward(object);

mirror.x = 6;

assert(object.x === 6);
```

## License
MIT © Martin Svanberg
