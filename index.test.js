const { fizzBuzz } = require('./main');

describe('fizzBuzz function tests', () => {
test('Should return Fizz for numbers divisible by 3', () => {
expect(fizzBuzz(3)).toBe("3Fizz");
expect(fizzBuzz(6)).toBe("6Fizz");
expect(fizzBuzz(9)).toBe("9Fizz");
})

describe('fizzBuzz function tests', () => {
    test('should return FizzBuzz for numbers divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe("15FizzBuzz")
    })
   
})
describe('fizzBuzz function tests', () => {
    test('should return Buzz for numbers divisible by  5', () => {
        expect(fizzBuzz(40)).toBe("40Buzz")
    })
})

})
