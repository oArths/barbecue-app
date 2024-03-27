import  styled  from "styled-components/native"

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const Mints = styled.View`
    display: flex;
  flex-direction: row;


`;


export const ViewOpUp = styled.TouchableOpacity`
    background-color:  #ffff;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-color: #585353b1;
    border-bottom-width:0.5px ;
    
`;
export const ViewOpDo = styled.TouchableOpacity`
    background-color: #fff;
    width: 30px;
    height: 70px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-color: #585353b1;
    border-top-width:0.5px ;
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
  
`;

export const NumberText = styled.Text`
  align-items: center;
  text-align: center;
  width: 90px;
  color: black;
  height: 70px;
  font-size: 30px;
  border-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: #585353b1;

  `;
  export const DateTimeText = styled.Text`
  display: flex;
  font-size: 16px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 0.5px;
  border-color: black;
  border-radius: 7px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

