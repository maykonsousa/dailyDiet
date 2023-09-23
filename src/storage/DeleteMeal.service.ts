import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllmeals.service";
import { getMealById } from "./getMealById.service";
import { AppError } from "@utils/AppError";
import { MEAL_COLLECTION } from "./collections";

export const deleteMeal = async (mealId: string) => {
   try {
    const allMeals = await getAllMeals();
    const mealSelected = getMealById(mealId);
    if(!mealSelected) {
        throw new AppError("Refeição não encontrada", 404);
    }
    const newMeals = allMeals.filter(meal => meal.id !== mealId);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMeals));
   } catch (error) {
         throw new AppError("Erro ao deletar refeição", 500);
    
   }

};