import React from 'react'
import { AlertContainer, AlertContent, AlertTitle, GridContainer, GridItem, Overlay } from './Alert.styles'
import { Button } from '@components/Button';

interface IAlertProps {
  visible: boolean;
  title: string;
  isAction?: boolean;
  cancelLabel?: string;
  confirmLabel?: string;
  closeLabel?: string;
  onCancel?: () => void;
  onConfirm?: () => void;

}

export const ALert = (props:IAlertProps) => {
  return (
    <AlertContainer
        visible={props.visible}
        animationType='slide'
        onRequestClose={props.onCancel}
        transparent={true}

    >
      <Overlay>
        <AlertContent>
          <AlertTitle>{props.title}</AlertTitle>
          {props.isAction ? (
            <GridContainer>
            <GridItem >
              <Button variant='outlined' label={`${props?.cancelLabel ?? 'Cancelar'}`} onPress={props.onCancel} />
            </GridItem>
            <GridItem>
              <Button variant='contained' label={`${props?.confirmLabel ?? "Confirmar"}`} onPress={props.onConfirm} />
            </GridItem>
          </GridContainer>
          ):(
            <GridContainer>
              <Button variant='contained' label={`${props?.closeLabel ?? "Fechar"}`} onPress={props.onCancel} />
            </GridContainer>
            
          )}
        </AlertContent>
      </Overlay>


    </AlertContainer>
  )
}
