import React, { useState } from 'react'
import { InputContainer, InputField, InputLabel, InputError } from './InputHour.styles'
import { TextInputProps } from 'react-native';


interface InputProps extends TextInputProps   {
    error?: string;
    isRequired?: boolean;

}
export const InputHour = ({ error, isRequired, onChangeText, ...rest}:InputProps) => {
    const [isFocused, setIsFocused] = useState(false)
    

    const formatText = (text: string) => {
      //return text on format HH:MM
      let formattedText = text.replace(/[^0-9]/g, '');
      if (formattedText.length > 2) {
        formattedText = `${formattedText.slice(0, 2)}:${formattedText.slice(
          2,
          4,
        )}`;
      }
      onChangeText && onChangeText(formattedText);
     
    }





  return (
    <InputContainer>
    <InputLabel>Hora</InputLabel>
    <InputField  
        isFocused={isFocused}
        keyboardType='numeric'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={formatText}
        maxLength={5}
        {...rest}

    />
    <InputError>{error}</InputError>
    </InputContainer>
  )
}
