import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  padding: 0 65px;
`;

export const RegisterTextContainer = styled.View`
  width: 100%;
  margin: 40px 0;
`;

export const RegisterText = styled.Text`
  color: #e52f1b;
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 28px;
`;

export const LoginContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const LoginText = styled.Text`
  color: #979797;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
`;

export const LoginButtonText = styled.Text`
  color: #e52f1b;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
`;
