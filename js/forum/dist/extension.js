System.register('xengine/flarum-ext-markdown-editor/main', [], function (_export) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            app.initializers.add('xengine-markdown-editor', function () {
                alert('Hello, world!');
            });
        }
    };
});