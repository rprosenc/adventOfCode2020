const data = require("./data");

plan = data.test;       /// result: 19208
// plan = data.real;

let isStable = false;
let currentSeats = plan;
let nextSeats;
while (!isStable) {
    console.log(currentSeats);
    console.log()
    // calculate new state
    nextSeats = round(currentSeats);

    // compare
    if (currentSeats === nextSeats) {
        isStable = true;
    }
    currentSeats = nextSeats;
}

function round(seatsStr) {
    seats = serialize(seatsStr);
    const result = [];
    let neighbours, seat;
    for(let i=0; i<seats.length; i++) {
        let row = [];
        for (let j=0; j<seats[i].length; j++) {
            seat = seats[i][j]
            neighbours = getOccupiedSeats(i,j, seats);
            if (seat==='.') {
                row.push('.');
                continue;
            }
            if (seat==='L' && neighbours === 0) {
                row.push('#');
                continue;
            }
            if (seat==='#' && neighbours >= 4) {
                row.push('L');
                continue;
            }
            row.push(seat);
        }
        result.push(row);
    }
    return deserialize(result);
}

function getOccupiedSeats(y, x, seatsArr) {
    let occupied = 0;
    const y0 = y?y-1:y;
    const x0 = x?x-1:x;
    const y1 = y+1<seatsArr.length?y+1:y;
    const x1 = x+1<seatsArr[0].length?x+1:x;
    for (let i=y0; i<=y1; i++) {
        for (let j=x0; j<=x1; j++) {
            if (i===y && j===x) {
                continue;   // skip given seat
            }
            if (seatsArr[i][j] === '#') {
                occupied++
            }
        }
    }

    return occupied;
}

function countOccupied(seats) {
    return seats.replace(/[.L\n]/g,'').length
}

function serialize(seatsStr) {
    return seatsStr.split('\n').map(r=>r.split(''));
}
function deserialize(seats) {
    return seats.map(r=>r.join('')).join('\n');
}

console.log(countOccupied(currentSeats));