import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const LoadingContainer = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors['gray-100']};

`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
    color: theme.colors['green-dark'],
}))``;