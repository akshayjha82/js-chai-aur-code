const marvel_heros=['Thor',"Ironman","Hawkye"]
const marvel_villains=['Thanos',"Loki","Hela"]

// marvel_heros.push(marvel_villains)
// console.log(marvel_heros);  //[ 'Thor', 'Ironman', 'Hawkye', [ 'Thanos', 'Loki', 'Hela' ] ]

// const marvel=marvel_heros.concat(marvel_villains)
// console.log(marvel);  //[ 'Thor', 'Ironman', 'Hawkye', 'Thanos', 'Loki', 'Hela' ]

//*************Spread Operator****************************
const all_charracter=[...marvel_heros,...marvel_villains]
console.log(all_charracter);  //[ 'Thor', 'Ironman', 'Hawkye', 'Thanos', 'Loki', 'Hela' ]

const new_aaray=[1,2,3,[2,2,2,3],23,[21,212,[22,32]]]
console.log(new_aaray.flat(Infinity));
/*
[
  1,  2,  3,  2,   2,
  2,  3, 23, 21, 212,
 22, 32
]
*/

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // **********************interesting*************************
/* we cannot directly convert an object into array  */ 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));