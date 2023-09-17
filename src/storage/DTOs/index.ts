export interface MealDTO {
    id?: string,
    name: string,
    description: string,
    date: string,
    hour: string,
    onHealthyDiet: 'yes' | 'no' | null,

};

export interface ResumeDTO {
    totalMeals: number,
    totalMealsDiet: number,
    totalMealsNotDiet: number,
    percentageMealsDiet: number,
    sequence: number,
}

export interface MealIputDTO {
    name: string;
    description: string;
    date: string,
    hour: string,
    onHealthyDiet: 'yes' | 'no' | null,
       
}