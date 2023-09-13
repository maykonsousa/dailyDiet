import React from 'react'
import { TextInputProps } from 'react-native'
import { InputContainer, InputError, InputField, InputLabel } from './Input.styles'

interface InputProps extends TextInputProps   {
    label: string;
    error?: string;
    isRequired?: boolean;

}

export const Input = ({label, error, isRequired, onBlur, ...rest}:InputProps) => {
    const [isFocused, setIsFocused] = React.useState(false)
  return (
    <InputContainer>
        <InputLabel>{`${label} ${isRequired ? '*':''}`}</InputLabel>
        <InputField 
            isFocused={isFocused}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
                setIsFocused(false)
                onBlur && onBlur
            }}
            {...rest} 
          />
        {error && <InputError>{error}</InputError>}
    </InputContainer>
  )
}
