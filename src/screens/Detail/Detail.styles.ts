import { ArrowDownLeft, ArrowLeft, Circle } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";


interface IProps {
    isSuccess: boolean;
}

export const DetailContainer = styled(SafeAreaView)<IProps>`
    flex: 1;
    background-color: ${({ theme, isSuccess }) => isSuccess ? theme.colors["green-mid"] : theme.colors["red-mid"]};
    align-items: center;

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

export const Name = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.lg_18}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
    `}
    width: 100%;
    text-align: left;
    margin-bottom: 8px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors["gray-600"]};
    `}
    width: 100%;
    text-align: left;
    margin-bottom: 24px;    
`;

export const MomentLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
    `}

    width: 100%;
    text-align: left;
    margin-bottom: 8px;
`;

export const Moment = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors["gray-600"]};
    `}
    width: 100%;
    text-align: left;
    margin-bottom: 24px;
`;

export const StatusContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors["gray-200"]};
    padding: 8px 16px;
    border-radius: 999px;
`;

export const StatusLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.regular};
        color: ${theme.colors["gray-600"]};
    `}
`;

export const Divisor = styled.View`
    width: 100%;
    flex: 1;
`;

export const StatusIndicator = styled(Circle).attrs(() => ({
    size: 12,
    weight: "fill",
    

}))`
    margin-right: 8px;
`;

export const BackIcon = styled(ArrowLeft).attrs(() => ({
    size: 32,
    weight: "bold"

}))``;
