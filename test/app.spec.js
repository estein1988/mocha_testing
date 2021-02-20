//SETUP INSTRUCTIONS:
//1. touch app.js
//2. npm init -y
//3. npm install mocha
//4. mkdir test
//5. touch test/app.spec.js
//6. npx mocha
//7. npm install chai

const { sum, sumDecimal, incrementAge } = require("../app");
const { expect } = require('chai')
const assert = require("assert"); //don't use built-in assert library except for this lesson

it("It adds 2 and 3", () => {
    // assert.strictEqual(sum(2, 3), 5) //asset
    expect(sum(2, 3)).to.equal(5) //chai
})

it("It adds the strings 2 and 3", () => {
    // assert.strictEqual(sum('2', '3'), '23')
    expect(sum('2', '3')).to.equal('23')
})

it("It adds 0.1 and 0.2", () => {
    // assert.strictEqual(sumDecimal(.1, .2), 0.3)
    expect(sumDecimal(.1, .2)).to.equal(0.3)
})

it("It increments the age of the persons in the array", () => {
    assert.deepStrictEqual(incrementAge([{age: 32}, {age: 46}]), [{age: 33}, {age: 47}])
})

it("It increments the age of the persons in the array", () => {
    const people = [
        { name: 'Elliott', age: 31 },
        { name: 'Jack', age: 29 }
    ]
    const agedPeople = [
        { name: 'Elliott', age: 32 },
        { name: 'Jack', age: 30 }
    ]

    assert.deepStrictEqual(incrementAge(people), agedPeople)
})