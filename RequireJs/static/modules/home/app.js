/**
 * home页面入口
 * @author :    limeifenga
 * @version :   1.0
 */
requirejs.config({
    baseUrl: '../static/modules',
    paths: {
        'jquery': '../lib/jquery/jquery.min',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'bootbox': '../lib/bootbox/bootbox',
        'config': 'home/config'
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$.fn.popover"
        },
        'bootbox': {
            deps: ['jquery', 'bootstrap'],
            exports: 'bootbox'
        }
    }
});
requirejs([
        'jquery',
        'config',
        'bootstrap',
        'bootbox',
        'common/utils',
        'home/main/home'
    ],
    function ($, config, bootstrap,bootbox, utils,home) {
        console.log('app', $)
        console.log('app', config)
        console.log('app', bootstrap)
        console.log('app', utils)
        home()
        console.log('app', bootbox)
    }
);