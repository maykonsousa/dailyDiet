import React, { useEffect } from 'react'
import { EditMealContainer, BackButton, Header, EditTitle, BackIcon, Content, GridContainer, GridItemContainer, Label, LabelError, Divisor,  } from './EditMeal.styles'
import { Input } from '@components/Input'
import { MealIputDTO } from '@storage/DTOs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EditMealService } from '@storage/EditMeal.service';
import { TextArea } from '@components/TextArea';
import { InputDate } from '@components/InputDate';
import { InputHour } from '@components/InputHour';
import { Checkbox } from '@components/Checkbox';
import { Button } from '@components/Button';
import { getMealById } from '@storage/getMealById.service';
import { ALert } from '@components/Alert';

interface IErrors {
    name?: string;
    description?: string;
    date?: string,
    hour?: string,
    onHealthyDiet?: string,


}

const InitialFormValues:MealIputDTO = {
    name: '',
    description: '',
    date: '',
    hour: '',
    onHealthyDiet: null,
}

const InitialErrors:IErrors = {
    name: '',
    description: '',
    date: '',
    hour: '',
    onHealthyDiet: '',

}

export const EditMeal = () => {
    const [formValues, setFormValues] = React.useState<MealIputDTO>(InitialFormValues)
    const [errors, setErrors] = React.useState<IErrors>(InitialErrors)
    const {navigate} = useNavigation()
    const router = useRoute()
    const {id} = router.params as {id: string}

    const handleChanges = (value: string, name: keyof MealIputDTO) => {
        setFormValues({...formValues, [name]: value})
    }

    const getMealData = async() => {
        try {
            const meal = await getMealById(id)
            setFormValues({
                name: meal.name,
                description: meal.description,
                date: meal.date,
                hour: meal.hour,
                onHealthyDiet: meal.onHealthyDiet,
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMealData()
    }, [id])
  
    const ValidateForm = () => {
      const newErrors:IErrors = {}
      if(!formValues.name) {
        newErrors.name = 'Campo obrigatório'
         
      }
      if(!formValues.description) {
          newErrors.description = 'Campo obrigatório'
      }
      if(!formValues.date) {
          newErrors.date = 'Campo obrigatório'
      }
      if(!formValues.hour) {
          newErrors.hour = 'Campo obrigatório'
      }
      if(!formValues.onHealthyDiet) {
          newErrors.onHealthyDiet = 'Escolha uma opção'
      }
      if(Object.keys(newErrors).length === 0){
          setErrors(InitialErrors)
          return false
  
      }else {
          setErrors(newErrors)
          return true
      }
    }
  
    const handleSubmmit = async() => {
      if (ValidateForm()) return
      
        try {
          await EditMealService({
            id, 
            data: formValues
          })
           navigate('feedback', {is_meal_diet:formValues.onHealthyDiet as 'yes' | 'no'})
          setErrors(InitialErrors)
          setFormValues(InitialFormValues)
  
        } catch (error) {
          console.log(error)    
        }  
        
      }
  return (
    <EditMealContainer>
      
        <Header>
            <BackButton onPress={()=>navigate('detail', {id})}>
                <BackIcon />
            </BackButton>
            <EditTitle>Editar Refeição</EditTitle>
        </Header>
        <Content>
        <Input 
            label="Nome da refeição" 
            placeholder="Ex: Café da manhã"
            error={errors.name} 
            isRequired
            value={formValues.name}
            onChangeText={(value) => handleChanges(value, 'name')}
            />

            <TextArea 
            label="Descrição"
            placeholder="Ex: Torradas com manteiga e café com leite"
            error={errors.description}
            isRequired
            value={formValues.description}
            style={{textAlignVertical: 'top'}}
            onChangeText={(value) => handleChanges(value, 'description')}
            />

            <GridContainer>

            <GridItemContainer>
                <InputDate 
                  error={errors.date}
                  isRequired
                  onChangeText={(value)=>handleChanges(value, 'date')}
                  value={formValues.date}
                />
               

            </GridItemContainer>
            
           
            <GridItemContainer>
               <InputHour 
                  error={errors.hour}
                  isRequired
                  onChangeText={(value)=>handleChanges(value, 'hour')}
                  value={formValues.hour}
               />

            </GridItemContainer>

            

            </GridContainer>

            <Label>Está dentro da dieta?</Label>
            <GridContainer>
                <GridItemContainer>
                  <Checkbox
                    label="Sim"
                    color="green"
                    isChecked={formValues.onHealthyDiet === 'yes'}
                    onPress={()=>handleChanges('yes', 'onHealthyDiet')}
                  />

                </GridItemContainer>
                <GridItemContainer>
                  <Checkbox
                    label="Não"
                    color="red"
                    isChecked={formValues.onHealthyDiet === 'no'}
                    onPress={()=>handleChanges('no', 'onHealthyDiet')}
                  />

                </GridItemContainer>
            </GridContainer>
            <LabelError>{errors.onHealthyDiet}</LabelError>
            <Divisor />
            <Button 
            variant='contained'
            label="Salvar" 
            onPress={handleSubmmit} 
            />
        </Content>
    </EditMealContainer>
  )
}
