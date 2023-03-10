type GetFileParams = {
	params: {
		/** id: the path from the client */
		id: string
	}
	set: any
}
/**
 * Gets an individual file by path / alias / shortname
 * @param param0
 * @returns a string value for the response
 */
export default function getFile({ set, params: { id } }: GetFileParams) {
	try {
		JSON.parse('hello world')
	} catch {
		set.status = 400
		return `not valid JSON`
	}

	return `the file you are looking for is of id:${id}`
}
