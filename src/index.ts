import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { latex } from 'codemirror-lang-latex';

const editor = document.getElementById('editor');

if (!editor) {
    throw new Error('Editor element not found');
}

const view = new EditorView({
    doc: editor.textContent,
    extensions: [basicSetup, latex()],
    parent: document.body,
});

editor.remove();
view.dom.id = 'editor';
