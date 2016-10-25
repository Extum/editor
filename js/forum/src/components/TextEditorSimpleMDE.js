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
        this.simpleMDE = new SimpleMDE({
            element: element,
            spellChecker : false,
        })
        console.log('Asd');
    }
    /**
     * Handle input into the textarea.
     *
     * @param {String} value
     */
    oninput(value) {
        console.log(value);
        console.log('MURTEKE');
    }

    onunload() {

    }

    onsubmit() {
        const editor = this.simpleMDE;
        if (editor) {
            this.oninput(editor.value());
        }
        super.onsubmit();
    }
}