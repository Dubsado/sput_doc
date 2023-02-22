import { getFilesRegex } from '../packer/getFiles'

test('it provides the front matter embedded in the file', async () => {
	const files = await getFilesRegex('./sample_docs', { include: '.md' })
	const file = files.find((file) => file.name === 'someSubComponent.md')
	if (!file) {
		throw new Error(`We that's weird, this file **should** exist`)
	}
	expect(file.meta.butt).toBe('for farting')
	expect(file.meta.directions.length).toBe(2)
	expect(file.meta.author.name).toBe('jake')
})
