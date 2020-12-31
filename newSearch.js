const start = performance.now()
for(let i = 0; i < 10000; i++) {
    let ii = Math.sqrt(i)
}
const end = performance.now()
let time = end - start

// second one
performance.mark("beginLoop")
for(let i = 0; i < 10000; i++) {
    let ii = Math.sqrt(i)
}
performance.mark("endLoop")
performance.measure("measureLoop","beginLoop","endLoop")
let time = performance.getEntriesByName("measureLoop")[0].duration