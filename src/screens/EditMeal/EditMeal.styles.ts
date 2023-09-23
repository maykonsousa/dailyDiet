import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const EditMealContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) =>  theme.colors["gray-300"]};
    align-items: center;
`;

export const EditTitle = styled.Text`
   ${({ theme }) => css`
        font-size: ${theme.font_sizes.xl_24}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
    `}
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 24px;
`;

export const HeaderTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.xl_24}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
    `}
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 24px;
    
`;

export const Content = styled.View`
     flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors["gray-100"]};
    padding: 40px 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const GridContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const GridItemContainer = styled.View`
    width: 48%;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
        margin-bottom: 4px;
        width: 100%;
        text-align: left;
    `}
`;

export const LabelError = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.xs_12}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors['red-dark']};
    `}
    width: 100%;
    text-align: left;   
`;

export const Divisor = styled.View`
    width: 100%;
    flex:1;
`;

export const BackIcon = styled(ArrowLeft).attrs(() => ({
    size: 32,
    weight: "bold"

}))``;
