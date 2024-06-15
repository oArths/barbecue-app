import * as S from "./style.jsx";
import Button from "../../components/botao/botao.jsx";
import ModalOp from "../../components/modal/modal.jsx";
import React, { useRef, useState } from "react";
import Certo from "../../components/certo/certo.jsx";
import { useNavigation } from "@react-navigation/native";

const Selecao = ({ route }) => {
  const { navigate, goBack } = useNavigation();

  console.log(route.params)

  const bebidas = useRef([]);
  const extras = useRef([]);
  const carnes = useRef([]);

  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const abrirModalDelete = () => {
    setModalDeleteVisible(true);
  };

  const fecharModalDelete = () => {
    setModalDeleteVisible(false);
  };

  const nextPage = () => {
    const dados = route.params;
    dados.bebidasSelecionadas = bebidas.current;
    dados.carnesSelecionadas = carnes.current;
    dados.extrasSelecionados = extras.current;

    navigate("Lista", dados)
  };

  return (
    <S.Body>
      <S.iconContainer>
        <S.IconButton
          onPress={goBack}
        >
          <S.Icon source={require("../../img/seta.png")} />
        </S.IconButton>
      </S.iconContainer>
      <S.TitleContainer>
        <S.Title>Selecione os items desejados</S.Title>
      </S.TitleContainer>
      <S.Conatiner>
        <S.ConatinerOp>
          <S.Conatinerleft>
            <S.ConatinerBoi source={require("../../img/boi.png")} />
            <S.ConatinerTitle>Bovina</S.ConatinerTitle>
          </S.Conatinerleft>
          <S.ConatinerRigth>
            <Certo Label="contra file" Categoria={carnes}/>
            <Certo Label="costela"  Categoria={carnes}/>
            <Certo Label="picanha"  Categoria={carnes}/>
          </S.ConatinerRigth>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.Conatinerleft>
            <S.ConatinerFrango source={require("../../img/chicke.png")} />
            <S.ConatinerTitle>Frango</S.ConatinerTitle>
          </S.Conatinerleft>
          <S.ConatinerRigth>
            <Certo Label="peito de frango" Categoria={carnes}/>
            <Certo Label="coxa de frango" Categoria={carnes}/>
            <Certo Label="asa de frango" Categoria={carnes}/>
          </S.ConatinerRigth>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.Conatinerleft>
            <S.ConatinerPorco source={require("../../img/porco.png")} />
            <S.ConatinerTitle>Porco</S.ConatinerTitle>
          </S.Conatinerleft>
          <S.ConatinerRigth>
            <Certo Label="lombo" Categoria={carnes}  />
            <Certo Label="costela de porco" Categoria={carnes}/>
            <Certo Label="pernil de Porco" Categoria={carnes}/>
          </S.ConatinerRigth>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.Conatinerleft>
            <S.ConatinerBebidas source={require("../../img/bebidas.png")} />
            <S.ConatinerTitle>Bebidas</S.ConatinerTitle>
          </S.Conatinerleft>
          <S.ConatinerRigth>
            <Certo Label="cerveja" Categoria={bebidas}/>
            <Certo Label="Suco" Categoria={bebidas}/>
            <Certo Label="refrigerante" Categoria={bebidas}/>
          </S.ConatinerRigth>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.Conatinerleft>
            <S.ConatinerExtras source={require("../../img/extras.png")} />
            <S.ConatinerExtra>Extra</S.ConatinerExtra>
          </S.Conatinerleft>
          <S.ConatinerRigth>
            <Certo Label="guardanapo" Categoria={extras}/>
            <Certo Label="pão de alho" Categoria={extras}/>
            <Certo Label="espeto de queijo" Categoria={extras}/>
          </S.ConatinerRigth>
        </S.ConatinerOp>
      </S.Conatiner>
      <ModalOp isVisible={modalDeleteVisible} onClose={fecharModalDelete} />
      <Button
        Label="Próximo"
        iconSource={require("../../img/Union.png")}
        onPress={nextPage}
      />
    </S.Body>
  );
};
export default Selecao;
