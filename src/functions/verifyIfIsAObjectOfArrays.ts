/**
 * Check if the params is array of objects
 * @param {array} array the params need to be array
 * @returns boolean
 */

const _verifyIfIsAObjectOfArrays = (arr: Object[]) =>
  !Array.isArray(arr)
    ? false
    : arr?.map(i => typeof i === 'object')?.includes(false)
    ? false
    : true;

export default _verifyIfIsAObjectOfArrays;
