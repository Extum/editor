System.register('xengine/flarum-ext-markdown-editor/main', ['flarum/extend', 'flarum/app'], function (_export) {
    'use strict';

    var extend, app;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-markdown-editor', function () {
                alert('Hello, world!');
            });
        }
    };
});