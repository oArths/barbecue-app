import * as S from "./style"
import Timer from "../../components/timer/timer";

const Pessoas = () => {
    return(
        <S.Body>
            <S.iconContainer>
                <S.IconButton>
                    <S.Icon source={require("../../img/seta.png")}/>
                </S.IconButton>
            </S.iconContainer>
            <S.Title>Selecione o número de pessoas</S.Title>
            <S.Conatiner>
                <S.ConatinerOp>
                    <S.IconOp source={require("../../img/man.png")}/>
                    <S.TitleOp>Homem</S.TitleOp>
                    <S.ConatinerCount>                
                        <Timer/>
                    </S.ConatinerCount>
                </S.ConatinerOp>
            </S.Conatiner>
            <S.Button>
            <S.Title>babababa</S.Title>
            </S.Button>
        </S.Body>
    )
}

export default Pessoas;