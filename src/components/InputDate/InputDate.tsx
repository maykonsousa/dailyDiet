import React, { useState } from 'react'
import { InputContainer, InputField, InputLabel, InputError } from './InputDate.styles'
import { TextInputProps } from 'react-native';


interface InputProps extends TextInputProps   {
    error?: string;
    isRequired?: boolean;

}
export const InputDate = ({ error, isRequired, onChangeText, ...rest}:InputProps) => {
    const [isFocused, setIsFocused] = useState(false)
    

    const formatText = (text: string) => {
      //return text on format DD/MM/YYYY
      let formattedText = text.replace(/[^0-9]/g, '');
      if (formattedText.length > 2) {
        formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(
          2,
          4,
        )}/${formattedText.slice(4, 8)}`;
      }
      onChangeText && onChangeText(formattedText);
    }





  return (
    <InputContainer>
    <InputLabel>Data</InputLabel>
    <InputField  
        isFocused={isFocused}
        keyboardType='numeric'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={formatText}
        maxLength={10}
        {...rest}

    />
    <InputError>{error}</InputError>
    </InputContainer>
  )
}
