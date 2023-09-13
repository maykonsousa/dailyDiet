import React from 'react'
import { BodyText, HomeContainer, HomeContent, LogoImage } from './Home.styles'
import Logo from '@assets/logo.png'
import { HomeResume } from '@components/HomeResume'
import { Button } from '@components/Button'
import { Select } from '@components/Select'
import { MealItem } from '@components/MealItem'
import { FlatList } from 'react-native'
import { MealMock } from '@storage/mocks'
import { useNavigation } from '@react-navigation/native'




export const Home = () => {
  const [dateSelected, setDateSelected] = React.useState('' as string)
  const {navigate} = useNavigation()
  return (
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
        placeholder="Selecione a Data"
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
