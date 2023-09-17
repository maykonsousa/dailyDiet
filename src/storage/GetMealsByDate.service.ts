import { MealDTO } from "./DTOs";
import { getAllMeals } from "./getAllmeals.service";

export const getMealsByDate = async (date: string): Promise<MealDTO[]> => {
    try {
        const allMeals = await getAllMeals();
        const mealsByDate = allMeals.filter((item) => item.date === date);
        return mealsByDate;
    } catch (error) {
        throw error;
    }
}