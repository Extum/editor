/* global $ */
/* global m */
/* global tinymce */

import TextEditor from 'flarum/components/TextEditor';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import listItems from 'flarum/helpers/listItems';

export default class TextEditorSimpleMDE extends TextEditor {
    init() {
        this.value = m.prop(this.props.value || '');
        this.loading = false;
        m.redraw(true);
    }

    view() {
        return (
            <div className="TextEditor TextEditor-SimpleMDE">
                {this.loading ?
                    (
                        <p className="TextEditor-placeholder">
                            {LoadingIndicator.component({size: 'large'})}
                        </p>
                    ) :
                    (
                        <div>
                            <div>
                                <textarea config={this.configTextarea.bind(this)} class="TextEditor-Container"></textarea>
                            </div>
                            <ul className="TextEditor-controls Composer-footer">
                                {listItems(this.controlItems().toArray())}
                            </ul>
                        </div>
                    )}
            </div>
        );
    }

    configTextarea(element, isInitialized) {
        if (isInitialized) return;
        console.log('mael');
        this.simpleMDE = new SimpleMDE({
            element: element,
            spellChecker : false,
            placeholder : this.props.placeholder
        })
        this.editorInited(this.simpleMDE);
    }
    editorInited(editor) {
        editor.value(this.value());
        const onChange = () => {
            this.oninput(editor.value());
        };
        editor.codemirror.on('change', onChange);
    }

    setValue(value) {
        this.simpleMDE.value(value);
    }

    onunload() {
        const editor = this.simpleMDE();
        if (editor) {
            editor.toTextArea();
            this.simpleMDE = null;
        }
        super.onunload();
    }
    onsubmit() {
        const editor = this.simpleMDE;
        if (editor) {
            this.oninput(editor.value());
        }
        super.onsubmit();
    }
}