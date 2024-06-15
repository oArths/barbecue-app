
import styled from "styled-components/native";

export const ContainerOp = styled.View`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  width: 300px;
  border-radius: 5px;
`;

export const List = styled.FlatList`
height: 50px;
`
export const ContainerTitle = styled.Text`
  text-align: left;
  color: red;
  font-size: 30px;
  width: 260px;
`;
export const Op = styled.View`
 display: flex;
  flex-direction: row;
justify-content:space-between;`;
export const ContainerType = styled.Text`
 text-align: center;
  color: black;
  font-size: 16px;
`;
export const ContainerPrice = styled.Text`
 text-align: center;
  color: black;
  font-size: 16px;
`;