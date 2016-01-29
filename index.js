import Reflect from 'harmony-reflect';

export default (target) => new Proxy(target, {
    getPrototypeOf: (_) => Reflect.getPrototypeOf(target),
    setPrototypeOf: (_, proto) => Reflect.setPrototypeOf(target, proto),
    isExtensible: (_) => Reflect.isExtensible(target),
    preventExtensions: (_) => Reflect.preventExtensions(target),
    getOwnPropertyDescriptors: (_, property) => Reflect.getOwnPropertyDescriptors(target, property),
    defineProperty: (_, property, descriptor) => Reflect.defineProperty(target, property, descriptor),
    has: (_, property) => Reflect.has(target, property),
    get: (_, property, receiver) => Reflect.get(target, property, receiver),
    set: (_, property, value, receiver) => Reflect.set(target, property, value, receiver),
    deleteProperty: (_, property) => Reflect.deleteProperty(target, property),
    enumerate: (_) => Reflect.enumerate(target),
    ownKeys: (_) => Reflect.ownKeys(target),
    apply: (_, thisArg, argumentsList) => Reflect.apply(target, thisArg, argumentsList),
    construct: (_, argumentsList) => Reflect.construct(target, argumentsList)
});

