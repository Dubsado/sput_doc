import { create } from 'zustand'

interface EditorState {
	html: string
	htmlUpdated: (content: string) => void
	clear: () => void
}

export const useEditorStore = create<EditorState>()((set) => ({
	html: '',
	htmlUpdated: (content: string = '') => set((state) => ({ html: content })),
	clear: () => set({ html: '' })
}))
