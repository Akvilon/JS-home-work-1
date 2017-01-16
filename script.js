


	var x = +prompt('Enter first number:', '');
	var n = +prompt('Enter second number:', '');
	var count = Math.pow(x,n);

	function pow(x, n) {

		if (x % 1 == 0 && n % 1 == 0) {

			console.log(count);

		} else if (x >= 0 && n >=0) {
			console.log(count);
		
		} else {
			console.log('Wrong value');
		}
}

pow(x, n);