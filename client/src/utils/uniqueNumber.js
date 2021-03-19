export const uniqueNumber = () => {
	const unique = 2021435001
	const random = unique + Math.abs(Math.round(Math.random() * 60) / 2)
	let numb = 0
	if (random.toString().split(' ').length < 11) {
		const newNumb = random.toString().replace('.', '')
		numb = +newNumb
	} else {
		numb = +random
	}
	return numb
}
