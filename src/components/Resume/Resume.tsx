import React from 'react'
import { ResumeContainer, ResumeDescription, ResumeTitle, DetailButton, DetailIcon } from './Resume.styles'

export const Resume = () => {
  return (
    <ResumeContainer>
        <DetailButton>
            <DetailIcon />
        </DetailButton>
        <ResumeTitle>90,86%</ResumeTitle>
        <ResumeDescription>das refeições dentro da dieta</ResumeDescription>
    </ResumeContainer>
  )
}
