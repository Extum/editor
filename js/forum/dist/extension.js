System.register('xengine/mdeditor/main', ['flarum/extend', 'flarum/app'], function (_export) {
    'use strict';

    var extend, app;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-mdeditor', function () {
                alert('Hello, world!');
            });
        }
    };
});