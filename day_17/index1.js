const data = require("./data");

const mapZ0 = data.test;       /// result: 19208
// const input = data.real;


const map = [mapZ0];

function initialize(xLength,yLength,zLength) {
    const map = [];
    for (let z=0;z<zLength;z++) {
        map.push([]);
        for (let y=0;y<yLength;y++) {
            map[z].push([]);
            for (let x=0;x<xLength;x++) {
                map[z][y].push('.');
            }
        }
    }

    return map;
}
function populate(mapOut, mapIn) {
    // prepare z values
    let xShift, yShift, zShift;

    for (let z=0;z<mapIn.length;z++) {
        // prepare y values
        for (let y=0;y<mapIn[z].length;y++) {
            // prepare x values
            for (let x=0;x<mapIn[z][y].length;x++) {
                [xShift,yShift,zShift] = [x+1,y+1,z+1];
                set(mapOut, xShift,yShift,zShift, get(mapIn, x,y,z));
            }
        }
    }
}

function countNeighbours(map, x,y,z) {
    const zMin = z===0 ? 0 : z-1;
    const yMin = y===0 ? 0 : y-1;
    const xMin = x===0 ? 0 : x-1;

    const zMax = z===map.length-1       ? z : z+1;
    const yMax = y===map[0].length-1    ? y : y+1;
    const xMax = x===map[0][0].length-1 ? x : x+1;

    let neighbours = 0;
    let checkedFields = [];

    for (let z_=zMin;z_<=zMax;z_++) {
        // prepare y values
        for (let y_=yMin;y_<=yMax;y_++) {
            // prepare x values
            for (let x_=xMin;x_<=xMax;x_++) {
                if (x_===x && y_===y && z_===z) {
                    continue;
                }
                checkedFields.push([x_,y_,z_]);
                neighbours += isActive(map, x_,y_,z_);  // auto-cast bool to int
            }
        }
    }
    return neighbours;
}

function print(map) {
    return map.map(
            yArr=>yArr.map(
                xArr=>xArr.join('')
            ).join('\n')
        ).map(
            (z,i)=>'Z'+i+': \n'+z)
        .join('\n\n');
}


function get(map, x,y,z) {
    return map[z][y][x];
}
function set(map, x,y,z, state) {
    map[z][y][x] = state;
}

function isActive(map, x,y,z) {
    return map[z][y][x] === '#';
}
function isInactive(map, x,y,z) {
    return map[z][y][x] === '.';
}

function activate(map, x,y,z) {
    map[z][y][x] = '#';
}
function inactivate(map, x,y,z) {
    map[z][y][x] = '.';
}


function cycle(mapOld) {
    const [xNew, yNew, zNew] = [mapOld[0][0].length+2, mapOld[0].length+2, mapOld.length+2];
    const map = initialize(xNew, yNew, zNew);
    const mapOut = initialize(xNew, yNew, zNew);
    populate(map, mapOld);

    let n = 0;
    // cycle...
    for (let z=0;z<zNew;z++) {
        // prepare y values
        for (let y=0;y<yNew;y++) {
            // prepare x values
            for (let x=0;x<xNew;x++) {
                n = countNeighbours(map, x,y,z);
                if (isActive(map, x,y,z)) {
                    if (n===2 || n===3) {
                        activate(mapOut, x,y,z);
                    } else {
                        inactivate(mapOut, x,y,z);
                    }
                } else {
                    if (n===3) {
                        activate(mapOut, x,y,z);
                    } else {
                        inactivate(mapOut, x,y,z);
                    }
                }
            }
        }
    }

    // remove outmost emty Z-layers
    z0 = mapOut[0].map(xArr=>xArr.join('')).join('');
    z1 = mapOut[mapOut.length-1].map(xArr=>xArr.join('')).join('');
    if (z0.indexOf('#') < 0) {
        mapOut.shift();
    }
    if (z1.indexOf('#') < 0) {
        mapOut.pop();
    }

    return mapOut;
}

let c = map;
console.log(print(c));
for(let i=1; i<=6; i++) {
    c = cycle(c);
    console.log('-----CYCLE '+i+'-----')
    console.log(print(c));
}

console.log('Result:')
console.log(print(c).replace(/[\n\.]/g,'').split('').length);

