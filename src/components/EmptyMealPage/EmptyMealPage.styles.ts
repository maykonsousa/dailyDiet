import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";



export const PageContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors["gray-100"]};
    align-items: center;
    justify-content: center;
    padding:  32px;
`;

export const PageTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.fonts.bold};
        font-size: ${theme.font_sizes.xl_24}px;
        margin-bottom: 16px;
        margin-top: 16px;
        color: ${ theme.colors["gray-700"] };
        text-align: center;
    `}
    
`;

export const PageText = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.fonts.regular};
        font-size: ${theme.font_sizes.md_16}px;
        margin-bottom: 40px;
        color: ${theme.colors["gray-500"]};
        text-align: center;
    `}
`;

export const PageImage = styled.Image`
    width:256px;
    height: 128px;
`;


