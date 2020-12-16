const data = require("./data");

// const input = data.test;       /// result: 19208
const input = data.real;


const tickets = input.nearbyTickets.split('\n').map(t=>t.split(',').map(n=>parseInt(n)));
console.log('tickets: ', tickets);

function buildRules (text) {
    const lines = text.split('\n');
    const rules = {};
    lines.forEach(l=>{
        const [name, ranges] = l.split(': ');
         rules[name] = [];
         ranges.split(' or ').forEach(r=>{
             const [min, max] = r.split('-');
             rules[name].push({min:parseInt(min), max:parseInt(max)});
         })
    });
    return rules;
}

function getInvalid(rules, values) {
    const invalids = [];
    let ranges;
    //console.log('values:', values);
    values.forEach(v=>{
        if (invalids.includes(v)) return;
        let valid = false;
        for (const name in rules) {
            ranges = rules[name];
            //console.log('ranges:', ranges);
            if (ranges.map(r=>r.min<=v && r.max>=v).includes(true)) {
                valid = true;
                //console.log('found',v,' in ', name);
                break;
            }
        }

        if (!valid) {
            //console.log('invalid ', v, invalids);
            invalids.push(v);
        }
    })

    return invalids;
}

const rules = buildRules(input.rules);
console.log('rules: ', rules);
const invalids = tickets.map(t=>getInvalid(rules, t)).reduce((c,a)=>c.concat(a));
console.log('invalids: ', invalids);

console.log('ticket scanning error rate: ', invalids.reduce((c,a)=>c+a));



