var flarum = require('flarum-gulp');

flarum({
    files: [
        'src/simplemde.js'
    ],
    modules: {
        'xengine/mdeditor': [
            'src/**/*.js'
        ]
    }
});