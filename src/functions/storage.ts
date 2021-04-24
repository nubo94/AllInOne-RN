import AsyncStorage from '@react-native-async-storage/async-storage';

// CRUD

/**
 * save array of task in local storage
 * @param {arr} array the params need to be an array
 */

export const _save = async (arr: Object[]) => {
  try {
    if (!Array.isArray(arr)) {
      throw new Error('Wrong param');
    }
    await AsyncStorage.setItem('@tasks', JSON.stringify(arr));
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * @return array
 */
export const _get = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@tasks');
    const parsed = jsonValue !== null ? JSON.parse(jsonValue) : [];
    return parsed;
  } catch (e) {
    throw new Error(e);
  }
};
