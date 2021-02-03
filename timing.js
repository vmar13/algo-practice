let start = new Date().getTime()

for (i = 0; i < 50000; ++i) {
}

let end = new Date().getTime()
let time = end - start
alert('Execution time: ' + time)