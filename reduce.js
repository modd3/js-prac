arr = [[1,2,4,5,64,3,5,78,9], [1,4,9,768,9,5,]];
function flatten(array) {
	return array.reduce((a, b) => {
		return a.concat(b);
	}, [])
}
//console.log(arr)
console.log(flatten(arr))
