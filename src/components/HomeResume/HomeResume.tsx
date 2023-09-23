import React, { useEffect, useCallback } from 'react'
import { ResumeContainer, ResumeDescription, ResumeTitle, DetailButton, DetailIcon } from './HomeResume.styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { ResumeDTO } from '@storage/DTOs'
import { getResume } from '@storage/getResume.service'




export const HomeResume = () => {
    const {navigate} = useNavigation()
    const [resume, setResume] = React.useState<ResumeDTO>({} as ResumeDTO)
    const isSuccess = resume.percentageMealsDiet >= 50
    
    const getResumeData = async() => {
      try {
        const resumeData = await getResume()
        setResume(resumeData)
      } catch (error) {
        console.log(error)
      }
   }

   useFocusEffect(useCallback(()=>{
    getResumeData()
   },[]))
  return (
    resume.percentageMealsDiet ? (
      <ResumeContainer isSuccess={isSuccess}>
        <DetailButton onPress={()=>navigate("dashboard")}>
            <DetailIcon />
        </DetailButton>
        <ResumeTitle>{`${resume.percentageMealsDiet}%`}</ResumeTitle>
        <ResumeDescription>das refeições dentro da dieta</ResumeDescription>
    </ResumeContainer>
    ):null
  )
}
