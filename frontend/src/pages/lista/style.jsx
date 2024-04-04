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
  font-size: 35px;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ContainerResult = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  gap: 10px;
`;
export const Result = styled.Text`
text-align: right;
font-size: 17px;
font-weight: bold;
`;
export const ContainerOp = styled.View`
  display: flex;
  flex-direction: column; 
  gap: 10px;
  width: 300px;
  border-radius: 5px;

`;
export const ContainerTitle = styled.Text`
  text-align: left;
  color: black;
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
