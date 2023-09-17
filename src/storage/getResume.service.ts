import { ResumeDTO } from "./DTOs";
import { getAllMeals } from "./getAllmeals.service";



export const getResume = async ():Promise<ResumeDTO> => {
    try {
        const meals = await getAllMeals();

    const totalMeals = meals.length;
    const totalMealsDiet = meals.filter((item) => item.onHealthyDiet === 'yes').length;
    const totalMealsNotDiet = meals.filter((item) => item.onHealthyDiet === 'no').length;
    const percentageMealsDiet = totalMealsDiet / totalMeals * 100
    const pasedPercentage = parseFloat(percentageMealsDiet.toFixed(2));

    const findBestDietSequence = () => {
        let currentSequence = 0; // comprimento da sequência atual
        let maxSequence = 0; // comprimento máximo da sequência encontrada
        let startIndex = 0; // índice de início da sequência atual
        let endIndex = 0; // índice de término da sequência atual
        let bestSequence = []; // array para armazenar a melhor sequência encontrada até agora
    
        for (let i = 0; i < meals.length; i++) {
            if (meals[i].onHealthyDiet === 'yes') {
                currentSequence++;
    
                // Se a sequência atual for maior do que a sequência máxima encontrada até agora
                if (currentSequence > maxSequence) {
                    maxSequence = currentSequence;
                    endIndex = i; // atualiza o índice de término da sequência
                    startIndex = endIndex - maxSequence + 1; // atualiza o índice de início da sequência
                }
            } else {
                currentSequence = 0; // reinicia a contagem se a refeição não for saudável
            }
        }
    
        // Obtém a melhor sequência de refeições da matriz original
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