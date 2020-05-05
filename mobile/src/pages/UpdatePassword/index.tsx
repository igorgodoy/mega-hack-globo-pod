import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  UpdatePasswordTextContainer,
  UpdatePasswordText,
} from './styles';

interface UpdatePasswordData {
  password: string;
  repeatPassword: string;
}

const UpdatePassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const repeatPasswordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(async (data: UpdatePasswordData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória'),
        repeatPassword: Yup.string()
          .required('Confirmação de senha obrigatória')
          .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao realizar o logon, cheque as credenciais.',
      );
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <UpdatePasswordTextContainer>
            <UpdatePasswordText>Nova Senha</UpdatePasswordText>
          </UpdatePasswordTextContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="password"
              secureTextEntry
              spanText="Senha"
              placeholder="Senha aqui"
              returnKeyType="next"
              onSubmitEditing={() => {
                repeatPasswordInputRef.current?.focus();
              }}
            />
            <Input
              ref={repeatPasswordInputRef}
              name="repeatPassword"
              secureTextEntry
              spanText="Repetir"
              placeholder="Repita sua senha aqui"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              PRONTO
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdatePassword;
