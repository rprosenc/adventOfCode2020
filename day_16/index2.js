const data = require("./data");

// const input = data.test1;
// const input = data.test2;
const input = data.real;


const tickets = input.nearbyTickets.split('\n').map(t => t.split(',').map(n => parseInt(n)));
const myTicket = input.ticket.split(',').map(n=>parseInt(n));

console.log('tickets: ', tickets);
console.log('my ticket: ', myTicket);

function buildRules(text) {
    const lines = text.split('\n');
    const rules = {};
    lines.forEach(l => {
        const [name, ranges] = l.split(': ');
        rules[name] = [];
        ranges.split(' or ').forEach(r => {
            const [min, max] = r.split('-');
            rules[name].push({min: parseInt(min), max: parseInt(max)});
        })
    });
    return rules;
}

function getInvalid(rules, values) {
    const invalids = [];
    let ranges;
    //console.log('values:', values);
    values.forEach(v => {
        if (invalids.includes(v)) return;
        let valid = false;
        for (const name in rules) {
            ranges = rules[name];
            //console.log('ranges:', ranges);
            if (ranges.map(r => r.min <= v && r.max >= v).includes(true)) {
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

function getFields(tickets) {
    const fields = [];
    tickets.forEach(t => t.forEach((r, i) => {
        if (fields[i] === undefined) {
            fields[i] = [];
        }
        fields[i].push(r);
    }));

    return fields;
}

function getRulesPerField(rules, fields) {
    // fields is a list of field, field is a list of values
    // rule is a list of range, range is an object with min an max
    const rulesPerField = []
    let invalids;
    for (let i = 0; i < fields.length; i++) {
        if (!rulesPerField[i]) {
            rulesPerField[i] = [];
        }
        for (const rule in rules) {
            if (!rules.hasOwnProperty(rule)) {continue;}
            invalids = getInvalid({'rule': rules[rule]}, fields[i])
            if (invalids.length === 0) {
                rulesPerField[i].push(rule);
            }
        }
    }
    return rulesPerField;
}

function solve(rulesPerField) {
    const rounds = rulesPerField.length;
    const searchArr = [...rulesPerField]
    const solution = [];
    let foundRule;
    for (let round = 0; round < rounds; round++) {
        console.log('round ', round);
        // find field with only one rule
        for (let field=0; field<searchArr.length; field++) {
            if (searchArr[field].length === 1) {
                // save field-id for that rule
                foundRule = searchArr[field][0];
                solution[field] = foundRule;

                // remove rule from all fields
                for (let i=0; i<searchArr.length; i++) {
                    if (searchArr[i].includes(foundRule)) {
                        searchArr[i] = searchArr[i].filter(r=>r!==foundRule);
                    }
                }
            }
        }
    }
    
    return solution;
}


function getDepartureFieldsInTicket(fieldPositions, ticket) {
    const result = [];
    for (let i = 0; i < ticket.length; i++) {
        if (fieldPositions[i].match(/^departure/)) {
            result.push(ticket[i]);
        }
    }
    return result;
}

const rules = buildRules(input.rules);
console.log('rules: ', rules);

const validTickets = tickets.filter(t => !getInvalid(rules, t).length);
console.log('valids: ', validTickets);

const fields = getFields(validTickets);
console.log('fields:', fields);

const rulesPerField = getRulesPerField(rules, fields);

console.log('rulesPerField:', rulesPerField)

const fieldPositions = solve(rulesPerField);
console.log('fieldPositions:', fieldPositions)


const departureFieldValues = getDepartureFieldsInTicket(fieldPositions, myTicket);
console.log('getDepartureFieldsInTicket', departureFieldValues)

console.log('product', departureFieldValues?departureFieldValues.reduce((c,a)=>c*a):0);
