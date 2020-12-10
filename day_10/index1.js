const data = require("./data");

// adapters = data.tinyTest;      /// result: 7, part II: 720
// adapters = data.smallTest;  /// result: 8
// adapters = data.test;       /// result: 19208
adapters = data.real;

function differences(adapters) {
    const diffs = {};
    adapters.reduce( (a,c) => {
        const diff = c - a;
        if (diffs[diff]) {
            diffs[diff]++
        } else {
            diffs[diff] = 1;
        }

        return c;
    })
    console.log('diffs', diffs);

    return diffs
}

const sortedAdapters = adapters.map(d=>d).sort((a,b)=>a-b)

// add outlet effective charging joltage
sortedAdapters.unshift(0);

// add device built-in adapter
sortedAdapters.push(sortedAdapters[sortedAdapters.length-1]+3)
console.log('adapters:', sortedAdapters.join(', '));

const diffs = differences(sortedAdapters);
// 1-jolts times 3-jolts

console.log('result part I ', diffs['1'] * diffs['3']);

//
// ultra long solution
//

    // remove outlet again
    // sortedAdapters.shift();
    // let combinations = 0;


    // function plugIn(socket, remainingAdapters, path) {
    //     // finished anyway
    //     if (remainingAdapters.length === 0) {
    //         console.log('validPath', path)
    //         combinations++
    //         return;
    //     }
    //
    //     // stop further execution, adapter chain breaks here
    //     if (remainingAdapters[0] > socket+3) {
    //         console.log('next element too far from socket', remainingAdapters[0], socket)
    //         return;
    //     }
    //
    //     let adapter
    //     for(let i=0; i<remainingAdapters.length; i++) {
    //         adapter = remainingAdapters[i];
    //         // might get some identical adapters, pass those, but stop as soon as a too big one comes
    //         if (adapter > socket+3) {
    //             return;
    //         }
    //
    //         console.log(socket, adapter, remainingAdapters, i)
    //
    //         // if (adapter >= socket+1) {  // no identical adapters in test data anyway, skip test
    //             // console.log('dive', adapter, path)
    //             //const newPath = path.slice(0)
    //             //newPath.push(adapter);
    //             // dive in
    //             plugIn(adapter, remainingAdapters.slice(i+1), [])
    //             // plugIn(adapter, remainingAdapters.slice(i+1), newPath)
    //         // }
    //     }
    // }
    // console.log(sortedAdapters);
    // plugIn(0, sortedAdapters, [])
    // console.log('combinations', combinations);


//
// attempt II at part II
//

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.leafs = 0;
    }

    addChild(child) {
        this.children.push(child);
    }

    getLeafs() {
        if (!this.children.length) {
            return 1;
        }

        if (!this.leafs) {
            this.leafs = this.children.reduce((a, c) => a + c.getLeafs(), 0);
        }

        return this.leafs;
    }
}

const cache = {'_0': new Node(0) };

const getNode = function(v) {
    if (!cache['_'+v]) {
        cache['_'+v] = new Node(v);
    }
    return cache['_'+v];
}

sortedAdapters.forEach( (v, i) => {
    const node = getNode(v);
    let c;
    for (let j=i+1; j<=i+3; j++) {
        if (i<=sortedAdapters.length && sortedAdapters[j] <= v+3) {
            c = sortedAdapters[j];
            node.addChild(getNode(c));
        }
    }
})



console.log('result part II', cache['_0'].getLeafs());



