const lib = require("../lib")

describe('absolute -', () => {
    it('should return a positive number if number is positive ', () => {
        const result = lib.absolute(1)
        expect(result).toBe(1)
    })
    it('should return a positive number if number is negative ', () => {
        const result = lib.absolute(-1)
        expect(result).toBe(1)
    })
    it('should return zero if number is zero ', () => {
        const result = lib.absolute(0)
        expect(result).toBe(0)
    })
})

describe('greet', () => {
    it("should contain the person's name", () => {
        const result = lib.greet('Fisayo');
        expect(result).toMatch(/Fisayo/) // toMatch() method matches using regular expressions
        expect(result).toContain('Fisayo') // toContain() method checks if string is contained in the result
    })
})