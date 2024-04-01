import styled from "styled-components/native";

export const Body = styled.View`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
width: 100%;
height: 100%;
background-color: #F5F5F5;
gap: 30px;

`;
export const iconContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: 70px;
`;
export const IconButton = styled.TouchableOpacity`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 38px;
  height: 34px;
`;
export const Icon = styled.Image`
  width: 30px;
  height: 26px;
`;
export const TitleContainer = styled.View`
  width: 400px;
`;
export const Title = styled.Text`
  text-align: center;
  color: black;
  font-size: 25px;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ContainerOp = styled.View`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: start;
  gap: 10px;
  width: 300px;
  border-radius: 5px;
    background-color: aqua;

`;
export const ContainerTitle = styled.Text`
  text-align: center;
  color: black;
  font-size: 30px;
  background-color: aqua;
  width: 92px;
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
