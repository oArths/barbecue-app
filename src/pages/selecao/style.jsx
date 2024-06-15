import styled from "styled-components/native";

export const Body = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  gap: 15px;
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
export const ConatinerScroll = styled.ScrollView`
display: flex;
flex-direction: column;
height: 100%;
width:100%;
background-color: aqua;

`;
export const Conatiner = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ConatinerOp = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  border-radius: 15px;
  padding: 20px;
  width: 310px;
  height: 110px;
  gap: 40px;
  elevation: 2;
`;
export const Conatinerleft = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ConatinerRigth = styled.View`
display: flex;
flex-direction: column;
/* justify-content: center; */
/* align-items: center; */
`
export const ConatinerImg = styled.Image`
  width: 55px;
  height: 56px;
`;
export const ConatinerBoi = styled.Image`
  width: 60px;
  height: 40px;
`;
export const ConatinerFrango = styled.Image`
  width: 50px;
  height: 49px;
`;
export const ConatinerPorco = styled.Image`
  width: 55px;
  height: 33px;
`;
export const ConatinerBebidas = styled.Image`
  width: 30px;
  height: 55px;
`;
export const ConatinerExtras = styled.Image`
  width: 60px;
  height: 50px;
`;
export const ConatinerTitle = styled.Text`
  font-size: 18px;
  color: white;
`;
export const ConatinerExtra = styled.Text`
  font-size: 18px;
  color: white;
  margin-right: 20px;
`;
