import React from 'react'
import { ResumeContainer, ResumeDescription, ResumeTitle, BackButton, BackIcon } from './DashboardResume.styles'
import { useNavigation } from '@react-navigation/native'

interface DashboardResumeProps {
  percentageMealsDiet: number;
}

export const DashboardResume = ({percentageMealsDiet}:DashboardResumeProps) => {
  const {navigate} = useNavigation()
  return (
    <ResumeContainer>
        <BackButton onPress={()=>navigate("home")}>
            <BackIcon />
        </BackButton>
        <ResumeTitle>{`${percentageMealsDiet}%`}</ResumeTitle>
        <ResumeDescription>das refeições dentro da dieta</ResumeDescription>
    </ResumeContainer>
  )
}
