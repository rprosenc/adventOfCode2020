const data = require("./data");

// const program = data.tiny;       /// result: 19208
const program = data.real;

let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

memory = {}

write = function(addr, value) {
    memory['_'+addr] = value;
}

applyMask = function(value) {
    vBinRev = b(value).split('').reverse();
    maskRev = mask.split('').reverse();
    let res0, res1;
    let bit = 0;
    let results = [[]];
    for (let i=0; i<=maskRev.length; i++) {
        if (maskRev[i] === '0') {
            if (i>=vBinRev.length) {
                bit = 0;
            } else {
                bit = vBinRev[i]
            }
            results.map(r=>r.push(bit));
        }
        if (maskRev[i] === '1') {
            bit = 1;
            results.map(r=>r.push(bit));
        }
        if (maskRev[i] === 'X') {
            res0 = results.map(r=>r.slice(0)) // deep copy
            res0.map(r=>r.push('0'))          // add bit
            res1 = results.map(r=>r.slice(0)) // deep copy
            res1.map(r=>r.push('1'))          // add bit
            results = res0.concat(res1);
        }
    }
    const revRes = results.map(r=>d(r.reverse().join('')));

    return revRes;
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
        const addresses = applyMask(addr);
        addresses.map(a=>write(a, value))
    }
}

console.log('');
program.map(line=>execute(line))

sum = 0;
for(addr in memory) {
    sum += parseInt(memory[addr],10);
}

console.log('Sum:', sum)
