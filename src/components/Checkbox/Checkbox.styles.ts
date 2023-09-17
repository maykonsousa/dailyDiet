import { Circle } from 'phosphor-react-native';
import { TouchableOpacityProps } from 'react-native';
import styled, {css} from 'styled-components/native';
import { View } from 'react-native';

interface CheckBoxProps extends TouchableOpacityProps {
    isChecked: boolean;
    color: 'green' | 'red';
     
}





export const CheckBoxContainer = styled.TouchableOpacity<CheckBoxProps>`
    width: 100%;
    padding: 16px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    
    border-color: ${({ theme }) => theme.colors['gray-200']};
    ${({ theme, isChecked, color }) => css`
        border-color: ${isChecked ? theme.colors[`${color}-dark`] : theme.colors['gray-200']};
        background-color: ${isChecked ? theme.colors[`${color}-light`] : theme.colors['gray-200']};
    
    `}
`;

export const CheckBoxLabel = styled.Text`
     ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
        margin-bottom: 4px;
    `}
`;


  



export const CheckBoxIndicator = styled(Circle).attrs(()=>({
    size: 12,
    weight: 'fill',
    
}))`
    
    margin-right: 8px;
`;




