import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as FORMATDATA from './interfaceFormat';
import { factoryData } from './factoryData';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});

export default storage;

/**
 * Saves the user data to storage.
 *
 * @param data - The user data to be saved.
 * @returns A promise that resolves to `true` if the data was saved successfully, or `false` if there was an error.
 */
export const saveUser = async (data: FORMATDATA.UserFormat): Promise<boolean> => {
  try {
    await storage.save({
      key: 'user',
      data: data,
    });
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
    const ret: FORMATDATA.UserFormat = await storage.load({
      key: 'user',
    });
    return ret;
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
    await storage.remove({
      key: 'user',
    });
    return true;
  } catch (error) {
    console.log('Failed to remove user:', error);
    return false;
  }
};

// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

export const saveRecipeWithID = async (data: FORMATDATA.RecipeFormat, id: string): Promise<boolean> => {
  try {
    await storage.save({
      key: 'recipe',
      data: data,
      id: id,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save recipe');
    console.log('Failed to save recipe:', error);
    return false;
  }
}

export const getRecipeList = async (): Promise<FORMATDATA.RecipeFormat[] | false> => {
  try {
    const ret: FORMATDATA.RecipeFormat[] = await storage.getAllDataForKey('recipe');
    return ret;
  } catch (error) {
    console.log('Failed to get recipe list:', error);
    return false;
  }
}

export const getRecipeById = async (id: string): Promise<FORMATDATA.RecipeFormat | false> => {
  try {
    const ret: FORMATDATA.RecipeFormat = await storage.load({
      key: 'recipe',
      id: id,
    });
    return ret;
  } catch (error) {
    console.log('Failed to get recipe by id:', error);
    return false;
  }
}

export const removeRecipeById = async (id: string): Promise<boolean> => {
  try {
    await storage.remove({
      key: 'recipe',
      id: id,
    });
    return true;
  } catch (error) {
    console.log('Failed to remove recipe:', error);
    return false;
  }
}

export const clearRecipeList = async (): Promise<boolean> => {
  try {
    await storage.clearMapForKey('recipe');
    return true;
  } catch (error) {
    console.log('Failed to clear recipe list:', error);
    return false;
  }
}

export const saveTodayNutri = async (data: FORMATDATA.NutriFormat): Promise<boolean> => {
  try {
    await storage.save({
      key: 'todayNutri',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save today nutrition');
    console.log('Failed to save today nutrition:', error);
    return false;
  }
}

export const getTodayNutri = async (): Promise<FORMATDATA.NutriFormat> => {
  const defaultNutri: FORMATDATA.NutriFormat = {
    calo: 0,
    protein: 0,
    carb: 0,
    fat: 0,
  };

  try {
    const ret: FORMATDATA.NutriFormat = await storage.load({
      key: 'todayNutri',
    });
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
}

export const saveGoalNutri = async (data: FORMATDATA.NutriFormat): Promise<boolean> => {
  try {
    await storage.save({
      key: 'goalNutri',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save nutrition goal');
    console.log('Failed to save nutrition goal:', error);
    return false;
  }
}

export const getGoalNutri = async (): Promise<FORMATDATA.NutriFormat> => {
  const defaultNutri: FORMATDATA.NutriFormat = factoryData.targetNutri;

  try {
    const ret: FORMATDATA.NutriFormat = await storage.load({
      key: 'goalNutri',
    });
    return ret || defaultNutri;
  } catch (error) {
    console.log('Failed to get nutrition goal:', error);
    return defaultNutri;
  }
};

