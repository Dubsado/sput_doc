import { getFilesList, getFilesRegex } from '../packer/getFiles'

test('it can find all the files in a directory', async () => {
	const files = await getFilesList('./sample_docs')
	expect(files.length).toBe(7)
})

test('it can get only markdown files based on regex', async () => {
	const files = await getFilesRegex('./sample_docs', { include: '.md' })
	expect(files.length).toBe(4)
})

test('it can find all available .md files', async () => {
	const files = await getFilesRegex('./sample_docs', { exclude: '.md' })
	expect(files.length).toBe(3)
})

test('it returns files that match the include pattern && do not match the exclude', async () => {
	const files = await getFilesRegex('./sample_docs', { exclude: '.ts', include: '.tsx' })
	expect(files.length).toBe(1)
})

test('it provides the contents of the file', async () => {
	const files = await getFilesRegex('./sample_docs', { include: '.txt' })
	expect(files.length).toBe(1)
	expect(files[0].data).toBe('i am content')
})
