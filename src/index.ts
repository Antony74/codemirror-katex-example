import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { latex } from 'codemirror-lang-latex';
import katex from 'katex';

const editor = document.getElementById('editor');

if (!editor) {
    throw new Error('Editor element not found');
}

const view = new EditorView({
    doc: editor.textContent,
    extensions: [
        basicSetup,
        latex(),
        EditorView.updateListener.of((view) => {
            if (view.docChanged) {
                onchange();
            }
        }),
    ],
    parent: document.getElementById('editor-container')!,
});

editor.remove();
view.dom.id = 'editor';

const onchange = () => {
    try {
        const preview = katex.renderToString(view.state.doc.toString(), {
            displayMode: true,
            macros: {
                '\\f': '#1f(#2)',
            },
            output: 'html',
        });

        document.getElementById('preview')!.innerHTML = preview;
    } catch (e) {
        if (e instanceof Error) {
            document.getElementById('preview')!.innerHTML = e.message;
        }
    }
};

onchange();
