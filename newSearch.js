const start = performance.now()
for(let i = 0; i < 10000; i++) {
    let ii = Math.sqrt(i)
}
const end = performance.now()
let time = end - start