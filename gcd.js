$(function() {
	var gcd = new gcdClass();
	try {
		alert(gcd.calculate(90,30));
	}
	catch (e) {
		console.log(e.toString());
	}
});

var gcdClass = function(){};

gcdClass.prototype = {

	isNumeric: function (number) {
		//As of January 17th, 2015, this is how jQuery does their isNumeric
		//Therefore, it is used here as jQuery is a somewhat Standard Javascript
		//Library
		return !isNaN(parseFloat(number)) && isFinite(number);
	},

	calculate: function(a,b) {
		if (b > a) {
			var switchValue = b;
			b = a;
			a = switchValue;
		}
		if (a != 0 && b != 0) {
			var dividesInto = Math.floor(a/b);
			var remainder = a%b;
			return this.calculate(b,remainder)
		}
		else {
			if (a == 0) {
				return b;
			}
			if (b == 0) {
				return a;
			}
		}
	},
};
