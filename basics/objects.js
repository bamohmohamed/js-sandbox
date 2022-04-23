var tech = 'js'
let mySite = {
    name: 'digiwilds',
    founder: 'Bamoh Mohamed',
    'start date': new Date().getFullYear(),
    [tech]: 'JS'
}

console.log(mySite[tech]) // brackets to access var keys
console.log(mySite["start date"]) // brackets to access attributes with space or -
console.log(mySite.founder)

function Person(fname, lname) {
    this.name = fname
    this.age = lname
}

let p1 = new Person('Mohamed', 'Bamoh')
console.log(p1)

let addr = new Object()
addr.street = 'Some Street'
addr.zipCode = 12345
p1.address = addr // adding property to an object

p1.whatever = 'whatever'
console.log(p1)

delete p1.whatever
console.log(p1)

console.log(p1.hasOwnProperty('address'))
console.log('name' in p1)

console.log(p1.hasOwnProperty('toString')) // check only properties that belongs to this object
console.log('toString' in p1) // check properties that belong to parent objects


let emp = {
    name: 'Susane',
    job: 'software engineer',
    salary: 80000,
    SayHi() {
        return `hi my name is ${this.name}`
    },
    get getMonthlySalary() {
        return this.salary / 12;
    },
    set setJob(value) {
        this.job = value
    }
}

console.log(emp.SayHi())
console.log(emp.getMonthlySalary)
console.log(emp.job)
emp.setJob = 'manager'
console.log(emp.job)


// __proto__
const software = {
    sn: 123456789,
    category: 'default'
}

const chrome = {
    __proto__: software,
    speed: 765
}
chrome.category = 'web'

//Object.values, object.keys, Object.entries
console.log(Object.keys(chrome))
console.log(Object.values(chrome))
console.log(Object.entries(chrome))

for (const key in chrome) {
    console.log(key, chrome[key])
}

// Object.assign
// freeze, sealed
const mozilla = new Object()
Object.assign(mozilla, chrome) // copies only properties defined in object directly, not from parent
console.log(mozilla)
Object.seal(mozilla)
mozilla.speed = 888 // can modify property
mozilla.color = 'Orange' // cannot add property
console.log(mozilla)
Object.freeze(mozilla)
mozilla.speed = 999 // cannot change or add properties
console.log(mozilla)

// toString, valueOf
// Symbol.toPrimitive
const developer = {
    skills: ['java', 'rust', 'golang'],
    toString: () => {
        return 'Hello I am a developer'
    },
    valueOf() { // behaviour of Object during conversion
        return 77
    },
    [Symbol.toPrimitive](hint) { // behaviour of Object during conversion
        if (hint === 'number') {
            return 7
        } else if (hint === 'string') {
            return "I am a dev"
        } else return 89
    }
}

console.log(developer.toString())
console.log(1 + developer) // + can be used for both number and string
console.log(1 - developer)
console.log(String(developer))