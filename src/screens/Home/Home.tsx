import React, { useCallback } from 'react'
import { BodyText, HomeContainer, HomeContent, LogoImage } from './Home.styles'
import Logo from '@assets/logo.png'
import { HomeResume } from '@components/HomeResume'
import { Button } from '@components/Button'
import { Select } from '@components/Select'
import { MealItem } from '@components/MealItem'
import { FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getDatesList } from '@storage/getDatesList.service'
import { getMealsByDate } from '@storage/GetMealsByDate.service'
import { MealDTO } from '@storage/DTOs'
import { getResume } from '@storage/getResume.service'
import { EmptyPage } from '@components/EmptyMealPage'




export const Home = () => {
  const [dateSelected, setDateSelected] = React.useState('' as string)
  const [datesList, setDatesList] = React.useState<string[]>([] )
  const [meals, setMeals] = React.useState<MealDTO[]>([] )
const [totalMeals, setTotalMeals] = React.useState(0)
  
 const getDates = async () => {
  try {
    const dates = await getDatesList()
    setDatesList(dates)
    if(dates.length > 0) {
      setDateSelected(dates[0])
    }else{
      setDateSelected('')
    }

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

 const getAllMealsData = async () => {
  try {
    const resume = await getResume()
    setTotalMeals(resume.totalMeals)
  } catch (error) {
    console.log(error)
  }
 }

 

  useFocusEffect(useCallback(()=>{
    getDates()
    getMeals()
    getAllMealsData()
  },[]))

  useFocusEffect(useCallback(()=>{
    getMeals()
  },[dateSelected]))

  const comboOptions = datesList.map((date) => ({value: date, label: date}))

  const {navigate} = useNavigation()
  return totalMeals ?(
    <HomeContainer>
        <LogoImage source={Logo} />
        
        <HomeResume />
        <HomeContent>
        <BodyText>Refeições</BodyText>
        <Button 
        label='Nova Refeição' 
        variant='contained' 
        onPress={()=>navigate('addmeal')}
        iconName='add'/>
        <Select 
          options={comboOptions}
          onChange={(value) => setDateSelected(value)}
          placeholder='Selecione uma data'
        />
        <FlatList 
          data={meals}
          renderItem={({item}) => <MealItem meal={item}/>}
          keyExtractor={(item) => `${item.id}`}
          ListEmptyComponent={() => <BodyText>Nenhuma refeição cadastrada</BodyText>}
         
        />
        </HomeContent>
    </HomeContainer>
  ): <EmptyPage />
}
