import { AppError } from "@utils/AppError";
import { MealDTO } from "./DTOs";
import { getAllMeals } from "./getAllmeals.service";

export const getMealById = async(id:string):Promise<MealDTO> => {
    try {
        const meals = await getAllMeals();
        const meal = meals.find(meal => meal.id === id);
        if(!meal) throw new AppError('Refeição não encontrada', 404);
        return meal;
    } catch (error) {
        throw error;
    }

}