import { ResumeDTO } from "./DTOs";
import { getAllMeals } from "./getAllmeals.service";



export const getResume = async ():Promise<ResumeDTO> => {
    try {
        const meals = await getAllMeals();

    const totalMeals = meals.length;
    const totalMealsDiet = meals?.filter((item) => item.onHealthyDiet === 'yes')?.length || 0;
    const totalMealsNotDiet = meals?.filter((item) => item.onHealthyDiet === 'no')?.length || 0;
    const percentageMealsDiet = totalMealsDiet / totalMeals * 100
    const pasedPercentage = totalMeals? parseFloat(percentageMealsDiet.toFixed(2)) : 0;

    
    const findBestDietSequence = () => {
        let currentSequence = 0; 
        let maxSequence = 0;
        let startIndex = 0; 
        let endIndex = 0; 
        let bestSequence = []; 
    
        for (let i = 0; i < meals.length; i++) {
            if (meals[i].onHealthyDiet === 'yes') {
                currentSequence++;
    
                if (currentSequence > maxSequence) {
                    maxSequence = currentSequence;
                }
            } else {
            }
        }
    
        bestSequence = meals.slice(startIndex, endIndex + 1);
    
        return bestSequence.length;
    };
    
   

    return {
        totalMeals,
        totalMealsDiet,
        totalMealsNotDiet,
        percentageMealsDiet: pasedPercentage,
        sequence: findBestDietSequence(),
    }
    } catch (error) {
        throw error;
    }
};