import * as S from "./style.jsx"
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/botao/botao.jsx";

const Lista = () => {
          const nav = useNavigation();

    return(
        <S.Body>
             <S.iconContainer>
                <S.IconButton  onPress={() => {
          nav.navigate("Pessoas");
        }}>
                    <S.Icon source={require("../../img/seta.png")}/>
                </S.IconButton>
            </S.iconContainer>
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
                    <S.ContainerType>Bisteca</S.ContainerType>
                    <S.ContainerPrice>R$ 183,43</S.ContainerPrice>
                    </S.Op>
                    <S.Op>
                    <S.ContainerType>Bisteca</S.ContainerType>
                    <S.ContainerPrice>R$ 183,43</S.ContainerPrice>
                    </S.Op>
                </S.ContainerOp>
            </S.Container>
            <Button
            Label="Finalizar"
            
            onPress={() => {
          nav.navigate("Selecao")
        }}
            />
        </S.Body>

    )
}
export default Lista;