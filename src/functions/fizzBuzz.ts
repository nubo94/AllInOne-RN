// FizzBuzz Game

/**
 * Increase the number and the number divisible by 3 is replaced by the word "fizz" and divisible by 5 will be replaced by "buzz"
 * @param {number} number the params need to be an number
 * @returns number | string
 */

const _fizzBuzz = (num: number) =>
  num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : num;

export default _fizzBuzz;
