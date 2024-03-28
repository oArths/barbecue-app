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
gap: 20px;
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
width: 150px;
height: 50px;
`;
export const Total = styled.Text`
background-color: #eeeeee;
width: 60px;
border-radius: 5px;
text-align: center;
color: black;
font-size: 20px;
margin-left: 23px;

`;
export const IconOp = styled.Image`
width: 30px;
height: 30px;
`;
export const IconAll = styled.Image`
width: 30px;
height: 20px;
`;
