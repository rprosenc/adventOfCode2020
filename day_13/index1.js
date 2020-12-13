const data = require("./data");

// notes = data.test;       /// result: 19208
notes = data.real;

const t = notes[0];
const busses = notes[1].split(',').filter(b=>b!='x').map(b=>parseInt(b)).sort((a,b)=>a-b);
console.log(t, busses);


const starts = busses.map((b) => {
    const a = parseInt(t/b)
    return [b, (1+a)*b];
});


const earliestStarts = starts.sort((a,b)=>a[1]-b[1]).filter(s=>s[1]>=t);
console.log(earliestStarts);
const d = earliestStarts[0][1] - t;
console.log(d)

console.log(d * earliestStarts[0][0])