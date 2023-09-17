import React from 'react'
import { DashBoardContainer, DashboardContent, DashboardTitle, InformationDetail, InformationTitle, DetailContainer, ResultContainer, InDietContainer, OutDietContainer } from './DashBoard.styles'
import { DashboardResume } from '@components/DashboardResume'
import { getResume } from '@storage/getResume.service'
import { ResumeDTO } from '@storage/DTOs'
import { useFocusEffect } from '@react-navigation/native'

export const DashBoard = () => {

    const [resume, setResume] = React.useState<ResumeDTO>({} as ResumeDTO)
    const getResumeData = async() => {
      try {
        const resumeData = await getResume()
        setResume(resumeData)
      } catch (error) {
        console.log(error)
      }
   }

   useFocusEffect(React.useCallback(()=>{
      getResumeData()
   }, []))

   const isSuccess = resume.percentageMealsDiet >= 50
  return (
    <DashBoardContainer
    isSuccess={isSuccess}
    >
      <DashboardResume percentageMealsDiet={resume.percentageMealsDiet} />
        <DashboardContent>
          <DashboardTitle>Estatísticas gerais</DashboardTitle>
          <DetailContainer>
            <InformationTitle>{resume.sequence}</InformationTitle>
            <InformationDetail>melhor sequência de pratos dentro da dieta</InformationDetail>
          </DetailContainer>
          <DetailContainer>
            <InformationTitle>{resume.totalMeals}</InformationTitle>
            <InformationDetail>refeições registradas</InformationDetail>
          </DetailContainer>
          <ResultContainer>
            <InDietContainer>
              <InformationTitle>{resume.totalMealsDiet}</InformationTitle>
              <InformationDetail>refeições dentro da dieta</InformationDetail>
            </InDietContainer>
            <OutDietContainer>
              <InformationTitle>{resume.totalMealsNotDiet}</InformationTitle>
              <InformationDetail>refeições fora da dieta</InformationDetail>
            </OutDietContainer>
          </ResultContainer>
        
        </DashboardContent>
    </DashBoardContainer>
  )
}
