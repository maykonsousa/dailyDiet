import React from 'react'
import { AddMealContainer, AddMealContent, AddMealTitle, BackIcon, BackButton, AddMealHeader, TimeContainer, TimeInputContainer } from './AddMeal.styles'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { TextArea } from '@components/TextArea';

interface IFormValues {
    name: string;
    description: string;
    date: string,
    hour: string,
    onHealthyDiet: 'yes' | 'no' | null,

}

const InitialFormValues:IFormValues = {
    name: '',
    description: '',
    date: '',
    hour: '',
    onHealthyDiet: null,
}

export const AddMeal = () => {
  const [formValues, setFormValues] = React.useState<IFormValues>(InitialFormValues)
  

  const handleChanges = (value: string, name: keyof IFormValues) => {
      setFormValues({...formValues, [name]: value})
  }

  const handleChangeDate = (value: string) => {
        if(value.length === 2 || value.length === 5) {
        setFormValues({...formValues, date: value + '/'})
    }
    else {
        setFormValues({...formValues, date: value})
    }

  }

  const handleChangeHour = (value: string) => {
    if(value.length === 2) {
    setFormValues({...formValues, hour: value + ':'})
  } else {
    setFormValues({...formValues, hour: value})
  }
}

  const {navigate} = useNavigation()
  return (
    <AddMealContainer>
        <AddMealHeader>

        <BackButton onPress={()=>navigate('home')} >
            <BackIcon />
        </BackButton>
        <AddMealTitle>Nova refeição</AddMealTitle>
        </AddMealHeader>
       
        <AddMealContent>
            <Input 
            label="Nome da refeição" 
            placeholder="Ex: Café da manhã"
            error="Campo obrigatório" 
            isRequired
            value={formValues.name}
            onChangeText={(value) => handleChanges(value, 'name')}
            />

            <TextArea 
            label="Descrição"
            placeholder="Ex: Torradas com manteiga e café com leite"
            error="Campo obrigatório"
            isRequired
            value={formValues.description}
            style={{textAlignVertical: 'top'}}
            onChangeText={(value) => handleChanges(value, 'description')}
            />

            <TimeContainer>

            <TimeInputContainer>
                
               

            </TimeInputContainer>
            
           
            <TimeInputContainer>
               

            </TimeInputContainer>

            

            </TimeContainer>

            

        </AddMealContent>
    </AddMealContainer>
  )
}
