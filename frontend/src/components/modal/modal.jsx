import * as S from "./style.jsx"
import { Modal } from "react-native";
import React, { useState } from "react";


const ModalOp = ({isVisible, }) => {
    const [isOpen, setIsOpen] = useState(false);
    

return(
        <S.Body>
             <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <S.ModalOut >
          <S.ModalIn>
            
              {/* <CloseModal >
                <Image />
              </CloseModal> */}
    

            <S.Text>Deseja Excluir?</S.Text>
            <S.ContainerButton>
            <S.Cancel onPress={() => {
                      setIsOpen(!isOpen);
                    }}>
                <S.ButtonText>Não</S.ButtonText>
              </S.Cancel>

              <S.Delete>
                <S.ButtonText>Sim</S.ButtonText>
              </S.Delete>
            </S.ContainerButton>
          </S.ModalIn>
        </S.ModalOut>
      </Modal>


        </S.Body>
    )
} 

export default ModalOp;