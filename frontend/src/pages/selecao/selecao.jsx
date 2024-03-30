import * as S from "./style.jsx"
import Button from "../../components/botao/botao.jsx";
import ModalOp from "../../components/modal/modal.jsx";
import React, { useState } from 'react';


const  Selecao = ( ) => {
    // const [modalVisible, setModalVisible] = useState(false);
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };

  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };

    return(
        <S.Body>
            <S.iconContainer>
                <S.IconButton >
                    <S.Icon source={require("../../img/seta.png")}/>
                </S.IconButton>
            </S.iconContainer>
            <S.TitleContainer>
                <S.Title>Selecione os items desejados</S.Title>
            </S.TitleContainer>
            <S.Conatiner>
                <S.ConatinerOp onPress={abrirModalDelete}>
                    <S.ConatinerBoi
                    source={require('../../img/boi.png')}
                    />
                    <S.ConatinerTitle>Bovina</S.ConatinerTitle>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.ConatinerFrango
                    source={require('../../img/chicke.png')}
                    />
                    <S.ConatinerTitle>Frango</S.ConatinerTitle>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.ConatinerPorco
                    source={require('../../img/porco.png')}
                    />
                    <S.ConatinerTitle>Porco</S.ConatinerTitle>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.ConatinerBebidas
                    source={require('../../img/bebidas.png')}
                    />
                    <S.ConatinerTitle>Bebidas</S.ConatinerTitle>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.ConatinerExtras
                    source={require('../../img/extras.png')}
                    />
                    <S.ConatinerTitle>Extra</S.ConatinerTitle>
                </S.ConatinerOp>

            </S.Conatiner >
            <ModalOp   isVisible={modalDeleteVisible} onClose={fecharModalDelete}/>
            <Button/>


        </S.Body>
    )
}
export default Selecao;