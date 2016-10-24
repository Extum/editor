var flarum = require('flarum-gulp');

flarum({
    modules: {
        'xengine/flarum-markdown-editor': [
            'src/**/*.js'
        ]
    }
});