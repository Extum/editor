System.register('xengine/flarum-markdown-editor/main', ['flarum/extend'], function (_export) {
    'use strict';

    var extend;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }],
        execute: function () {

            app.initializers.add('xengine-markdown-editor', function () {
                alert('Hello, world!');
            });
        }
    };
});