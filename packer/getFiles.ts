import { readdir, readFile } from 'fs/promises'
import { safeLoadFront } from 'yaml-front-matter'

/**
 * This function is intended to work recursively.
 * @param dirName a string value of what folder we'd like to peak into
 * @returns an array of files by relative path
 */
export async function getFilesList(dirName: string) {
	const files: File[] = []
	const items = await readdir(dirName, { withFileTypes: true })

	for (const item of items) {
		if (item.isDirectory()) {
			// @todo this should be an option passed in IMHO
			if (item.name !== 'node_modules')
				files.push(...(await getFilesList(`${dirName}/${item.name}`)))
		} else {
			const path = `${dirName}/${item.name}`
			const data = await readFile(path, { encoding: 'utf8' })
			files.push({
				path,
				name: item.name,
				data,
				meta: safeLoadFront(data)
			})
		}
	}
	return files
}

/**
 * A helper function that let's us know if the file
 * matches the incoming filter-search.
 * @param file the string value of the file path
 * @param search the pattern for the file types we are searching for
 */
function fileMatches(file: string, search: string) {
	// if we're not filtering by anything it's a match
	if (!search) {
		throw new Error(`Search is a required field inside fileMatches`)
	}
	const matches = file.match(/\.[0-9a-z]+$/i)
	if (!matches) {
		return false
	}
	return matches[0].toLowerCase() === search.toLocaleLowerCase()
}

/**
 *  The include and exclude properties are for this alpha
 *  environment simply single values for a file type.
 *  Eventually it would be nice to grow this into glob patterns.
 *  https://blog.logrocket.com/understanding-using-globs-node-js/
 *  https://www.tabnine.com/code/javascript/modules/glob
 */
interface Filter {
	include?: string
	exclude?: string
}

/**
 * Gets all of the files and then filters them based on a REGEX
 * @param dirName a string value of what folder we'd like to peak into
 * @param filter a configurable object for files to include or exclude
 */
export async function getFilesRegex(dirName: string, filter: Filter) {
	const files = (await getFilesList(dirName)).filter((file) => {
		if (filter.exclude && filter.include) {
			return !fileMatches(file.name, filter.exclude) && fileMatches(file.name, filter.include)
		}
		if (filter.include && fileMatches(file.name, filter.include)) {
			return true
		}
		if (filter.exclude && !fileMatches(file.name, filter.exclude)) {
			return true
		}
		// since this function is only called when we're
		// filtering, if there are no catches the default
		// should be to not include the file
		return false
	})
	return files
}
