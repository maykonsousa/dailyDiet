import React, { useEffect } from 'react'
import { 
    DetailContainer, 
    BackButton, 
    BackIcon, 
    Content, 
    Description, 
    Header, 
    HeaderTitle, 
    Moment, 
    MomentLabel, 
    Name, 
    StatusContainer, 
    StatusIndicator, 
    StatusLabel, 
    Divisor
} from './Detail.styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealDTO } from '@storage/DTOs'
import { getMealById } from '@storage/getMealById.service'
import { useTheme } from 'styled-components/native'
import { Button } from '@components/Button'

export const Detail = () => {
    const [meal, setMeal] = React.useState<MealDTO>({} as MealDTO)
    const router = useRoute()
    const theme = useTheme()
    const {navigate} = useNavigation()
    
    const {id} = router.params as {id: string}
    const getMeal = async () => {
        const meal = await getMealById(id)
        setMeal(meal)
    }

    useEffect(()=>{
        getMeal()
    },[meal])
    const isSuccess = meal.onHealthyDiet === 'yes'
  return (
    <DetailContainer 
        isSuccess={isSuccess}
    >
       <Header>
        <BackButton onPress={()=>navigate('home')}>
            <BackIcon color={isSuccess? theme.colors['green-dark'] : theme.colors['red-dark']} />
        </BackButton>
        <HeaderTitle>Refeição</HeaderTitle>
        </Header> 
        <Content>
            <Name>{meal.name}</Name>
            <Description>{meal.description}</Description>
            <MomentLabel>Data e hora</MomentLabel>
            <Moment>{`${meal.date} às ${meal.hour}`} </Moment>
            <StatusContainer>
                <StatusIndicator color={isSuccess ? theme.colors['green-dark'] : theme.colors['red-dark']}/>
                <StatusLabel>Refeição {meal.onHealthyDiet === 'yes' ? 'dentro' : 'fora'} da dieta</StatusLabel>
            </StatusContainer>
            <Divisor />
            <Button label='Editar refeição' variant='contained' iconName='edit' onPress={()=>{}} />
            <Button label='Excluir refeição' variant='outlined' iconName='delete' onPress={()=>{}} />

        </Content>
    </DetailContainer>
  )
}
