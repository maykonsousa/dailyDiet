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
import { ALert } from '@components/Alert'
import { deleteMeal } from '@storage/DeleteMeal.service'
import { tr } from 'date-fns/locale'

export const Detail = () => {
    const [meal, setMeal] = React.useState<MealDTO>({} as MealDTO)
    const [showDeleteModal, setShowDeleteModal] = React.useState(false)
    const router = useRoute()
    const theme = useTheme()
    const {navigate} = useNavigation()
    
    const {id} = router.params as {id: string}
    const getMeal = async () => {
       try {
        const meal = await getMealById(id)
        setMeal(meal)
       }
         catch(error) {
            console.log(error)
                 }
    }

   

    const handleOpenDeleteModal = () => {
        setShowDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false)
    }

    const handleBackToHome = () => {
        navigate('home')
        handleCloseDeleteModal
    }

    const handleDeleteMeal = async () => {
        try {
            await deleteMeal(id)
            navigate('home')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMeal()
    },[meal])
    const isSuccess = meal.onHealthyDiet === 'yes'
  return (
    <>
    <ALert
        title='Deseja realmente excluir o registro da refeição?'
        visible={showDeleteModal}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleDeleteMeal}
        confirmLabel='Sim, excluir'
        isAction
    />
    <DetailContainer 
        isSuccess={isSuccess}
    >
       <Header>
        <BackButton onPress={handleBackToHome}>
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
            <Button label='Editar refeição' variant='contained' iconName='edit' onPress={()=>navigate("editmeal", {id})} />
            <Button label='Excluir refeição' variant='outlined' iconName='delete' onPress={handleOpenDeleteModal} />

        </Content>
    </DetailContainer>
    </>
  )
}
