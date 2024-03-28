import  styled  from "styled-components/native"

export const Mints = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const ViewOpUp = styled.TouchableOpacity`
    background-color:  #A4161A;
    width: 35%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    
`;
export const ViewOpDo = styled.TouchableOpacity`
   background-color:  #A4161A;
    width: 35%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const ButtonUp = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ButtonDown = styled.Image`
  width: 20px; 
  height: 20px;
`;

export const ViewText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:center ;
  align-items: center;
  border: none;
  width: 30%;
`;

export const NumberText = styled.Text`
  display: flex;
  text-align: center;
  color: black;
  height: 100%;
  font-size: 20px;
  `;