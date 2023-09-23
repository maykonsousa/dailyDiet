import { MealIputDTO } from "./DTOs";
import { MEAL_COLLECTION } from "./collections";
import { getAllMeals } from "./getAllmeals.service";
import { getMealById } from "./getMealById.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IEditMeal {
    id: string;
    data: MealIputDTO;
}

export const EditMealService = async ({id, data}:IEditMeal) => {
    try {
        const allmeals = await getAllMeals();
        const meal = await getMealById(id);

        const filteredMeals = allmeals.filter((meal) => meal.id !== id);
        const updatedMeal = {
            ...meal,
            ...data

        }
        const updatedMeals = [...filteredMeals, updatedMeal];
        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));

    } catch (error) {
        throw error;
    }

};