import styled, {css} from "styled-components/native";


interface InputFieldProps {
    isFocused: boolean;
}

export const InputContainer = styled.View`
    width: 100%;
    margin-bottom: 16px;

`;

export const InputLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
        margin-bottom: 4px;
    `}
`;

export const InputField = styled.TextInput<InputFieldProps>`
    ${({ theme, isFocused }) => css`
        width: 100%;
        height: 56px;
        padding: 14px;
        border-width: 1px;
        border-style: solid;
        border-color: ${isFocused ? theme.colors['gray-700'] : theme.colors['gray-300']};
        border-radius: 6px;
        color: ${theme.colors['gray-700']};
    `}
`;

export const InputError = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.xs_12}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors['red-dark']};
    `}
`;