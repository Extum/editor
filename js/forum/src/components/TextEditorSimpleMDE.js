/* global $ */
/* global m */
/* global tinymce */

import TextEditor from 'flarum/components/TextEditor';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class TextEditorSimpleMDE extends TextEditor {
    init() {
        this.value = m.prop(this.props.value || '');
        this.loading = false;
        m.redraw(true);
    }

    view() {
        console.log('asd');
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
                            <textarea config={this.configTextarea.bind(this)} class="TextEditor-Container"></textarea>
                        </div>
                    )}
            </div>
        );
    }

    configTextarea(element, isInitialized) {
        console.log(element);
        if (isInitialized) return;
        this.simpleMDE = new SimpleMDE({
            element: element
        })
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