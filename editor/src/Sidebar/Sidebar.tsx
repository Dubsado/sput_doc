import { useMemo } from 'react'
import { useFetch } from 'usehooks-ts'
import { routes } from '@/config/url'
import comparePartials from './comparePartials'

import './Sidebar.css'

type Matter = {
	id: string
	index: string
	title: string
	slug: string
}

// @todo -
// new component for list items
// intent size is determinded by item.index.split('.').length

function Sidebar() {
	const { data } = useFetch<Matter[]>(routes.file.matter)

	const orderedData = useMemo(() => {
		return data?.sort((itemA, itemB) => {
			return comparePartials(itemA.index, itemB.index)
		})
	}, data)
	return <pre className="Sidebar">{JSON.stringify(orderedData, null, 3)}</pre>
}

export default Sidebar
