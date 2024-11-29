import { absolute } from "../lib.js"
test('absolute - should return a positiove number if number is positive ', () => {
    const result = absolute(1)
    expect(result).toBeGreaterThanOrEqual(0)
})