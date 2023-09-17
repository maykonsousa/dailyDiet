import { MealDTO } from '@storage/DTOs'
import React from 'react'
import { HealthIndicator, MeaItemContainer, MealHour, MealInfo, MealName } from './MealItem.styles'
import { useNavigation } from '@react-navigation/native'
interface MealItemProps {
    meal: MealDTO
}
export const MealItem = ({meal}:MealItemProps) => {
  const {navigate} = useNavigation()
  return (
    <MeaItemContainer onPress={()=>navigate('detail', {id:`${meal.id}`})}>
        <MealInfo>
            <MealHour>{meal.hour}</MealHour>
            <MealName>{meal.name}</MealName>
        </MealInfo>
        <HealthIndicator healthy={meal.onHealthyDiet}/>
    </MeaItemContainer>
  )
}
