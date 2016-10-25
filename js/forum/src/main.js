import { extend } from 'flarum/extend';
import app from 'flarum/app';
import ComposerBody from 'flarum/components/ComposerBody';
import TextEditorSimpleMDE from 'xengine/mdeditor/components/TextEditorSimpleMDE';


app.initializers.add('xengine-mdeditor', () => {
    extend(ComposerBody.prototype, 'init', function init() {
        this.editor = new TextEditorSimpleMDE({
            submitLabel: this.props.submitLabel,
            placeholder: this.props.placeholder,
            onchange: this.content,
            onsubmit: this.onsubmit.bind(this),
            value: this.content(),
        });
    });
});

//zunk