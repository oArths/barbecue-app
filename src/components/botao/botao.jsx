import * as S from "./style.jsx"

const Button = ({Label, onPress, iconSource }) => {

    return(
        <S.Button onPress={onPress}>
            <S.TitleButton>{Label}</S.TitleButton>
            {iconSource && <S.IconNext source={iconSource} />}
        </S.Button>
    )
}

export default Button;