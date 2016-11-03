System.register('xengine/mdeditor/components/TextEditorPageDown', ['flarum/helpers/listItems', 'flarum/components/TextEditor'], function (_export) {
    'use strict';

    var listItems, TextEditor, TextEditorPageDown;
    return {
        setters: [function (_flarumHelpersListItems) {
            listItems = _flarumHelpersListItems['default'];
        }, function (_flarumComponentsTextEditor) {
            TextEditor = _flarumComponentsTextEditor['default'];
        }],
        execute: function () {
            TextEditorPageDown = (function (_TextEditor) {
                babelHelpers.inherits(TextEditorPageDown, _TextEditor);

                function TextEditorPageDown() {
                    babelHelpers.classCallCheck(this, TextEditorPageDown);
                    babelHelpers.get(Object.getPrototypeOf(TextEditorPageDown.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(TextEditorPageDown, [{
                    key: 'init',
                    value: function init() {
                        this.value = m.prop(this.props.value || '');
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        return m(
                            'div',
                            { className: 'TextEditor' },
                            m('div', { id: 'wmd-button-bar' }),
                            m('textarea', { className: 'FormControl Composer-flexible',
                                id: 'wmd-input',
                                config: this.configTextarea.bind(this),
                                oninput: m.withAttr('value', this.oninput.bind(this)),
                                placeholder: this.props.placeholder || '',
                                disabled: !!this.props.disabled,
                                value: this.value() }),
                            m(
                                'ul',
                                { className: 'TextEditor-controls Composer-footer' },
                                listItems(this.controlItems().toArray())
                            )
                        );
                    }
                }, {
                    key: 'configTextarea',
                    value: function configTextarea(element, isInitialized) {
                        var _this = this;

                        if (isInitialized) return;

                        var converter = Markdown.getSanitizingConverter();
                        this.PageDown = new Markdown.Editor(converter);
                        this.PageDown.run();

                        var handler = function handler() {
                            _this.onsubmit();
                            m.redraw();
                        };

                        $(element).bind('keydown', 'meta+return', handler);
                        $(element).bind('keydown', 'ctrl+return', handler);
                    }
                }]);
                return TextEditorPageDown;
            })(TextEditor);

            _export('default', TextEditorPageDown);
        }
    };
});;
System.register('xengine/mdeditor/main', ['flarum/extend', 'flarum/app', 'flarum/components/ComposerBody', 'xengine/mdeditor/components/TextEditorPageDown'], function (_export) {
    'use strict';

    var extend, app, ComposerBody, TextEditorPageDown;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsComposerBody) {
            ComposerBody = _flarumComponentsComposerBody['default'];
        }, function (_xengineMdeditorComponentsTextEditorPageDown) {
            TextEditorPageDown = _xengineMdeditorComponentsTextEditorPageDown['default'];
        }],
        execute: function () {

            app.initializers.add('xengine-mdeditor', function () {
                extend(ComposerBody.prototype, 'init', function init() {
                    this.editor = new TextEditorPageDown({
                        submitLabel: this.props.submitLabel,
                        placeholder: this.props.placeholder,
                        onchange: this.content,
                        onsubmit: this.onsubmit.bind(this),
                        value: this.content()
                    });
                });
            });
        }
    };
});