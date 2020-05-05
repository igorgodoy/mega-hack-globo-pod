import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #121212;

  padding: 10% 65px;
`;

export const HelloTextContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const HelloText = styled.Text`
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

export const NameText = styled.Text`
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 24px;
  color: #ff3030;
  margin-bottom: 20px;
`;

export const QuestionText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
`;

export const InterestImage = styled.ImageBackground`
  width: 74px;
  height: 74px;
  margin: 30px 30px 0 0;
`;

export const InterestImageTextContainer = styled.View`
  position: absolute;
  top: 50px;
  left: 5px;
  right: 0;
  bottom: 0px;
`;

export const InterestImageText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 12px;
  color: #fff;
`;

export const CheckIcon = styled(Icon)`
  position: absolute;
  top: 5px;
  left: 55px;
  right: 0;
  bottom: 0px;
`;
