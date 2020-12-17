const data = require("./data");

// const mapZ0 = data.test;       /// result: 19208
const mapZ0 = data.real;


const map = [[mapZ0]];

function initialize(xLength,yLength,zLength, wLength) {
    const map = [];
    for (let w=0;w<wLength;w++) {
        map.push([]);
        for (let z=0;z<zLength;z++) {
            map[w].push([]);
            for (let y=0;y<yLength;y++) {
                map[w][z].push([]);
                for (let x=0;x<xLength;x++) {
                    map[w][z][y].push('.');
                }
            }
        }
    }

    return map;
}
function populate(mapOut, mapIn) {
    // prepare z values
    let xShift, yShift, zShift, wShift;

    for (let w=0;w<mapIn.length;w++) {
        for (let z=0;z<mapIn[w].length;z++) {
            // prepare y values
            for (let y=0;y<mapIn[w][z].length;y++) {
                // prepare x values
                for (let x=0;x<mapIn[w][z][y].length;x++) {
                    [xShift,yShift,zShift,wShift] = [x+1,y+1,z+1,w+1];
                    set(mapOut, xShift,yShift,zShift,wShift, get(mapIn, x,y,z,w));
                }
            }
        }
    }
}

function countNeighbours(map, x,y,z,w) {
    const wMin = w===0 ? 0 : w-1;
    const zMin = z===0 ? 0 : z-1;
    const yMin = y===0 ? 0 : y-1;
    const xMin = x===0 ? 0 : x-1;

    const wMax = w===map.length-1          ? w : w+1;
    const zMax = z===map[0].length-1       ? z : z+1;
    const yMax = y===map[0][0].length-1    ? y : y+1;
    const xMax = x===map[0][0][0].length-1 ? x : x+1;

    let neighbours = 0;

    for (let w_=wMin;w_<=wMax;w_++) {
        for (let z_=zMin;z_<=zMax;z_++) {
            // prepare y values
            for (let y_=yMin;y_<=yMax;y_++) {
                // prepare x values
                for (let x_=xMin;x_<=xMax;x_++) {
                    if (x_===x && y_===y && z_===z && w_===w) {
                        continue;
                    }
                    neighbours += isActive(map, x_,y_,z_,w_);  // auto-cast bool to int
                }
            }
        }
    }
    return neighbours;
}

function print(map) {
    return map.map(zArr=>
                zArr.map(yArr=>
                    yArr.map(xArr=>
                        xArr.join('')
                    ).join('')
                ).join('')
            ).join('');
}


function get(map, x,y,z,w) {
    return map[w][z][y][x];
}
function set(map, x,y,z,w, state) {
    map[w][z][y][x] = state;
}

function isActive(map, x,y,z,w) {
    return map[w][z][y][x] === '#';
}

function activate(map, x,y,z,w) {
    map[w][z][y][x] = '#';
}
function inactivate(map, x,y,z,w) {
    map[w][z][y][x] = '.';
}


function cycle(mapOld) {
    const [xNew, yNew, zNew, wNew] = [mapOld[0][0][0].length+2, mapOld[0][0].length+2, mapOld[0].length+2, mapOld.length+2];
    const map = initialize(xNew, yNew, zNew, wNew);
    const mapOut = initialize(xNew, yNew, zNew, wNew);
    populate(map, mapOld);

    let n = 0;
    // cycle...
    for (let w=0;w<wNew;w++) {
        for (let z=0;z<zNew;z++) {
            for (let y=0;y<yNew;y++) {
                for (let x=0;x<xNew;x++) {
                    n = countNeighbours(map, x,y,z,w);
                    if (isActive(map, x,y,z,w)) {
                        if (n===2 || n===3) {
                            activate(mapOut, x,y,z,w);
                        } else {
                            inactivate(mapOut, x,y,z,w);
                        }
                    } else {
                        if (n===3) {
                            activate(mapOut, x,y,z,w);
                        } else {
                            inactivate(mapOut, x,y,z,w);
                        }
                    }
                }
            }
        }
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
console.log(print(c).replace(/[^#]/g,'').split('').length);