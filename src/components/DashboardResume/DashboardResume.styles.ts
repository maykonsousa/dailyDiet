import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled, {css} from "styled-components/native";


export const ResumeContainer = styled.View`
    width: 100%;
    padding: 20px 16px;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 24px;


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


export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors['green-dark'],
    weight: 'bold'

}))``;
