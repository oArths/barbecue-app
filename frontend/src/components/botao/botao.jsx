import * as S from "./style.jsx"

const Button = () => {
    return(
        <S.Button >
            <S.TitleButton>Próximo</S.TitleButton>
            <S.IconNext source={require("../../img/Union.png")}/>
        </S.Button>
    )
}

export default Button;