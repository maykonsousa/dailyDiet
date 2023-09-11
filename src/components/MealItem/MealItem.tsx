import { MealDTO } from '@storage/DTOs'
import React from 'react'
import { HealthIndicator, MeaItemContainer, MealHour, MealInfo, MealName } from './MealItem.styles'
interface MealItemProps {
    meal: MealDTO
}
export const MealItem = ({meal}:MealItemProps) => {
  return (
    <MeaItemContainer>
        <MealInfo>
            <MealHour>{meal.hour}</MealHour>
            <MealName>{meal.name}</MealName>
        </MealInfo>
        <HealthIndicator healthy={meal.onHealthyDiet}/>
    </MeaItemContainer>
  )
}
