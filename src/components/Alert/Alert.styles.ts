import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const AlertContainer = styled.Modal`

`;

export const Overlay = styled(SafeAreaView)`
     flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: 0 24px;
    align-items: center;
    justify-content: center;
    
`;

export const AlertContent = styled.View`
        width: 100%;
        height: 192px;
        margin: 0 auto;
        padding: 24px;
        padding-top: 32px;
        border-radius: 5px;
        z-index: 10;
        background-color: ${({theme}) => theme.colors["gray-100"]};
        align-items: center;
`;

export const AlertTitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_sizes.lg_18}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
    `}
    margin-bottom: 16px;
    text-align: center;
    width: 100%;
`;

export const GridContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const GridItem = styled.View`
    width: 48%;
`;

