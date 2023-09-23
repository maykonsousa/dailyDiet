import { parse } from 'date-fns';
import { getAllMeals } from './getAllmeals.service';

export const getDatesList = async (): Promise<string[]> => {
  try {
    const allMeals = await getAllMeals();
    
    const dateStringsList = allMeals.map(item => item.date);
    
    const uniqueDateStrings = Array.from(new Set(dateStringsList));

    const sortedDateStrings = uniqueDateStrings.sort((a, b) => {
      const dateA = parse(a, 'dd/MM/yyyy', new Date());
      const dateB = parse(b, 'dd/MM/yyyy', new Date());
      return dateB.getTime() - dateA.getTime();
    });

    return sortedDateStrings;
  } catch (error) {
    throw error;
  }
};
