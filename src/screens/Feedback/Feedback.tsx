import React, { useCallback } from 'react'
import { FeedBackImage, FeedbackContainer, FeedbackText, FeedbackTitle } from './Feedback.styles'

import FeedbackSuccessImg from '@assets/feedbackSuccess.png'
import FeedbackFailImg from '@assets/feedbackFail.png'
import { Button } from '@components/Button'
import { MealDTO } from '@storage/DTOs'
import { useFocusEffect } from '@react-navigation/native'

export const Feedback = () => {
const [mealSelected, setMealSelected] = React.useState<MealDTO | null>(null);

const mealMock:MealDTO = {
    id: '12345',
    name: 'Arroz com feijão',
    description: 'Arroz com feijão e bife',
    date: '10/10/2021',
    hour: '12:00',
    onHealthyDiet: 'yes',
} as MealDTO

const isSuccessFeedback = mealSelected?.onHealthyDiet === 'yes';

useFocusEffect(useCallback(() => {
    setMealSelected(mealMock)
    return () => {
        setMealSelected(null)
    }
}, [])
);

  return (
    <FeedbackContainer>
        <FeedbackTitle isSuccess={isSuccessFeedback}>
            {isSuccessFeedback ? 'Continue assim!' : 'Que pena!'}
        </FeedbackTitle>
        <FeedbackText>{isSuccessFeedback?'Você continua dentro da dieta. Muito bem!':'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!' }</FeedbackText>
        <FeedBackImage source={isSuccessFeedback ? FeedbackSuccessImg : FeedbackFailImg} />
        <Button label='Voltar para página inicial' variant='contained' onPress={()=>{}}  />

    </FeedbackContainer>
  )
}
