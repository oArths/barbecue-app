import * as S from "./style"
import { useState } from "react";
import Timer from "../../components/timer/timer";
import Button from "../../components/botao/botao";
import { useNavigation } from "@react-navigation/native";


const Pessoas =()=> {
      const nav = useNavigation();
      const [total, setTotal] = useState(0);
      const handleTotalChange = (count, signal) => {
  setTotal(prevTotal => {
    if (signal === 'increase') {
      return prevTotal + 1; // Aumenta o total em 1
    } else if (signal === 'decrease') {
      return prevTotal - 1; // Diminui o total em 1
    }
    return prevTotal; // Retorna o total inalterado se o sinal não for 'increase' nem 'decrease'
  });
};

    return(
        <S.Body>
            <S.iconContainer>
                <S.IconButton>
                    <S.Icon source={require("../../img/seta.png")}/>
                </S.IconButton>
            </S.iconContainer>
            <S.TitleContainer>
                <S.Title>Selecione as pessoas</S.Title>
            </S.TitleContainer>
            <S.Conatiner>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconOp source={require("../../img/man.png")}/>
                        <S.TitleOp>Homem</S.TitleOp>
                    </S.HaederContainer>
                    <S.ConatinerCount>                
                        <Timer maxCount={50 - total} onCountChange={handleTotalChange} />
                    </S.ConatinerCount>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconOp source={require("../../img/woman.png")}/>
                        <S.TitleOp>Mulher</S.TitleOp>
                    </S.HaederContainer>
                    <S.ConatinerCount>                
                        <Timer maxCount={50 - total} onCountChange={handleTotalChange} />
                    </S.ConatinerCount>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconOp source={require("../../img/childer.png")}/>
                        <S.TitleOp>Criança</S.TitleOp>
                    </S.HaederContainer>
                    <S.ConatinerCount>                
                        <Timer maxCount={50 - total} onCountChange={handleTotalChange} />
                    </S.ConatinerCount>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconAll source={require("../../img/user.png")}/>
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
            onPress={() => {
          nav.navigate("Selecao")
        }}
            />
        </S.Body>
    )
}

export default Pessoas;