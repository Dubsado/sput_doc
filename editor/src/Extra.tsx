import { useEditorStore } from './state/store.js'
import TurndownService from 'turndown'

import './Extra.css'

const truncate = (input: string, maxLength: number = 142) =>
	input.length > maxLength ? `...${input.substring(input.length - maxLength, input.length)}` : input

function Extra() {
	const html = useEditorStore((state) => state.html)
	var turndownService = new TurndownService({
		headingStyle: 'atx',
		bulletListMarker: '-',
		emDelimiter: '*'
	})
	const markdown = turndownService.turndown(html)
	return <code className="Extra">{truncate(markdown, 442)}</code>
}

export default Extra
