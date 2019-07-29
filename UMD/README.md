# AMD-CMD-Commonjs
AMD/CMD/Commonjs 探究



前端模块规范  在以下环境中使用

3.1 UMD (通用模块规范)


由于CommonJS和AMD风格同样受欢迎，似乎还没有达成共识。这带来了支持两种风格的“通用”模式的推动，
这使我们成为通用模块定义。

该模式无疑是丑陋的，但AMD和CommonJS兼容，并支持旧式“全局”变量定义：

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //    methods
    function myFunc(){};

    //    exposed public method
    return myFunc;
}));


并保持与上述示例相同的模式，具有多个依赖项和多个公开方法的更复杂的情况：

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery', 'underscore'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'), require('underscore'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery, root._);
    }
}(this, function ($, _) {
    //    methods
    function a(){};    //    private because it's not returned (see below)
    function b(){};    //    public because it's returned
    function c(){};    //    public because it's returned

    //    exposed public methods
    return {
        b: b,
        c: c
    }
}));