module.exports.absolute = function(number) {
    return number >= 0 ? number: -number
}

module.exports.greet = function (name) {
    return `Hello, ${name}`
}

module.exports.getCountries = function () {
    return ['FRANCE','NIGERIA','SOUTH AFRICA','CHINA','JAPAN','GREAT BRITAIN']
}

module.exports.getQuiz = function (quiz_id) {
    return {id: quiz_id, author:'Fisayo', title:'Simplified IQ Test'}
} 

module.exports.registerUser = function (username) {
    if (!username) throw new Error('')
    return { id: new Date().getTime(), username: username}
}

module.exports.fizzBuzz = function (input) {
    if (typeof (input) !== 'number')
        throw new Error('Input should be a number')

    if (input % 3 == 0 && input % 5 == 0) return 'FizzBuzz'
    if (input % 3 == 0) return 'Fizz'
    if (input % 5 == 0) return 'Buzz'

    return input
}