import React, { useCallback } from 'react'
import { FeedBackImage, FeedbackContainer, FeedbackText, FeedbackTitle } from './Feedback.styles'

import FeedbackSuccessImg from '@assets/feedbackSuccess.png'
import FeedbackFailImg from '@assets/feedbackFail.png'
import { Button } from '@components/Button'
import {  useNavigation, useRoute } from '@react-navigation/native'

export const Feedback = () => {
const router = useRoute()
const {navigate} = useNavigation()
const {is_meal_diet} = router.params as {is_meal_diet: 'yes' | 'no' }

const isSuccessFeedback = is_meal_diet === 'yes'



  return (
    <FeedbackContainer>
        <FeedbackTitle isSuccess={isSuccessFeedback}>
            {isSuccessFeedback ? 'Continue assim!' : 'Que pena!'}
        </FeedbackTitle>
        <FeedbackText>{isSuccessFeedback?'Você continua dentro da dieta. Muito bem!':'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!' }</FeedbackText>
        <FeedBackImage source={isSuccessFeedback ? FeedbackSuccessImg : FeedbackFailImg} />
        <Button label='Voltar para página inicial' variant='contained' onPress={()=>navigate('home')}  />

    </FeedbackContainer>
  )
}
