var flarum = require('flarum-gulp');

flarum({
    files: [
        'library/SimpleMDE.js'
    ],
    modules: {
        'xengine/mdeditor': [
            'src/**/*.js'
        ]
    }
});