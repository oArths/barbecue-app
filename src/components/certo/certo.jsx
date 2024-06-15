import * as S from "./style";
import { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";

const Certo = ({ Label, Categoria }) => {
  const [checked, setChecked] = useState(false);

  const pushItem = () => Categoria.current.push(Label);

  const spliceItem = () => {
    const position = Categoria.current.indexOf(Label);
    if (position > -1) Categoria.current.splice(position, 1)
  };

  useEffect(() => {
    checked ? pushItem() : spliceItem();
    console.log(Categoria.current)
  }, [checked]);

  return (
    <S.Container
      onPress={() => {
        setChecked(!checked);
      }}
    >
      <Checkbox
        value={Label}
        status={checked ? "checked" : "unchecked"}
        color="#660708"
        uncheckedColor="#660708"
      />
      <S.Op>{Label}</S.Op>
    </S.Container>
  );
};
export default Certo;
