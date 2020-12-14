const data = require("./data");

// const program = data.test;       /// result: 19208
const program = data.real;

let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

// console.log(mask);
memory = {}

write = function(addr, value) {
    memory['_'+addr] = value;
}

applyMask = function(value) {
    vBinRev = b(value).split('').reverse();
    maskRev = mask.split('').reverse();
    for (let i=0; i<=maskRev.length; i++) {
        if (i>=vBinRev.length) {
            vBinRev.push(0);
        }
        if (maskRev[i] === 'X') {
            continue;
        }
        vBinRev[i] = maskRev[i];
    }

    resultBin = vBinRev.reverse().join('')

    // console.log('value: ', b(value), 'decimal:', d(b(value)))
    // console.log('mask:  ', mask)
    // console.log('result:', resultBin, 'decimal:', d(resultBin))

    return d(resultBin)
}


function parseLine(line) {
    const [assign, value] = line.split(' = ')
    const addr = assign.replace('mem[','').replace(']', '');
    return [addr, value]
}

function b(n) {
    return  parseInt(n, 10).toString(2)
}
function d(n) {
    return  parseInt(n, 2).toString(10)
}

function execute(line) {
    const [addr, value] = parseLine(line);
    if (addr ==='mask') {
        mask = value;
    } else {
        const maskedVal = applyMask(value);
        write(addr, maskedVal);
    }
}

console.log('');
program.map(line=>execute(line))

sum = 0;
for(addr in memory) {
    sum += parseInt(memory[addr],10);
}

// console.log('memory:', memory)
console.log('Sum:', sum)
