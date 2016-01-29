'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _harmonyReflect = require('harmony-reflect');

var _harmonyReflect2 = _interopRequireDefault(_harmonyReflect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (target) {
    return new Proxy(target, {
        getPrototypeOf: function getPrototypeOf(_) {
            return _harmonyReflect2.default.getPrototypeOf(target);
        },
        setPrototypeOf: function setPrototypeOf(_, proto) {
            return _harmonyReflect2.default.setPrototypeOf(target, proto);
        },
        isExtensible: function isExtensible(_) {
            return _harmonyReflect2.default.isExtensible(target);
        },
        preventExtensions: function preventExtensions(_) {
            return _harmonyReflect2.default.preventExtensions(target);
        },
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(_, property) {
            return _harmonyReflect2.default.getOwnPropertyDescriptors(target, property);
        },
        defineProperty: function defineProperty(_, property, descriptor) {
            return _harmonyReflect2.default.defineProperty(target, property, descriptor);
        },
        has: function has(_, property) {
            return _harmonyReflect2.default.has(target, property);
        },
        get: function get(_, property, receiver) {
            return _harmonyReflect2.default.get(target, property, receiver);
        },
        set: function set(_, property, value, receiver) {
            return _harmonyReflect2.default.set(target, property, value, receiver);
        },
        deleteProperty: function deleteProperty(_, property) {
            return _harmonyReflect2.default.deleteProperty(target, property);
        },
        enumerate: function enumerate(_) {
            return _harmonyReflect2.default.enumerate(target);
        },
        ownKeys: function ownKeys(_) {
            return _harmonyReflect2.default.ownKeys(target);
        },
        apply: function apply(_, thisArg, argumentsList) {
            return _harmonyReflect2.default.apply(target, thisArg, argumentsList);
        },
        construct: function construct(_, argumentsList) {
            return _harmonyReflect2.default.construct(target, argumentsList);
        }
    });
};
