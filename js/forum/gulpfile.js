var flarum = require('flarum-gulp');

flarum({
    modules: {
        'xengine/mdeditor': [
            'src/**/*.js'
        ]
    }
});