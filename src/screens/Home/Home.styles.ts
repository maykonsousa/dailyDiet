import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const HomeContainer = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors["gray-100"]};
    padding: 24px;
`;

export const LogoImage = styled.Image`
    width: 82px;
    height:37px;
    margin-bottom: 24px;
`;

export  const HomeContent = styled.View`
    flex: 1;
    width: 100%;
    justify-content: flex-start;
    margin-top: 24px;
`;

export const BodyText = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.font_sizes.md_16}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors['gray-700']};
  `}`;

 

  

