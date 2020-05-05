import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;

  padding: 0 65px;
`;

export const Logo = styled.Image`
  margin: 40px 0;
`;

export const ForgotPasswordContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0 40px 0;
`;

export const ForgotPasswordText = styled.Text`
  color: #979797;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
`;

export const CreateAccountContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const CreateAccountText = styled.Text`
  color: #979797;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
`;

export const CreateAccountButtonText = styled.Text`
  color: #e52f1b;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
`;
