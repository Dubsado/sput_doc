import { readdir } from 'fs/promises'

type SidebarMeta = {
	/** where the file lives on the server disk */
	filePath: string
	/** linkeTitle: can override the link title  */
	linkTitle?: string
	/** page title, also becomes the default sidebar link title for itself  */
	title: string
}
/**
 * Construct what the sidebar should look like based on the files
 * currently being passed in.
 * @param allFiles a string value of what folder we'd like to peak into
 * @returns {SidebarMeta} an array of files by relative path
 */
export async function getSidebarMeta(allFiles: File[]) {
	const items: SidebarMeta[] = []
	return items
}
