import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as FORMATDATA from './interfaceFormat';
import { factoryData } from './factoryData';

// Helper functions for AsyncStorage operations
const setItem = async (key: string, value: any): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

const getItem = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeItem = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

const getAllKeys = async (): Promise<readonly string[]> => {
  return AsyncStorage.getAllKeys();
};

const multiGet = async (keys: string[]): Promise<readonly [string, string | null][]> => {
  return AsyncStorage.multiGet(keys);
};

/**
 * Saves the user data to storage.
 *
 * @param data - The user data to be saved.
 * @returns A promise that resolves to `true` if the data was saved successfully, or `false` if there was an error.
 */
export const saveUser = async (data: FORMATDATA.UserFormat): Promise<boolean> => {
  try {
    await setItem('user', data);
    return true;
  } catch (error) {
    Alert.alert('Failed to save user');
    console.log('Failed to save user:', error);
    return false;
  }
};

/**
 * Retrieves the user data from storage.
 *
 * @returns {Promise<FORMATDATA.UserFormat | false>} A promise that resolves to the user data if found, or `false` if an error occurs.
 */
export const getUser = async (): Promise<FORMATDATA.UserFormat | false> => {
  try {
    const ret: FORMATDATA.UserFormat | null = await getItem<FORMATDATA.UserFormat>('user');
    return ret || false;
  } catch (error) {
    console.log('Failed to get user:', error);
    return false;
  }
};

/**
 * Asynchronously removes the user data from storage.
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user data was successfully removed,
 *                             or `false` if an error occurred during the removal process.
 */
export const removeUser = async (): Promise<boolean> => {
  try {
    await removeItem('user');
    return true;
  } catch (error) {
    console.log('Failed to remove user:', error);
    return false;
  }
};

// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

export const saveRecipeWithID = async (data: FORMATDATA.RecipeFormat, id: string): Promise<boolean> => {
  try {
    await setItem(`recipe_${id}`, data);
    return true;
  } catch (error) {
    Alert.alert('Failed to save recipe');
    console.log('Failed to save recipe:', error);
    return false;
  }
};

export const getRecipeList = async (): Promise<FORMATDATA.RecipeFormat[] | false> => {
  try {
    const keys = await getAllKeys();
    const recipeKeys = keys.filter(key => key.startsWith('recipe_'));
    if (recipeKeys.length === 0) {
      return [];
    }
    
    const recipes = await multiGet(recipeKeys);
    const recipeList: FORMATDATA.RecipeFormat[] = [];
    
    for (const [, value] of recipes) {
      if (value) {
        recipeList.push(JSON.parse(value));
      }
    }
    
    return recipeList;
  } catch (error) {
    console.log('Failed to get recipe list:', error);
    return false;
  }
};

export const getRecipeById = async (id: string): Promise<FORMATDATA.RecipeFormat | false> => {
  try {
    const ret: FORMATDATA.RecipeFormat | null = await getItem<FORMATDATA.RecipeFormat>(`recipe_${id}`);
    return ret || false;
  } catch (error) {
    console.log('Failed to get recipe by id:', error);
    return false;
  }
};

export const removeRecipeById = async (id: string): Promise<boolean> => {
  try {
    await removeItem(`recipe_${id}`);
    return true;
  } catch (error) {
    console.log('Failed to remove recipe:', error);
    return false;
  }
};

export const clearRecipeList = async (): Promise<boolean> => {
  try {
    const keys = await getAllKeys();
    const recipeKeys = keys.filter(key => key.startsWith('recipe_'));
    
    for (const key of recipeKeys) {
      await removeItem(key);
    }
    
    return true;
  } catch (error) {
    console.log('Failed to clear recipe list:', error);
    return false;
  }
};

export const saveTodayNutri = async (data: FORMATDATA.NutriFormat): Promise<boolean> => {
  try {
    await setItem('todayNutri', data);
    return true;
  } catch (error) {
    Alert.alert('Failed to save today nutrition');
    console.log('Failed to save today nutrition:', error);
    return false;
  }
};

export const getTodayNutri = async (): Promise<FORMATDATA.NutriFormat> => {
  const defaultNutri: FORMATDATA.NutriFormat = {
    calo: 0,
    protein: 0,
    carb: 0,
    fat: 0,
  };

  try {
    const ret: FORMATDATA.NutriFormat | null = await getItem<FORMATDATA.NutriFormat>('todayNutri');
    return ret || defaultNutri;
  } catch (error) {
    console.log('Failed to get today nutrition:', error);
    return defaultNutri;
  }
};

export const AddRecipeToTodayNutri = async (id: string, nutri?: FORMATDATA.NutriFormat): Promise<boolean> => {
  try {
    let recipeNutri: FORMATDATA.NutriFormat;
    if (nutri) {
      recipeNutri = nutri;
    } else {
      let recipe = await getRecipeById(id);
      if (!recipe || !recipe.nutri) {
        return false;
      } else {
        recipeNutri = recipe.nutri;
      }
    }
    const todayNutri = await getTodayNutri() as FORMATDATA.NutriFormat;
    if (!todayNutri) {
      return false;
    }

    todayNutri.calo = (todayNutri.calo || 0) + (recipeNutri.calo || 0);
    todayNutri.protein = (todayNutri.protein || 0) + (recipeNutri.protein || 0);
    todayNutri.carb = (todayNutri.carb || 0) + (recipeNutri.carb || 0);
    todayNutri.fat = (todayNutri.fat || 0) + (recipeNutri.fat || 0);

    await saveTodayNutri(todayNutri);
    return true;
  } catch (error) {
    console.log('Failed to add recipe to today nutrition:', error);
    return false;
  }
};

export const saveGoalNutri = async (data: FORMATDATA.NutriFormat): Promise<boolean> => {
  try {
    await setItem('goalNutri', data);
    return true;
  } catch (error) {
    Alert.alert('Failed to save nutrition goal');
    console.log('Failed to save nutrition goal:', error);
    return false;
  }
};

export const getGoalNutri = async (): Promise<FORMATDATA.NutriFormat> => {
  const defaultNutri: FORMATDATA.NutriFormat = factoryData.targetNutri;

  try {
    const ret: FORMATDATA.NutriFormat | null = await getItem<FORMATDATA.NutriFormat>('goalNutri');
    return ret || defaultNutri;
  } catch (error) {
    console.log('Failed to get nutrition goal:', error);
    return defaultNutri;
  }
};

