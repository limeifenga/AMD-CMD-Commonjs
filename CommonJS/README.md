# AMD-CMD-Commonjs
AMD/CMD/Commonjs 探究



前端模块规范  在以下环境中使用

2、node端  微信小程序开发工具
            2.1 CommonJS (同步模块规范)


//    dependencies
var $ = require('jquery');

//    methods
function myFunc(){};

//    exposed public method (single)
module.exports = myFunc;


//    filename: foo.js
var $ = require('jquery');
var _ = require('underscore');

//    methods
function a(){};    //    private because it's omitted from module.exports (see below)
function b(){};    //    public because it's defined in module.exports
function c(){};    //    public because it's defined in module.exports

//    exposed public methods
module.exports = {
    b: b,
    c: c
};
