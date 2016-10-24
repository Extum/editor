System.register('xengine/flarum-markdown-editor/main', ['flarum/app'], function (_export) {
    'use strict';

    var app;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-markdown-editor', function () {
                alert('Hello, world!');
            });
        }
    };
});