/**
 * Negate a boolean from a key that is inside an object in an array
 * @param {array} arr arrays of objects
 * @param {string} identifierKey key to negate (need to be a boolean value)
 * @param {string} id object to update
 * @returns arr mapped | string - error
 */

import _verifyIfIsAObjectOfArrays from './verifyIfIsAObjectOfArrays';

const _negateBoolFromKeyInsideObjInArr = (
  arr: {
    id: number | string;
  }[],
  identifierKey: string,
  id: string | number,
) => {
  _validateParams(arr, identifierKey, id);
  return !arr.map(i => Object.keys(i))[0].includes(identifierKey)
    ? 'not key found'
    : arr.map(i => {
        const key = Object.keys(i).filter(f => f === identifierKey);
        return key.length && id === i.id
          ? {...i, [key[0]]: !(<any>i)[identifierKey]}
          : i;
      });
};

function _validateParams(
  arr: Object[],
  identifierKey: string,
  id: string | number,
) {
  if (
    !_verifyIfIsAObjectOfArrays(arr) ||
    typeof identifierKey !== 'string' ||
    !id
  ) {
    throw new Error('Invalid parameters');
  }
}

export default _negateBoolFromKeyInsideObjInArr;
