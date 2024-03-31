import * as S from "./style.jsx"

const Button = ({Label}) => {
    return(
        <S.Button >
            <S.TitleButton>{Label}</S.TitleButton>
            <S.IconNext source={require("../../img/Union.png")}/>
        </S.Button>
    )
}

export default Button;