import styled, {css} from "styled-components/native";


interface TextAreaFieldProps {
    isFocused: boolean;
}

export const TextAreaContainer = styled.View`
    width: 100%;

`;

export const TextAreaLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
        margin-bottom: 4px;
    `}
`;

export const TextAreaField = styled.TextInput<TextAreaFieldProps>`
    ${({ theme, isFocused }) => css`
        
        border-color: ${isFocused ? theme.colors['gray-700'] : theme.colors['gray-300']};
        color: ${theme.colors['gray-700']};
        
    `}
        width: 100%;
        height: 120px;
        padding: 14px;
        display: flex;
        border-radius: 6px;
        align-items: flex-start;
        justify-content: flex-start;
        border-width: 1px;
        border-style: solid;
`;

export const TextAreaError = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.xs_12}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors['red-dark']};
    `}
`;