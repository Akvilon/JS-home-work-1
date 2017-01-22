
var x = +prompt('Enter first number:', '');;
var n = +prompt('Enter second number:', '');
var result = 1;

for (var i = 1; i <= n; i++) {
	result *= x;
}

alert(result);
