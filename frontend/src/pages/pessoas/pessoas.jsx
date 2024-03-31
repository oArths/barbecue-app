import * as S from "./style"
import Timer from "../../components/timer/timer";
import Button from "../../components/botao/botao";

const Total = 23;

function Pessoas () {
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
                        <Timer/>
                    </S.ConatinerCount>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconOp source={require("../../img/woman.png")}/>
                        <S.TitleOp>Mulher</S.TitleOp>
                    </S.HaederContainer>
                    <S.ConatinerCount>                
                        <Timer/>
                    </S.ConatinerCount>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconOp source={require("../../img/childer.png")}/>
                        <S.TitleOp>Criança</S.TitleOp>
                    </S.HaederContainer>
                    <S.ConatinerCount>                
                        <Timer/>
                    </S.ConatinerCount>
                </S.ConatinerOp>
                <S.ConatinerOp>
                    <S.HaederContainer>
                        <S.IconAll source={require("../../img/user.png")}/>
                        <S.TitleOp>Total</S.TitleOp>
                    </S.HaederContainer>
                    <S.ConatinerCount>
                        <S.Total>{Total}</S.Total>       
                    </S.ConatinerCount>
                </S.ConatinerOp>
            </S.Conatiner>
            <Button
            Label="Próximo"
            />
        </S.Body>
    )
}

export default Pessoas;