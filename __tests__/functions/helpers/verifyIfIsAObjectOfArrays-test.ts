/**
 * Negate a boolean from a key that is inside an object in an array
 * @format
 */
import {_verifyIfIsAObjectOfArrays} from '../../../src/functions';

describe('Check if the params is array of objects', () => {
  it('should be return "true" if the array contains objects', () => {
    expect(_verifyIfIsAObjectOfArrays([{id: '1'}])).toBe(true);
  });
  it('should be return "false" if the array not contains objects', () => {
    expect(_verifyIfIsAObjectOfArrays(['hello word!'])).toBe(false);
  });
  it('should be return "false" if the parameters is not a array of objects', () => {
    //@ts-ignore
    expect(_verifyIfIsAObjectOfArrays({})).toBe(false);
  });
});
