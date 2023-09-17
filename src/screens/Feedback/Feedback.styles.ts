import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

interface TitleProps  {
    isSuccess: boolean;
}

export const FeedbackContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors["gray-100"]};
    align-items: center;
    justify-content: center;
    padding:  32px;
`;

export const FeedbackTitle = styled.Text<TitleProps>`
    ${({theme, isSuccess}) => css`
        font-family: ${theme.fonts.bold};
        font-size: ${theme.font_sizes.xxl_32}px;
        margin-top: 80px;
        margin-bottom: 12px;
        color: ${isSuccess ? theme.colors["green-dark"] : theme.colors["red-dark"]};
    `}
    
`;

export const FeedbackText = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.fonts.regular};
        font-size: ${theme.font_sizes.md_16}px;
        margin-bottom: 40px;
        color: ${theme.colors["gray-500"]};
    `}
`;

export const FeedBackImage = styled.Image`
    margin-bottom: 32px;
`;


