const data = require("./data");


// notes = data.tiny;
// notes = data.test;
notes = data.real;

const testData = [
    [[17,'x',13,19], 3417],
    [[67,7,59,61], 754018],
    [[67,'x',7,59,61], 779210],
    [[67,7,'x',59,61], 1261476],
    [[1789,37,47,1889], 1202161486],
    [data.test[1].split(',').map(b=>parseInt(b)), 1068781],
//    [data.real[1].split(',').map(b=>parseInt(b)), 1000000000000000],
]

/*
No result found with 1.133 steps at time 1.000.000                      Time: 0.498ms

No result found with 113.319 steps at time 100.000.000                  Time: 16.048ms

No result found with 1.133.199 steps at time 1.000.000.000              Time: 5.985ms

No result found with 11.331.998 steps at time 10.000.000.000            Time: 132.186ms

No result found with 113.319.986 steps at time 100.000.000.000          Time: 1.225s

No result found with 1.133.199.890 steps at time 1.000.000.000.000      Time: 7.886s

No result found with 11.331.998.904 steps at time 10.000.000.000.000    Time: 2:16.559 (m:ss.mmm)

Result: tMin = 626670513163231
Steps 710.142.956.801
Time: 2:19:34.364 (h:mm:ss.mmm)



 */

// const busses = notes[1].split(',').map(b=>parseInt(b));

// log output only
function logD(i, b) {
    if  (isNaN(b)) return '.';
    const d = i/b;
    return (Math.trunc(d)===d) ? 'D' : '.';
}

function depart(i, b) {
    // if  (isNaN(b)) return -1;
    const d = i/b;
    return (Math.trunc(d)===d) ? i : 0;
}


function find(busses, maxT) {
    console.time("Time");

    console.log(' ')
    console.log(busses.map(b=>isNaN(b)?'x':b).join(', '), [maxT]);

    const sortedBusses = busses.slice(0).filter(b=>!isNaN(b)).sort((a,b)=>a-b);
    const [minBus, maxBus] = [sortedBusses[0], sortedBusses[sortedBusses.length-1]];

    let found = false;
    let tMin = maxBus - busses.indexOf(maxBus); // start shifted by...
    let steps = 0;
    let d;
    while (!found) {
        for (let i = 0; i < busses.length; i++) {
            if (isNaN(busses[i])) continue;

            d = depart(tMin + i, busses[i]);
            steps++;
            if (!d) break;

            // survive to the end - found result
            if (i === busses.length - 1) {
                console.log('Result: tMin =', tMin);
                console.log('Steps', new Intl.NumberFormat('de-DE', { style: 'decimal'}).format(steps));
                console.timeEnd("Time");
                console.log(minBus*maxBus, ((tMin+busses.indexOf(maxBus))/maxBus))
                return;
            }
        }
        tMin += maxBus;
        found = tMin > maxT;
    }

    console.log('No result found with',
        new Intl.NumberFormat('de-DE', { style: 'decimal'}).format(steps), 'steps',
        'at time', new Intl.NumberFormat('de-DE', { style: 'decimal'}).format(maxT))
    console.timeEnd("Time");
}


// const abc='abcdefghijklmnopqrstuvwxyz'.split('');
// let j=0;
// console.log(
//     data.real[1].split(',').map((d,i) => d==='x' ? '' : '('+d+abc[j++]+'-'+i+')').filter(a=>a).join('=')
//
// )
// j=0;
// console.log(
//     data.real[1].split(',').map((d,i) => d==='x' ? '' :
//         '('+d+abc[j++]+'-'+i+')=T'
//     ).filter(a=>a).join(',\n')
//
// )
//
testData.forEach(d => find(d[0], d[1]));


