import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const AddMealContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors["gray-300"]};
    align-items: center;
    padding-top: 24px;
    
    `;

export const AddMealHeader = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const AddMealContent = styled.View`
     flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors["gray-100"]};
    padding: 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: center;
    margin-top: 24px;
`;

export const AddMealTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.lg_18}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
    `}
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

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top:0;
    left: 24px;
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

export const FlexSpacing = styled.View`
    width: 100%;
    flex:1;
`;



export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors['gray-700'],
    weight: 'bold'

}))``;



