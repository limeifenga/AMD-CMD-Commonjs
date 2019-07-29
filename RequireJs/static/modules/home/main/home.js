define(
    [
     'common/ajax',
        'bootbox',
        'config'
    ],
    function (ajax, bootbox, config) {
        console.log('home',ajax)
        console.log('home',bootbox)
        console.log('home',config)
        const init = function () {
            console.log('init')
        }
        return init
    }
)