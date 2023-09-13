import React from 'react'
import { ResumeContainer, ResumeDescription, ResumeTitle, DetailButton, DetailIcon } from './HomeResume.styles'
import { useNavigation } from '@react-navigation/native'

export const HomeResume = () => {
  const {navigate} = useNavigation()
  return (
    <ResumeContainer>
        <DetailButton onPress={()=>navigate("dashboard")}>
            <DetailIcon />
        </DetailButton>
        <ResumeTitle>90,86%</ResumeTitle>
        <ResumeDescription>das refeições dentro da dieta</ResumeDescription>
    </ResumeContainer>
  )
}
