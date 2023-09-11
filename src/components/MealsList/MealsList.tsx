import React from 'react'
import { ListContainer, ListTitle } from './MealsList.styles'
import { Button } from '@components/Button'

export const MealsList = () => {
  return (
    <ListContainer>
        <ListTitle>Refeições</ListTitle>
        <Button label='Nova Refeição' variant='contained' iconName='add'/>
    </ListContainer>
  )
}
