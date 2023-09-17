import React from 'react'
import { CheckBoxContainer, CheckBoxIndicator, CheckBoxLabel } from './Checkbox.styles'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native';

interface ICheckboxProps extends TouchableOpacityProps {
    color: 'green' | 'red';
    isChecked: boolean;
    label: string;

}

export const Checkbox = ({color, isChecked, label, ...rest}:ICheckboxProps) => {
    const theme = useTheme()
  return (
        <CheckBoxContainer
            color={color}
            isChecked={isChecked}
            {...rest}
        >
            <CheckBoxIndicator color={theme.colors[`${color}-dark`]}  /> 
            <CheckBoxLabel>{label}</CheckBoxLabel>
        </CheckBoxContainer>
       
  )
}
