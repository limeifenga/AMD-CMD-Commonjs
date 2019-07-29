define(
    ['jquery','config'],function ($, config) {
        console.log('ajax', $)
        console.log('ajax', config)

        function errorHandle(requestObj, errorInfo, msgInfo) {
            var contentType = requestObj.getResponseHeader('content-type');
            //用于未登录时，跳转首页。
            if (contentType && contentType.indexOf('text/html') > -1) {
                window.location.href = config.AJAX_PREFIX + 'user/index';
            }
        }

        let ajax = function (setting) {
            setting['error'] = errorHandle;
            $.ajax(setting)
        }
        
        return {
            ajax
        }
    }
)