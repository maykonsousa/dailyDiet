import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "./DTOs";
import { MEAL_COLLECTION } from "./collections";
import { getAllMeals } from "./getAllmeals.service";
import uuid from "react-native-uuid";
import { AppError } from "@utils/AppError";

export const CreateMeal = async (meal:MealDTO) => {
    try {
        const allmeals  = await getAllMeals();
        const mealMomentAlreadyExists = allmeals.find((item) => item.hour === meal.hour && item.date === meal.date);
        if(mealMomentAlreadyExists) {
            throw new AppError("Já existe uma refeição cadastrada neste horário", 400);
        }

        const newMeal = {
            ...meal,
            id: uuid.v4(),
        }
   
    const updatedMeals = [...allmeals, newMeal];
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals));
    } catch (error) {
        throw error;
    }

}