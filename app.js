function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

function sumDecimal(firstDecimal, secondDecimal){
    return ((+firstDecimal * 100) + (+secondDecimal * 100)) / 100
}

function incrementAge(people){
    return people.map(person => {
        person.age += 1
        return person
    })
}

module.exports = {
    sum, 
    sumDecimal, 
    incrementAge
}

// console.log("It can sum 1 and 2", sum(1,2) === 3)