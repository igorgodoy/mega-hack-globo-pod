import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background: #101010;
  width: 100%;
  height: 100px;
`;

export const InteractiveButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
`;

export const InteractiveButtonText = styled.Text`
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;
  color: #fff;
`;
