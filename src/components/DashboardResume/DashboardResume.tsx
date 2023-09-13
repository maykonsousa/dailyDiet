import React from 'react'
import { ResumeContainer, ResumeDescription, ResumeTitle, BackButton, BackIcon } from './DashboardResume.styles'
import { useNavigation } from '@react-navigation/native'

export const DashboardResume = () => {
  const {navigate} = useNavigation()
  return (
    <ResumeContainer>
        <BackButton onPress={()=>navigate("home")}>
            <BackIcon />
        </BackButton>
        <ResumeTitle>90,86%</ResumeTitle>
        <ResumeDescription>das refeições dentro da dieta</ResumeDescription>
    </ResumeContainer>
  )
}
