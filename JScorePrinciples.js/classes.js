class Student {
    constructor(firstName, lastName) {      //basic class constructor
        this.firstName = firstName;         //"this" will refer to THAT newly created obj
        this.lastName = lastName;
        this.late = 0;
        this.scores = [];
    }

    fullName() {                     //basic instance method
        return `My full name is ${this.firstName} ${this.lastName}.`
    }

    markLate() {
        this.late += 1;
        if (this.late >= 3) {
            return 'YOU ARE EXPELLED!'
        }
        return `${this.firstName} has been late ${this.late} time(s).`
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAvg() {
        let sum = this.scores.reduce(function(a, b){return a + b});
        return sum/this.scores.length;
    }
}

let vani = new Student('Vanessa', 'Martinez')
vani.fullName()
// console.log(vani.markLate())
// console.log(vani.markLate())
// console.log(vani.markLate())
console.log(vani.addScore(7))
console.log(vani.addScore(90))
console.log(vani.calculateAvg())