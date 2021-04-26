/**
 * Fizz Buzz game
 * @format
 */
import {_fizzBuzz} from '../../src/functions';

describe('Increase the number and the number divisible by 3 is replaced by the word "fizz" and divisible by 5 will be replaced by "buzz"', () => {
  it('number divisible by 5 is replaced by word "Buzz"', () => {
    const _in_ = 5;
    const _out_ = 'Buzz';
    expect(_fizzBuzz(_in_)).toBe(_out_);
  });

  it('number divisible by 3 is replaced by word "Fizz"', () => {
    const _in_ = 3;
    const _out_ = 'Fizz';
    expect(_fizzBuzz(_in_)).toBe(_out_);
  });

  it('should be return the same number', () => {
    const _in_ = 1;
    const _out_ = 1;
    expect(_fizzBuzz(_in_)).toBe(_out_);
  });
});
