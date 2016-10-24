var flarum = require('flarum-gulp');

flarum({
    modules: {
        'xengine/flarum-ext-markdown-editor': [
            'src/**/*.js'
        ]
    }
});