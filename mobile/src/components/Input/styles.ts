import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 40px;

  border: 1px solid #ececec;
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 20px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid #ff3030;
    `};

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #e52f1b;
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 0 10px 0 10px;
  margin: 0;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const InputLabel = styled.View`
  width: 100%;
  margin-bottom: 8px;
`;

export const LabelText = styled.Text`
  padding: 0;
  margin: 0;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 14px;
  color: #848484;
`;
