import React from 'react'
import {PageContainer, PageImage, PageText, PageTitle } from './EmptyMealPage.styles'

import Logo from '@assets/logo.png'
import { Button } from '@components/Button'
import {  useNavigation, useRoute } from '@react-navigation/native'

export const EmptyPage = () => {
const {navigate} = useNavigation()




  return (
    <PageContainer>
        <PageImage source={Logo}  />
        <PageTitle >Você ainda não tem nenhuma refeição cadastrada </PageTitle>
        <PageText>
            Para cadastrar uma refeição, clique no botão abaixo
        </PageText>
        <Button iconName='add' label='Nova refeição' variant='contained' onPress={()=>navigate('addmeal')}  />

    </PageContainer>
  )
}
