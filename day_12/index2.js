const data = require("./data");

// actions = data.test;       /// result: 19208
actions = data.real;

/*
After manual tests of
 grep R input.txt|sort|uniq
R180
R270
R90

 grep L input.txt|sort|uniq
L180
L270
L90

it is evident, that all rotation actions consist of are either 90, 180 or 270 degrees
 */


function rotate(p, a) {
    switch(a) {
        case 0:
            return [p];
        case -180:
        case 180:
            return [-p[0], -p[1]];
        case 90:
        case -270:
            return [p[1], -p[0]];
        case -90:
        case 270:
            return [-p[1], p[0]];
    }

    console.log('why here?', p, a) // lol - because move('L') negates the degrees...

}

/**
 *
 * @param action        programm code
 * @param position      in e/n coordinates
 * @param waypoint      relative to the ship in e/n coordinates
 */
move = function(action, position, waypoint) {
    const cmd = action[0];
    const arg = parseInt(action.substr(1));
console.log('move from ', position, 'with', action, 'and waypoint', waypoint);

    switch(cmd) {
        case 'N':
            return [position,  [waypoint[0],  waypoint[1]+arg]];
        case 'S':
            return [position,  [waypoint[0],  waypoint[1]-arg]];
        case 'E':
            return [position, [waypoint[0]+arg,  waypoint[1]]];
        case 'W':
            return [position,  [waypoint[0]-arg,  waypoint[1]]];
        case 'L':
            return [position, rotate(waypoint, -arg) ];
        case 'R':
            return [position, rotate(waypoint, arg) ];
        case 'F':
            return [ [position[0]+waypoint[0]*arg, position[1]+waypoint[1]*arg], waypoint]
    }

    return [position, waypoint];
}

function manhatten(x, y) {
    return Math.abs(x) + Math.abs(y);
}


let position = [0,0];
let waypoint = [10, 1]
for(let i=0; i<actions.length; i++) {
    [position, waypoint] = move(actions[i], position, waypoint);
}

console.log('position: ', position, 'waypoint: ', waypoint);
console.log('Manhatten distance: ', manhatten(...position))