import React from 'react'
import { CloseButton, CloseIcon, Divisor, OptionContent, OptionHeader, OptionItem, OptionText, OptionsModal, Overlay, SelectIcon, SelectInput, SelectText } from './Select.styles'
import { FlatList, GestureResponderEvent, View } from 'react-native'

interface OptionsSelectProps {
  value: string;
  label: string;
}

interface SelectProps {
  options: OptionsSelectProps[];
  onChange: (value: string) => void;
}

export const Select = ({onChange, options}:SelectProps) => {
  const [show, setShow] = React.useState(false)
  const [option, setOption] = React.useState(options[0].label)


  const handleOpenModal = (e: GestureResponderEvent ) => {
    setShow(true)
  }

  const handleCloseModal = () => {
    setShow(false)
  }

  const HandleSelectOption = ({value, label}:OptionsSelectProps) => {
    setOption(label)
    onChange(value)
    setShow(false)
  }

 
  return (
    <>
    <SelectInput onPress={handleOpenModal}>
        <SelectText>{option}</SelectText>
        <SelectIcon />
    </SelectInput>
    <OptionsModal
      visible={show}
      animationType='slide'
      onRequestClose={handleCloseModal}
      transparent={true}
      

    >
      <Overlay >
        <OptionContent >
        <OptionHeader>
        <OptionText>Selecione a Data</OptionText>
        <CloseButton onPress={handleCloseModal}>
          <CloseIcon />
        </CloseButton>
        </OptionHeader>

        <FlatList 
          data={options}
          keyExtractor={(item) => item.value}
          renderItem={({item}) => (
            <OptionItem onPress={() => HandleSelectOption(item) }>
              <OptionText>{item.label}</OptionText>
            </OptionItem>
          )}
          ItemSeparatorComponent={() => <Divisor />}
        />
        </OptionContent>
          
      </Overlay>
    </OptionsModal>
    </>
  )
}
