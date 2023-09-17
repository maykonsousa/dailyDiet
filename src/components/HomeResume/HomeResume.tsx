import React from 'react'
import { ResumeContainer, ResumeDescription, ResumeTitle, DetailButton, DetailIcon } from './HomeResume.styles'
import { useNavigation } from '@react-navigation/native'


interface HomeResumeProps {
  percentageMealsDiet: number;
}

export const HomeResume = ({percentageMealsDiet }:HomeResumeProps) => {
    const {navigate} = useNavigation()
    const isSuccess = percentageMealsDiet >= 50
  
  return (
    <ResumeContainer isSuccess={isSuccess}>
        <DetailButton onPress={()=>navigate("dashboard")}>
            <DetailIcon />
        </DetailButton>
        <ResumeTitle>{`${percentageMealsDiet}%`}</ResumeTitle>
        <ResumeDescription>das refeições dentro da dieta</ResumeDescription>
    </ResumeContainer>
  )
}
