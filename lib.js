module.exports.absolute = function(number) {
    return number >= 0 ? number: -number
}

module.exports.greet = function (name) {
    const msg = `Hello, ${name}`
    return msg;
}