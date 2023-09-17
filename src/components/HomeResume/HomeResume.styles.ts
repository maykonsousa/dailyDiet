import { ArrowUpRight } from "phosphor-react-native";
import styled, {css} from "styled-components/native";

interface ResumeContainerProps {
    isSuccess: boolean;
}


export const ResumeContainer = styled.View<ResumeContainerProps>`
    width: 100%;
    padding: 20px 16px;
    position: relative;
    background-color: ${({ theme, isSuccess }) => isSuccess ? theme.colors['green-light'] : theme.colors['red-light']};
    align-items: center;
    justify-content: center;
    border-radius: 6px;


`;

export const ResumeTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.xxl_32}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
    `}
    
`;

export const ResumeDescription = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors['gray-600']};
    `}
`;


export const DetailButton = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const DetailIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors['green-dark'],
    weight: 'bold'

}))``;
