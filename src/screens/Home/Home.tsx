import React, { useCallback, useEffect } from 'react'
import { BodyText, HomeContainer, HomeContent, LogoImage } from './Home.styles'
import Logo from '@assets/logo.png'
import { HomeResume } from '@components/HomeResume'
import { Button } from '@components/Button'
import { Select } from '@components/Select'
import { MealItem } from '@components/MealItem'
import { FlatList } from 'react-native'
import { MealMock } from '@storage/mocks'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getDatesList } from '@storage/getDatesList.service'
import { getMealsByDate } from '@storage/GetMealsByDate.service'
import { MealDTO, ResumeDTO } from '@storage/DTOs'
import { getResume } from '@storage/getResume.service'




export const Home = () => {
  const [dateSelected, setDateSelected] = React.useState('' as string)
  const [datesList, setDatesList] = React.useState<string[]>([] )
  const [meals, setMeals] = React.useState<MealDTO[]>([] )
  const [resume, setResume] = React.useState<ResumeDTO>({} as ResumeDTO)
  
 const getDates = async () => {
  try {
    const dates = await getDatesList()
    setDatesList(dates)
    if(dates.length > 0) setDateSelected(dates[0])
  } catch (error) {
    console.log(error)
  }
 }

 const getMeals = async () => {
  try {
    const mealsData = await getMealsByDate(dateSelected)
    setMeals(mealsData)
  } catch (error) {
    console.log(error)
  }
 }

 const getResumeData = async() => {
    try {
      const resumeData = await getResume()
      setResume(resumeData)
    } catch (error) {
      console.log(error)
    }
 }

  useFocusEffect(useCallback(()=>{
    getDates()
    getResumeData()
  },[]))

  useEffect(()=>{
    getMeals()
  },[dateSelected])

  const comboOptios = datesList.map((date) => ({value: date, label: date}))

  const {navigate} = useNavigation()
  return (
    <HomeContainer>
        <LogoImage source={Logo} />
        <HomeResume percentageMealsDiet={resume.percentageMealsDiet} />
        <HomeContent>
        <BodyText>Refeições</BodyText>
        <Button 
        label='Nova Refeição' 
        variant='contained' 
        onPress={()=>navigate('addmeal')}
        iconName='add'/>
        <Select 
          options={comboOptios}
          onChange={(value) => setDateSelected(value)}
        />
        <FlatList 
          data={meals}
          renderItem={({item}) => <MealItem meal={item}/>}
          keyExtractor={(item) => `${item.id}`}
          ListEmptyComponent={() => <BodyText>Nenhuma refeição cadastrada</BodyText>}
         
        />
        </HomeContent>
    </HomeContainer>
  )
}
