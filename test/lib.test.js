const lib = require("../lib")

describe('absolute ', () => {
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

describe('getting countries', () => {
    it('check for particular country', () => {
        const result = lib.getCountries()

        // Too General
        // expect(result).toBeDefined()

        // Too specific
        // expect(result.length).toBe(6)

        // Proper way
        expect(result).toContain('SOUTH AFRICA')

        // Best way to check for the existence of one or more values in an array
        expect(result).toEqual(expect.arrayContaining(['JAPAN', 'NIGERIA']))
    })
})