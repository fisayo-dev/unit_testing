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
        expect(result).toContain('JAPAN', 'NIGERIA')
        // Best way to check for the existence of one or more values in an array
        expect(result).toEqual(expect.arrayContaining(['JAPAN', 'NIGERIA']))
    })
})

describe('getting quiz', () => {
    it('get a particular quiz with a particular id', () => {
        const result = lib.getQuiz(2)
        expect(result).toMatchObject({id:2, author:'Fisayo'})
    })
})

describe('register user', () => {
    it('username validity falsy', () => {
        const args = [null, NaN, undefined, '', 0, false]
        args.forEach(arg => {
            expect(() => {
                lib.registerUser(arg)
            }).toThrow()
        })
    })
    it('username validity truthy', () => {
        const result = lib.registerUser('Fisayo')
        expect(result).toHaveProperty('username', 'Fisayo')
        expect(result.id).toBeGreaterThan(0)
    })
})

describe('fizzbuzz test', () => {
    it('input should be a number', () => {
        const result = lib.fizzBuzz(2)
        expect(typeof(result)).toBe('number')
    })
    it('input should be divisible by 3', () => {
        const result = lib.fizzBuzz(3)
        expect(result).toBe('Fizz')
    })
    it('input should be divisible by 5', () => {
        const result = lib.fizzBuzz(5)
        expect(result).toBe('Buzz')
    })
    it('input is divisible by 3 and 5', () => {
        const result = lib.fizzBuzz(15)
        expect(result).toBe('FizzBuzz')
    })
    it('input is neither divisble by 3 or 5', () => {
        const result = lib.fizzBuzz(17)
        expect(result).toBe(17)
    })
})