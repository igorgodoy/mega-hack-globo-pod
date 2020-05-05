import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;
  background: #e52f1b;
  border-radius: 7px;

  margin: 15px 0;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Bold';
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;
