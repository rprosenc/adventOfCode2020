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


/**
 *
 * @param action        programm code
 * @param position      in n/e coordinates
 * @param rotation      in degrees
 */
move = function(action, position, rotation) {
    const cmd = action[0];
    const arg = parseInt(action.substr(1));
console.log('move from ', position, 'at', rotation, 'with', action);

    switch(cmd) {
        case 'N':
                return [[position[0]+arg,  position[1]], rotation ];
        case 'S':
            return [[position[0]-arg,  position[1]], rotation ];
        case 'E':
            return [[position[0],  position[1]+arg], rotation ];
        case 'W':
            return [[position[0],  position[1]-arg], rotation ];
        case 'L':
            return [[position[0],  position[1]], (360 + rotation - arg) % 360  ];
        case 'R':
            return [[position[0],  position[1]], (rotation + arg) % 360 ];
        case 'F':
            switch(rotation) {
                case 0:
                    return [[position[0]+arg,  position[1]], rotation ];
                case 180:
                    return [[position[0]-arg,  position[1]], rotation ];
                case 90:
                    return [[position[0],  position[1]+arg], rotation ];
                case 270:
                    return [[position[0],  position[1]-arg], rotation ];
            }
    }

    return [position, rotation];
}

function manhatten(x, y) {
    return Math.abs(x) + Math.abs(y);
}


let position = [0,0];
let rotation = 90;
for(let i=0; i<actions.length; i++) {
    [position, rotation] = move(actions[i], position, rotation);
}

console.log('position: ', position, 'rotation: ', rotation);
console.log('Manhatten distance: ', manhatten(...position))