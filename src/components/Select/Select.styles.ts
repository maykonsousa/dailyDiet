import { Modal, TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import {CaretDown, X} from 'phosphor-react-native'



export const SelectInput = styled(TouchableOpacity)`
    border: 1px solid ${({theme}) => theme.colors["gray-700"]};
    border-radius: 5px;
    padding: 10px;
    flex-direction: row; 
    margin : 10px 0;
    width: 100%yarn ; 
    justify-content: space-between;
    align-items: center; 
`;

export const SelectText = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.font_sizes.sm_14}px;
        font-family: ${theme.fonts.bold};
        color: ${theme.colors["gray-700"]};
    `}
    `;

    export const SelectIcon = styled(CaretDown).attrs(({theme}) => ({
        color: theme.colors["gray-700"],
        size: 20,
    }))``;


    export const OptionsModal = styled(Modal)`
    `;

    export const Overlay = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    padding: 0 48px;
    align-items: center;
    justify-content: center;
    `;
    

    export const OptionContent = styled.View`
        width: 100%;
        height: 300px;
        margin: 0 auto;
        padding: 24px;
        border-radius: 5px;
        z-index: 10;
        background-color: ${({theme}) => theme.colors["gray-100"]};
    `;

    export const OptionHeader = styled.View`
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 16px;
    `;
    
    export const CloseButton = styled.TouchableOpacity``;

    export const CloseIcon = styled(X).attrs(({theme}) => ({
        color: theme.colors["gray-700"],
        size: 20,
    }))``;

    
        
    
    

export const OptionText = styled.Text`
${({theme}) => css`
    font-size: ${theme.font_sizes.sm_14}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors["gray-500"]};
`}
`;

export const OptionItem = styled.TouchableOpacity`
    width: 100%;
    padding: 10px 0;
    background-color: ${({theme}) => theme.colors["gray-200"]};
`;

export const Divisor = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.colors["gray-100"]};
    margin: 2px 0;
`;

    
    
