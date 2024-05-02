import * as S from "./style.jsx";
import Button from "../../components/botao/botao.jsx";
import { calculoFinal } from "../../../../backend/utils/calculoFinal.js";
import { useState, useEffect } from "react";

const Lista = ({ navigation: { navigate } }) => {
  
    const [data, setData] = useState();
  
  useEffect(() => {
    // função para calcular os gastos e puxar os dados
    async function loadData() {
      const response = await calculoFinal(0,0,0,0,[],[],[]);
      setData(response);
    }

    // execução da mesma
    loadData();
  }, []);

  return (
    <S.Body>
      <S.iconContainer></S.iconContainer>
      <S.TitleContainer>
        <S.Title>Lista de Compras</S.Title>
      </S.TitleContainer>
      <S.Container>
        <S.ContainerOp>
          <S.ContainerTitle>Carnes</S.ContainerTitle>
          <S.Op>
            <S.ContainerType>Bisteca</S.ContainerType>
            <S.ContainerPrice>R$ 183,43</S.ContainerPrice>
          </S.Op>
          <S.Op>
            <S.ContainerType>Costela </S.ContainerType>
            <S.ContainerPrice>R$ 183,43</S.ContainerPrice>
          </S.Op>
          <S.Op>
            <S.ContainerType>Contra</S.ContainerType>
            <S.ContainerPrice>R$ 183,43</S.ContainerPrice>
          </S.Op>
        </S.ContainerOp>
      </S.Container>
      <S.ContainerResult>
        <S.Result>Total: R$ 1100,90</S.Result>
        <S.Result>Total por Pessoa: R$ 110,09</S.Result>
      </S.ContainerResult>
      <Button
        Label="Finalizar"
        onPress={() => {
          nav.navigate("Home");
        }}
      />
    </S.Body>
  );
};
export default Lista;
