import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { useEditorStore } from '../state/store'
import './TipTap.css'

function TipTap() {
	const htmlUpdated = useEditorStore((state) => state.htmlUpdated)

	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: 'This is the beginning of something new…'
			})
		],
		onUpdate({ editor }) {
			// The content has changed.
			htmlUpdated(editor.getHTML())
		}
	})
	return (
		<div className="TipTap">
			<EditorContent editor={editor} />
		</div>
	)
}

export default TipTap
