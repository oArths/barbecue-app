import * as S from "./style.jsx";
import { Modal } from "react-native";
import React, { useState } from "react";

const ModalOp = ({ isVisible, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  


  return (
    <S.Body>
      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <S.ModalOut>
          <S.ModalIn>
            <S.CloseModal onPress={onClose}>
              <S.Image source={require("../../img/exit.png")} />
            </S.CloseModal>
            <S.Container>

              
              <S.Text>Cortes</S.Text>
            </S.Container>
            <S.ContainerButton>
              <S.Confirm
                onPress={onClose}
              >
                <S.ButtonText>Salvar</S.ButtonText>
              </S.Confirm>
            </S.ContainerButton>
          </S.ModalIn>
        </S.ModalOut>
      </Modal>
    </S.Body>
  );
};

export default ModalOp;
