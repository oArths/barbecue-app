import * as S from "./style"
import {useState} from "react"
import { Checkbox } from 'react-native-paper';

    const Certo = ({Label}) => {
          const [checked, setChecked] = useState(false);

    return(
        <S.Container   
            onPress={() => {
            setChecked(!checked);
             }}>
        <Checkbox 
        status={checked ? "checked" : "unchecked"} 
        color="#660708"
        uncheckedColor="#660708"
        />
        <S.Op>{Label}</S.Op>
        </S.Container>


    )
}
export default Certo;