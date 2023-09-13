import { MealDTO } from "@storage/DTOs";

export const MealMock:MealDTO[] = [
    {
      id: '1',
      name: 'Café da manhã',
      description: 'Torrada com queijo e presunto, e suco de laranja',
      hour: '07:00',
      onHealthyDiet: true,
      date: '10/09/23'
    },
    {
      id: '2',
      name: 'Lanche da manhã',
      description: 'Iogurte com granola e morangos',
      hour: '10:30',
      onHealthyDiet: true,
      date: '10/09/23'
    },
    {
      id: '3',
      name: 'Almoço',
      description: 'Pizza de pepperoni e refrigerante',
      hour: '12:30',
      onHealthyDiet: false,
      date: '10/09/23'
    },
    {
      id: '4',
      name: 'Lanche da tarde com amigos do trabalho',
      description: 'Mix de nozes e frutas secas',
      hour: '15:30',
      onHealthyDiet: true,
      date: '10/09/23'
    },
    {
      id: '5',
      name: 'Jantar',
      description: 'Salmão assado com quinoa e brócolis',
      hour: '19:00',
      onHealthyDiet: true,
      date: '10/09/23'
    }
    
    
  ]