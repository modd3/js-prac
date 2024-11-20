function fibbionacci(n) {

	var num_array = [];
	
	if (n === 1) {
		num_array = [0];
	}
	else if (n === 2) {
		num_array = [0,1];
	}
	else {
		num_array = [0,1];
		for (let i = 2; i < n; i++) {
			num = num_array[num_array.length -1] + num_array[num_array.length - 2];
			num_array.push(num);
		}
	}
	return num_array;
}


c = fibbionacci(6);
console.log(c);
