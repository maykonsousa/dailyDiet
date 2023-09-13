import React from 'react'
import { TextInputProps } from 'react-native'
import { TextAreaContainer, TextAreaError, TextAreaField, TextAreaLabel } from './TextArea.styles'

interface TextAreaProps extends TextInputProps   {
    label: string;
    error?: string;
    isRequired?: boolean;

}

export const TextArea = ({label, error, isRequired, ...rest}:TextAreaProps) => {
    const [isFocused, setIsFocused] = React.useState(false)
  return (
    <TextAreaContainer>
        <TextAreaLabel>{`${label} ${isRequired ? '*':''}`}</TextAreaLabel>
        <TextAreaField 
            isFocused={isFocused}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            multiline            
            numberOfLines={4}
            {...rest} 
          />
        {error && <TextAreaError>{error}</TextAreaError>}
    </TextAreaContainer>
  )
}
