import * as S from "./style.jsx";
import Button from "../../components/botao/botao.jsx";
import { useNavigation } from "@react-navigation/native";
import { Alert, FlatList, View } from "react-native";
import { useState, useEffect } from "react";
import { calculoFinal } from "../../services/calculoFinal.js";
import { ListaProdutos } from "../../components/listaProdutos/listaProdutos.jsx";

const Lista = ({ route }) => {
  const { navigate } = useNavigation();
  const [data, setData] = useState("");
  const calc = calculoFinal();

  async function listar() {
    try {
      const response = await calc.calcular(route.params);
      setData(response);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <S.Body>
      <S.iconContainer />
      <S.TitleContainer>
        <S.Title>Lista de Compras</S.Title>
      </S.TitleContainer>
      <View>
        <ListaProdutos name="Carnes" data={data.carnes} />
        <ListaProdutos name="Bebidas" data={data.bebidas} />
        <ListaProdutos name="Extras" data={data.extras} />
      </View>
      <S.ContainerResult>
        <S.Result>Total: R$ {data.total}</S.Result>
        <S.Result>Total por Pessoa: R$ {data.porPessoa}</S.Result>
        <S.Result>Pessoas: {data.adultos}</S.Result>
      </S.ContainerResult>
      <Button
        Label="Finalizar"
        onPress={() => {
          navigate("Home");
        }}
      />
    </S.Body>
  );
};
export default Lista;
