module.exports.absolute = function(number) {
    return number >= 0 ? number: -number
}

module.exports.greet = function (name) {
    return `Hello, ${name}`
}

module.exports.getCountries = function () {
    return ['FRANCE','NIGERIA','SOUTH AFRICA','CHINA','JAPAN','GREAT BRITAIN']
}