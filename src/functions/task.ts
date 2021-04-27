import _verifyIfIsAObjectOfArrays from './verifyIfIsAObjectOfArrays';
// CRUD

/**
 * add new element to the array's tasks
 * @param {arr} array the params need to be an array
 * @param {object} object the object to add
 * @return array
 */
export const _add = (arr: IArrOfObj[], obj: Object) => {
  if (!_verifyIfIsAObjectOfArrays(arr)) {
    throw new Error('Params incorrect');
  }
  return [...arr, obj];
};

/**
 * remove element from the array's tasks
 * @param {arr} array the params need to be an array
 * @param {string | number} id id of object to remove
 * @return array
 */
export const _remove = (arr: IArrOfObj[], id: string | number) => {
  if (!_verifyIfIsAObjectOfArrays(arr)) {
    throw new Error('Params incorrect');
  }
  return arr.filter(f => f.id !== id);
};

interface IArrOfObj {
  id: string | number;
}
