function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

repeat(5, console.log)
