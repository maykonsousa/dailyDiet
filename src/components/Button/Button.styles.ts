import { TouchableOpacityProps } from "react-native";
import styled, {css} from "styled-components/native";


export interface ButtonStyleProps extends TouchableOpacityProps {
    variant: 'contained' | 'outlined';
    
}



export const ButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
    width: 100%;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 16px 24px;
    border: 1px solid ${({ theme }) => theme.colors['gray-700']};
    margin-top: 8px;

    ${({ variant, theme }) => variant === 'contained' && css`
        background-color: ${theme.colors['gray-700']};
    `}
`;

export const ContainedText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['white']};
    `}
`;

export const OutlinedText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
    `}
`;




