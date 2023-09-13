import { SafeAreaProviderProps, SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

interface IProps extends SafeAreaProviderProps{
    isSuccess: boolean;
}

export const DashBoardContainer = styled(SafeAreaView)<IProps>`
    flex: 1;
    background-color: ${({ theme, isSuccess }) => isSuccess ? theme.colors["green-dark"] : theme.colors["red-mid"]};
    align-items: center;



`;

export const DashboardContent = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors["gray-100"]};
    padding: 24px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    align-items: center;
    
`;

export const DashboardTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.lg_18}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
        margin-bottom: 12px;
    `}
`

export const DetailContainer = styled.View`
    width: 100%;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors["gray-200"]};
    align-items: center;
    justify-content: center;
    margin: 6px 0;
`;

export const InformationTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.xl_24}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors['gray-700']};
    `}
`;

export const InformationDetail = styled.Text`
    text-align: center;
`;

export const ResultContainer = styled.View`
    width: 100%;
    flex-direction: row;
    margin: 6px 0;
`;

export const InDietContainer = styled.View`
 align-items: center;
 justify-content: center;
 background-color: ${({ theme }) => theme.colors["green-light"]};
 flex: 1;
 margin-right: 6px;
 padding: 16px;
`;

export const OutDietContainer = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors["red-light"]};
    flex: 1;
    margin-left: 6px;

    padding: 16px;
`;