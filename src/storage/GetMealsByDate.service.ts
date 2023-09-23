import { MealDTO } from "./DTOs";
import { getAllMeals } from "./getAllmeals.service";

export const getMealsByDate = async (date: string): Promise<MealDTO[]> => {
    try {
        const allMeals = await getAllMeals();
        const mealsByDate = allMeals.filter((item) => item.date === date);
        const mealsSortedByTime = mealsByDate.sort((a, b) => {
           const aTimeNumber = Number(a.hour.replace(':', ''));
              const bTimeNumber = Number(b.hour.replace(':', ''));
                return aTimeNumber - bTimeNumber;
        })
            
        
        return mealsSortedByTime;
    } catch (error) {
        throw error;
    }
}