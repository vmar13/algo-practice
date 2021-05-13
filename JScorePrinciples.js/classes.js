class Student {
    constructor(firstName, lastName) {      //basic class constructor
        this.firstName = firstName;         //"this" will refer to THAT newly created obj
        this.lastName = lastName;
    }

    fullName = () => {                     //basic instance method
        console.log(`My full name is ${this.firstName} ${this.lastName}.`)
    }
}

let vani = new Student('Vanessa', 'Martinez')
vani.fullName()