import styled from "styled-components/native";

export const Body = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aqua;
`;
export const ModalOut = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.096);
`;
export const ModalIn = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  height: 150px;
`;

export const CloseModal = styled.TouchableOpacity`
  margin-left: 140px;
`;
export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const ContainerButton = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const Confirm = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #660708;
  border-radius: 10px;
  width: 100px;
  height: 39px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`;

