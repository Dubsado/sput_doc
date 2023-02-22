/**
 *  Files are specific to our use case. They are not intended
 *  to reach parity with a Nodejs API and are created and compiled
 *  at runtime of this application.
 */
interface File {
	name: string
	path: string
	data: string
	meta: any
}
