import styled from 'styled-components/native';

export const Content = styled.View`
  width: 100%;
  margin: 60px 0 20px 0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

export const RadioText = styled.Text`
  margin-left: 8px;
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;

export const RadioCircle = styled.TouchableOpacity`
  height: 17px;
  width: 17px;
  border-radius: 100px;
  border: 1px solid #ff3030;
  align-items: center;
  justify-content: center;
`;

export const SelectedRadioButton = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 50px;
  background-color: #ff3030;
`;
