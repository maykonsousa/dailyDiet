import React from 'react'
import { ButtonContainer, ContainedText, OutlinedText } from './Button.styles'
import { TouchableOpacityProps } from 'react-native'
import {Trash, PencilSimpleLine, Plus } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native';



interface ButtonProps extends TouchableOpacityProps {
    variant: 'contained' | 'outlined';
    iconName?: 'edit' | 'delete' | 'add';
    label: string;
}


export const Button = ({variant, iconName, label, onPress }:ButtonProps) => {
    const theme = useTheme()
    const renderIcon = () => {
        switch (iconName) {
            case 'edit':
                return (
                    <PencilSimpleLine
                    size={24} 
                    color={variant==='contained'? theme.colors.white : theme.colors['gray-700']} 
                    weight='regular'
                    style={{marginRight: 8}}
                    />
                )
            case 'delete':
                return (
                    <Trash
                    size={24} 
                    color={variant==='contained'? theme.colors.white : theme.colors['gray-700']} 
                    weight='regular'
                    style={{marginRight: 8}}
                    />
                )

            case 'add':
                return (
                    <Plus
                    size={24} 
                    color={variant==='contained'? theme.colors.white : theme.colors['gray-700']} 
                    weight='regular'
                    style={{marginRight: 8}}
                    />
                )
            default:
                return null
        }
    }
   
  return (
    <ButtonContainer variant={variant} onPress={onPress}>
        {renderIcon()}

        {variant === 'contained' ? (
            <ContainedText>{label}</ContainedText>
        ) : (
            <OutlinedText>{label}</OutlinedText>
        )
        }
        
    </ButtonContainer>
  )
}
