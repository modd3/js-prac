function loop(val, test, update, body) {
	for (let i = val; test(i); i = update(i)) {
		body(i);
	}
}
loop(3, n => n < 10, n => n + 1, n => console.log(n*3));
