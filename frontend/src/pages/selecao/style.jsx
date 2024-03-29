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
`
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
width: 300px;

`;
export const Title = styled.Text`
text-align: center;
color: black;
font-size: 30px;

`;
export const Conatiner = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: right;
align-items: center;
width: 64%;
gap: 30px;
background-color: aqua;
`;

export const ConatinerOp = styled.TouchableOpacity`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #000000;
border-radius: 15px;
padding: 20px;
width: 110px;
height: 110px;
gap: 20px;
elevation: 2;

`;
export const ConatinerImg = styled.Image`
width: 55px;
height: 56px;

`
export const ConatinerTitle = styled.Text`
font-size: 18px;
color: white;
`