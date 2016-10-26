import {extend} from 'flarum/extend';
import app from 'flarum/app';
import ComposerBody from 'flarum/components/ComposerBody';
import Composer from 'flarum/components/Composer';
import TextEditorSimpleMDE from 'xengine/mdeditor/components/TextEditorSimpleMDE';
import computed from 'flarum/utils/computed';

var GlobalEditor;

app.initializers.add('xengine-mdeditor', () => {
    extend(Composer.prototype, 'init', function init() {
        this.computedHeight = computed('height', 'position', (height, position) => {
            if (position === Composer.PositionEnum.MINIMIZED) {
                return '';
            } else if (position === Composer.PositionEnum.FULLSCREEN) {
                return $(window).height();
            }
            //set minimum height for SimpleMDE!
            return Math.max(360, Math.min(height, $(window).height() - $('#header').outerHeight()));
        });
    });
    extend(Composer.prototype, 'updateHeight', function updateHeight() {
        var height = this.computedHeight(),
            CodeMirror = $('.CodeMirror');
        CodeMirror.css('height', height - 200);
    });
    extend(Composer.prototype, 'fullScreen', () => {
        var CodeMirror = $('.CodeMirror'),
            height = $(window).height() - 260;

        CodeMirror.css('height', height);
    })

    extend(ComposerBody.prototype, 'init', function init() {
        this.editor = new TextEditorSimpleMDE({
            submitLabel: this.props.submitLabel,
            placeholder: this.props.placeholder,
            onchange: this.content,
            onsubmit: this.onsubmit.bind(this),
            value: this.content(),
        });
        GlobalEditor = this.editor;
    });
});
