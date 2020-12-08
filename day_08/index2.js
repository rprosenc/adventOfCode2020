const data = require("./data");

// move local variable outside to see how program terminated
let running = true;
const program = function(code) {
	let accumulator = 0;

	const visitedInstructions = [];
	let lineCounter = 0;

	while (running) {
		if (visitedInstructions[lineCounter]) {
			console.log('terminating at line: ', lineCounter);
			return accumulator;
		}

		if (lineCounter >= code.length) {
			running = false;
			return accumulator;
		}

		visitedInstructions[lineCounter] = true;
		let [opCode, arg] = code[lineCounter].split(' ')
		arg = parseInt(arg);
		console.log(lineCounter, code[lineCounter], accumulator )

		switch (opCode) {
			case 'nop':
				lineCounter++;
				break;

			case 'acc':
				accumulator+=arg;
				lineCounter++;
				break;

			case 'jmp':
				lineCounter+=arg;
				break;

			default:
		}
	}
}

const bootCode = data.real

for(let i=0; i<bootCode.length; i++) {
	const [opCode, arg] = bootCode[i].split(' ')
	if (opCode==='nop' || opCode==='jmp') {
		/// switch, test
		let variantCode = bootCode.map(l=>l);
		if (opCode==='nop') {
			variantCode[i] = variantCode[i].replace('nop', 'jmp');
		} else {
			variantCode[i] = variantCode[i].replace('jmp', 'nop');
		}

		let acc = program(variantCode);
		if (!running) {
			console.log('terminated with accumulator: ', acc);
			break;
		}
	}


}





