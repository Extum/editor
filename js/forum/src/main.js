import { extend } from 'flarum/extend';
import app from 'flarum/app';
import ComposerBody from 'flarum/components/ComposerBody';
import Composer from 'flarum/components/Composer';


app.initializers.add('xengine-mdeditor', () => {
    extend(ComposerBody.prototype, 'init', function init() {
        this.editor = new SimpleMDE();
    });
});

//zunk