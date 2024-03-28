import styled from "styled-components/native"

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
export const Button = styled.TouchableOpacity`
position: absolute;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
width: 170px;
height: 44px;
border-radius: 10px;
background-color: #A4161A;
bottom: 50px;

`;
export const TitleButton = styled.Text`
color: #ffffff;
font-size: 22px;

`;
export const IconNext = styled.Image`
width: 15px;
height: 13px;

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
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
gap: 30px;
`;
export const ConatinerOp = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #ffffff;
border-radius: 15px;
padding: 20px;
width: 300px;
gap: 25px;
elevation: 2;

`;
export const HaederContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const TitleOp = styled.Text`
font-size: 20px;
color: #000000;

`;
export const ConatinerCount = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 110px;
height: 50px;
`;
export const Total = styled.Text`
text-align: center;
color: black;
font-size: 20px;
margin-left: 30px;
/* background-color: blue; */

`;
export const IconOp = styled.Image`
width: 30px;
height: 30px;
`;
export const IconAll = styled.Image`
width: 30px;
height: 20px;
`;
