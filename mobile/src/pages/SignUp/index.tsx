import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  RegisterTextContainer,
  RegisterText,
  LoginContainer,
  LoginText,
  LoginButtonText,
} from './styles';

interface SignUpData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignUpData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string().required('E-mail obrigatório').email(),
          password: Yup.string().required('Senha obrigatória'),
          phone: Yup.string().required('Telefone obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao realizar o cadastro, cheque os campos enviados.',
        );
      }
    },
    [signIn],
  );

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
          <RegisterTextContainer>
            <RegisterText>Registro</RegisterText>
          </RegisterTextContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              autoCapitalize="words"
              name="name"
              spanText="Nome Completo"
              placeholder="Fulano Da Silva"
              returnKeyType="next"
              onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }}
            />
            <Input
              ref={emailInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              spanText="E-mail"
              placeholder="fulano@email.com"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              secureTextEntry
              spanText="Senha"
              placeholder="Senha aqui"
              returnKeyType="next"
              onSubmitEditing={() => {
                phoneInputRef.current?.focus();
              }}
            />
            <Input
              ref={phoneInputRef}
              keyboardType="phone-pad"
              name="phone"
              spanText="Telefone"
              placeholder="(99) 99999-9999"
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
              REGISTRAR
            </Button>
          </Form>

          <LoginContainer>
            <LoginText>Possui conta? </LoginText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LogIn');
              }}
            >
              <LoginButtonText>Logar</LoginButtonText>
            </TouchableOpacity>
          </LoginContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
