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

export const TimeContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TimeInputContainer = styled.View`
    width: 48%;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top:0;
    left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors['gray-700'],
    weight: 'bold'

}))``;

