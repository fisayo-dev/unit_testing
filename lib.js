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

module.exports.registeUser = function (username) {
    if (!username) throw new Error('')
    return {id:new Date.getDay(), username:username}
}