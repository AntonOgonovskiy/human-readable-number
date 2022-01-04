module.exports = function toReadable(number) {

	let x = (String(number)[0]);
	let y = (String(number)[1]);
	let z = (String(number)[2]);
	let result = '';


	if (number === 0) {
		return 'zero';
	};

	function oneToNine(a) {
		switch (a) {
			case '1':
				return 'one';
			case '2':
				return 'two';
			case '3':
				return 'three';
			case '4':
				return 'four';
			case '5':
				return 'five';
			case '6':
				return 'six';
			case '7':
				return 'seven';
			case '8':
				return 'eight';
			case '9':
				return 'nine';
		};
	};

	function tenToNineteen(b) {
		switch (b) {
			case '0':
				return 'ten';
			case '1':
				return 'eleven';
			case '2':
				return 'twelve';
			case '3':
				return 'thirteen';
			case '4':
				return 'fourteen';
			case '5':
				return 'fifteen';
			case '6':
				return 'sixteen';
			case '7':
				return 'seventeen';
			case '8':
				return 'eighteen';
			case '9':
				return 'nineteen';
		};
	};

	function twentyToNinety(c) {
		switch (c) {
			case '2':
				return 'twenty';
			case '3':
				return 'thirty';
			case '4':
				return 'forty';
			case '5':
				return 'fifty';
			case '6':
				return 'sixty';
			case '7':
				return 'seventy';
			case '8':
				return 'eighty';
			case '9':
				return 'ninety';
		};
	};



	if (x > '0' && y === undefined && z === undefined) {
		return result = result + oneToNine(x);
	};
	if (x === '1' && y >= '0' && z === undefined) {
		return result = result + tenToNineteen(y);
	};
	if (x > '1' && y === '0' && z === undefined) {
		return result = result + twentyToNinety(x);
	};
	if (x > '1' && y > '0' && z === undefined) {
		return result = result + twentyToNinety(x) + ' ' + oneToNine(y);
	};
	if (x >= '1' && y === '0' && z === '0') {
		return result = result + oneToNine(x) + ' hundred';
	};
	if (x >= '1' && y === '0' && z >= '1') {
		return result = result + oneToNine(x) + ' hundred ' + oneToNine(z);
	};
	if (x >= '1' && y === '1' && z >= '0') {
		return result = result + oneToNine(x) + ' hundred ' + tenToNineteen(z);
	};
	if (x >= '1' && y > '1' && z === '0') {
		return result = result + oneToNine(x) + ' hundred ' + twentyToNinety(y);
	};
	if (x >= '1' && y >= '1' && z >= '1') {
		return result = result + oneToNine(x) + ' hundred ' + twentyToNinety(y) + ' ' + oneToNine(z);
	};
	return result;
};

