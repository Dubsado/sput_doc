// https://rixong.medium.com/javascript-sort-and-app-version-numbers-b295c6c06926
// thank you Rick Glascock

/**
 *  Function made for passing into a sort algorythm that
 *  parses through version like syntax into an ordered array
 * @param a
 * @param b
 * @returns -1 or 1 or 0
 */
export default function comparePartials(a: string, b: string) {
	if (a === b) {
		return 0
	}
	const splitA = a.split('.')
	const splitB = b.split('.')
	const length = Math.max(splitA.length, splitB.length)
	for (let i = 0; i < length; i++) {
		//FLIP
		if (
			parseInt(splitA[i]) > parseInt(splitB[i]) ||
			(splitA[i] === splitB[i] && isNaN(splitB[i + 1] as any))
		) {
			return 1
		}
		//DONT FLIP
		if (
			parseInt(splitA[i]) < parseInt(splitB[i]) ||
			(splitA[i] === splitB[i] && isNaN(splitA[i + 1] as any))
		) {
			return -1
		}
	}
	return 0
}
