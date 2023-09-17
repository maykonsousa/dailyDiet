import { getAllMeals } from "./getAllmeals.service";

export const getDatesList = async ():Promise<string[]> => {
    try {
        const allMeals = await getAllMeals();
        const datesList = allMeals.map((item) => item.date);
        const uniqueDatesList = Array.from(new Set(datesList));
        return uniqueDatesList;
    } catch (error) {
        throw error;
    }

};