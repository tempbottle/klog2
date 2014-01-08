/**
 * 网站设置
 */
define(function (require, exports, module) {

    module.exports = {
        'Website': ['$resource', function ($resource) {
            var Website = $resource('/admin/website.json', null, {
                update: {
                    method: 'PUT'
                }
            });

            return Website;
        }]
    };
});