import { Elysia } from 'elysia'
import getFile from './Files/getFile'
import getMatter from './Files/getMatter'
// https://elysiajs.com/

const app = new Elysia()
	.get(
		'/',
		() => `Hello Elysia
        I are programmer. 
        HEAR ME ROAR!`
	)
	.listen(3000)

app.group('/v1', (app) =>
	app
		.get('/', () => 'Using v1')
		.group('/file', (app) => app.get('/matter', getMatter).get('/:id', getFile))
)

/**
 *  we log here because that's what you do when you create a server
 */
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
