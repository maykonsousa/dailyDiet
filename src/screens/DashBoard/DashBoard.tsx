import React from 'react'
import { DashBoardContainer, DashboardContent, DashboardTitle, InformationDetail, InformationTitle, DetailContainer, ResultContainer, InDietContainer, OutDietContainer } from './DashBoard.styles'
import { DashboardResume } from '@components/DashboardResume'

export const DashBoard = () => {

    const [isSuccess, setIsSuccess] = React.useState(false)
  return (
    <DashBoardContainer
    isSuccess={isSuccess}
    >
      <DashboardResume />
        <DashboardContent>
          <DashboardTitle>Estatísticas gerais</DashboardTitle>
          <DetailContainer>
            <InformationTitle>22</InformationTitle>
            <InformationDetail>melhor sequência de pratos dentro da dieta</InformationDetail>
          </DetailContainer>
          <DetailContainer>
            <InformationTitle>109</InformationTitle>
            <InformationDetail>refeições registradas</InformationDetail>
          </DetailContainer>
          <ResultContainer>
            <InDietContainer>
              <InformationTitle>50</InformationTitle>
              <InformationDetail>refeições dentro da dieta</InformationDetail>
            </InDietContainer>
            <OutDietContainer>
              <InformationTitle>50</InformationTitle>
              <InformationDetail>refeições fora da dieta</InformationDetail>
            </OutDietContainer>
          </ResultContainer>
        
        </DashboardContent>
    </DashBoardContainer>
  )
}
