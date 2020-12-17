const real =
`#.#.#.##
.####..#
#####.#.
#####..#
#....###
###...##
...#.#.#
#.##..##`.split('\n').map(l=>l.split(''));

const test =
`.#.
..#
###`.split('\n').map(l=>l.split(''));


module.exports = { real, test };



