import * as S from "./style";
import { useState, useEffect } from "react";
import Timer from "../../components/timer/timer";
import Button from "../../components/botao/botao";
import { initDatabase } from "../../database/initDatabase";
import { Alert } from "react-native";

const Pessoas = ({ navigation: { navigate } }) => {
  // armazena os dados da seleção
  const [total, setTotal] = useState(0);
  const [homem, setHomem] = useState(0);
  const [mulher, setMulher] = useState(0);
  const [crianca, setCrianca] = useState(0);

  const handleTotalChange = (signal) => {
    setTotal((prevTotal) => {
      const opçoesResposta = {
        increase: prevTotal + 1 /* Aumenta o total em 1 */,
        decrease: prevTotal - 1 /* Diminui o total em 1 */,
      };

      // Retorna o total inalterado se o sinal não for 'increase' nem 'decrease'
      return opçoesResposta[signal];
    });
  };

  const nextPage = () => {
    navigate("Selecao", {
      homem,
      mulher,
      crianca,
    });
  };

  return (
    <S.Body>
      <S.iconContainer>
        <S.IconButton onPress={() => navigate("Home")}>
          <S.Icon source={require("../../img/seta.png")} />
        </S.IconButton>
      </S.iconContainer>
      <S.TitleContainer>
        <S.Title>Selecione as pessoas</S.Title>
      </S.TitleContainer>
      <S.Conatiner>
        <S.ConatinerOp>
          <S.HaederContainer>
            <S.IconOp source={require("../../img/man.png")} />
            <S.TitleOp>Homem</S.TitleOp>
          </S.HaederContainer>
          <S.ConatinerCount>
            <Timer
              maxCount={total}
              onCountChange={handleTotalChange}
              value={homem}
              setValue={setHomem}
            />
          </S.ConatinerCount>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.HaederContainer>
            <S.IconOp source={require("../../img/woman.png")} />
            <S.TitleOp>Mulher</S.TitleOp>
          </S.HaederContainer>
          <S.ConatinerCount>
            <Timer
              maxCount={total}
              onCountChange={handleTotalChange}
              value={mulher}
              setValue={setMulher}
            />
          </S.ConatinerCount>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.HaederContainer>
            <S.IconOp source={require("../../img/childer.png")} />
            <S.TitleOp>Criança</S.TitleOp>
          </S.HaederContainer>
          <S.ConatinerCount>
            <Timer
              maxCount={total}
              onCountChange={handleTotalChange}
              value={crianca}
              setValue={setCrianca}
            />
          </S.ConatinerCount>
        </S.ConatinerOp>
        <S.ConatinerOp>
          <S.HaederContainer>
            <S.IconAll source={require("../../img/user.png")} />
            <S.TitleOp>Total</S.TitleOp>
          </S.HaederContainer>
          <S.ConatinerCount>
            <S.Total>{total}</S.Total>
          </S.ConatinerCount>
        </S.ConatinerOp>
      </S.Conatiner>
      <Button
        Label="Próximo"
        iconSource={require("../../img/Union.png")}
        onPress={nextPage}
      />
    </S.Body>
  );
};

export default Pessoas;
