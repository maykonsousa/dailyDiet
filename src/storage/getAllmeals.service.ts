import { MealDTO } from "./DTOs";
import { MEAL_COLLECTION } from "./collections";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllMeals = async ():Promise<MealDTO[]> => {
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
        const meals = storage ? JSON.parse(storage) : [];
        return meals;
    } catch (error) {
        throw error;
    }
};