import React from 'react'
import { BodyText, HomeContainer, HomeContent, LogoImage } from './Home.styles'
import Logo from '@assets/logo.png'
import { Resume } from '@components/Resume'
import { Button } from '@components/Button'
import { Select } from '@components/Select'
import { MealItem } from '@components/MealItem'
import { MealDTO } from '@storage/DTOs'
import { FlatList } from 'react-native'


const MealMock:MealDTO[] = [
  {
    id: '1',
    name: 'Café da manhã',
    description: 'Torrada com queijo e presunto, e suco de laranja',
    hour: '07:00',
    onHealthyDiet: true,
    date: '10/09/23'
  },
  {
    id: '2',
    name: 'Lanche da manhã',
    description: 'Iogurte com granola e morangos',
    hour: '10:30',
    onHealthyDiet: true,
    date: '10/09/23'
  },
  {
    id: '3',
    name: 'Almoço',
    description: 'Pizza de pepperoni e refrigerante',
    hour: '12:30',
    onHealthyDiet: false,
    date: '10/09/23'
  },
  {
    id: '4',
    name: 'Lanche da tarde com amigos do trabalho',
    description: 'Mix de nozes e frutas secas',
    hour: '15:30',
    onHealthyDiet: true,
    date: '10/09/23'
  },
  {
    id: '5',
    name: 'Jantar',
    description: 'Salmão assado com quinoa e brócolis',
    hour: '19:00',
    onHealthyDiet: true,
    date: '10/09/23'
  }
  
  
]

export const Home = () => {
  const [dateSelected, setDateSelected] = React.useState('' as string)
  return (
    <HomeContainer>
        <LogoImage source={Logo} />
        <Resume />
        <HomeContent>
        <BodyText>Refeições</BodyText>
        <Button label='Nova Refeição' variant='contained' iconName='add'/>
        <Select 
          options={[
            {value: '10/09/23', label: '10/09/23'},
            {value: '09/09/23', label: '09/09/23'},
            {value: '08/09/23', label: '08/09/23'},
            {value: '07/09/23', label: '07/09/23'},
            {value: '06/09/23', label: '06/09/23'},
            {value: '05/09/23', label: '05/09/23'},
            {value: '04/09/23', label: '04/09/23'},
            {value: '03/09/23', label: '03/09/23'},
            {value: '02/09/23', label: '02/09/23'},
            {value: '01/09/23', label: '01/09/23'},
            
          ]}
          onChange={(value) => setDateSelected(value)}
        />
        <FlatList 
          data={MealMock}
          renderItem={({item}) => <MealItem meal={item}/>}
          keyExtractor={(item) => `${item.id}`}
        />
        </HomeContent>
    </HomeContainer>
  )
}
