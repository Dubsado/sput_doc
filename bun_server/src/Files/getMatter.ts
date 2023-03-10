import { files } from './store'
/**
 * Gets all front matter for the given current working directory
 * @param param0
 * @returns a string value for the response
 */
export default async function getMatter() {
	return files.reduce((acc, file) => {
		if (file?.meta && Object.keys(file.meta).length > 1) {
			delete file.meta.__content
			acc.push(file.meta)
		}
		return acc
	}, [])
}
