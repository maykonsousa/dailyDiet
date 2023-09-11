import { Circle } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

interface IndicatorProps {
    healthy: boolean;
}

export const MeaItemContainer = styled(TouchableOpacity)`
    width: 100%;
    padding: 14px 16px 14px 12px;
    flex-direction: row;
    border: 1px solid ${({theme}) => theme.colors["gray-300"]};
    border-radius: 6px;
    align-items: center;
    margin-bottom: 12px;
    `;

    export const MealInfo = styled.View`
    flex: 1;
    margin-right: 12px;
    align-items: center;
    flex-direction: row;
    
    `;

    export const MealName = styled(Text).attrs({
        numberOfLines: 1, 
        ellipsizeMode: "tail"

        })`
            ${({theme}) => css`
                font-size: ${theme.font_sizes.md_16}px;
                font-family: ${theme.fonts.regular};
                color: ${theme.colors["gray-600"]};
                width: 230px;
            `}
    `;

    export const MealHour = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
        border-right-width: 1px;
        border-right-color: ${theme.colors["gray-600"]};
        padding-right: 12px;
        margin-right: 12px;
    
    `}
    `;

    export const HealthIndicator = styled(Circle).attrs<IndicatorProps>(({theme, healthy}) => ({
        color: healthy ? theme.colors["green-mid"] : theme.colors["red-mid"],
        size: 16,
        weight: "fill",
    }))``;
    
    