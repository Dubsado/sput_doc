import React, { useEffect, useState } from 'react'
import './EditMeta.css'

//if we'd like to debounce, this looks helpful https://usehooks-ts.com/react-hook/use-debounce
/**
 * 	A toolbar full of the Markdown front matter
 */
function EditMeta() {
	const [state, setState] = useState({ slug: '', id: '' })

	const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => ({
			...state,
			[target.name]: target.value
		}))
	}

	useEffect(() => {
		console.log('state is: ', state)
	}, [state])

	return (
		<div className="EditMeta">
			<label>Slug</label>
			<input type="text" value={state.slug} name="slug" onChange={onChange} />

			<label>ID</label>
			<input type="text" value={state.id} name={'id'} onChange={onChange} />

			<pre>{JSON.stringify(state, null, 3)}</pre>
		</div>
	)
}

export default EditMeta
