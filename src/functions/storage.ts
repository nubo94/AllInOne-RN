import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * save array of task in local storage
 * @param {string} id identifier in the localStorage
 * @param {arg} any the data to save in localStorage
 */

export const _save = async (id?: string, arg?: any) => {
  try {
    await AsyncStorage.setItem(`@${id}`, JSON.stringify(arg));
  } catch (e) {
    throw new Error(e);
  }
};

/**
 * @param {string} id identifier in the localStorage
 * @return value
 */
export const _get = async (id: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${id}`);
    const parsed = jsonValue !== null ? JSON.parse(jsonValue) : [];
    return parsed;
  } catch (e) {
    throw new Error(e);
  }
};
