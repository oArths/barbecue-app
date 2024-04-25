import * as S from "./style.jsx"
import Button from "../../components/botao/botao.jsx";
import ModalOp from "../../components/modal/modal.jsx";
import React, { useState } from 'react';
import Certo from "../../components/certo/certo.jsx"
import { useNavigation } from "@react-navigation/native";

const Selecao = () => {
    const nav = useNavigation();
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

    const abrirModalDelete = () => {
        setModalDeleteVisible(true);
    };

    const fecharModalDelete = () => {
        setModalDeleteVisible(false);
    };



    return (
        <S.Body>

            <S.iconContainer>
                <S.IconButton onPress={() => {
                    nav.goBack();
                }}>
                    <S.Icon source={require("../../img/seta.png")} />
                </S.IconButton>
            </S.iconContainer>
            <S.TitleContainer>
                <S.Title>Selecione os items desejados</S.Title>
            </S.TitleContainer>
            <S.Conatiner>
                <S.ConatinerOp >
                    <S.Conatinerleft>
                        <S.ConatinerBoi
                            source={require('../../img/boi.png')}
                        />
                        <S.ConatinerTitle>Bovina</S.ConatinerTitle>
                    </S.Conatinerleft>
                    <S.ConatinerRigth>
                        <Certo Label="Contra Filé" />
                        <Certo Label="Costela" />
                        <Certo Label="Picanha" />
                    </S.ConatinerRigth>

                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.Conatinerleft>
                        <S.ConatinerFrango
                            source={require('../../img/chicke.png')}
                        />
                        <S.ConatinerTitle>Frango</S.ConatinerTitle>
                    </S.Conatinerleft>
                    <S.ConatinerRigth>
                        <Certo Label="Peito de Frango" />
                        <Certo Label="Coxa de Frango" />
                        <Certo Label="Asa de Frango" />
                    </S.ConatinerRigth>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.Conatinerleft>
                        <S.ConatinerPorco
                            source={require('../../img/porco.png')}
                        />
                        <S.ConatinerTitle>Porco</S.ConatinerTitle>
                    </S.Conatinerleft>
                    <S.ConatinerRigth>
                        <Certo Label="Lombo de Porco" />
                        <Certo Label="Costeleta de Porco" />
                        <Certo Label="Pernil de Porco" />
                    </S.ConatinerRigth>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.Conatinerleft>
                        <S.ConatinerBebidas
                            source={require('../../img/bebidas.png')}
                        />
                        <S.ConatinerTitle>Bebidas</S.ConatinerTitle>
                    </S.Conatinerleft>
                    <S.ConatinerRigth>
                        <Certo Label="Cerveja" />
                        <Certo Label="Suco" />
                        <Certo Label="Refrigerante" />
                    </S.ConatinerRigth>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.Conatinerleft>
                        <S.ConatinerExtras
                            source={require('../../img/extras.png')}
                        />
                        <S.ConatinerExtra>Extra</S.ConatinerExtra>
                    </S.Conatinerleft>
                    <S.ConatinerRigth>
                        <Certo Label="Linguiças" />
                        <Certo Label="Pão de alho" />
                        <Certo Label="Queijos" />
                    </S.ConatinerRigth>
                </S.ConatinerOp>
            </S.Conatiner >
            <ModalOp isVisible={modalDeleteVisible} onClose={fecharModalDelete} />
            <Button Label="Próximo"
                iconSource={require("../../img/Union.png")}
                onPress={() => {
                    nav.navigate("Lista");
                }} />
        </S.Body>
    )
}
export default Selecao;