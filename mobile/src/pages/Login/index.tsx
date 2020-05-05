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

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';

import {
  Container,
  Logo,
  ForgotPasswordText,
  ForgotPasswordContainer,
  CreateAccountContainer,
  CreateAccountText,
  CreateAccountButtonText,
} from './styles';

interface LogInData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: LogInData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email(),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

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
          'Ocorreu um erro ao realizar o logon, cheque as credenciais.',
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
          <Logo source={logo} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              spanText="E-mail"
              placeholder="E-mail aqui"
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
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />

            <ForgotPasswordContainer>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}
              >
                <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
              </TouchableOpacity>
            </ForgotPasswordContainer>

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              LOGIN
            </Button>
          </Form>

          <CreateAccountContainer>
            <CreateAccountText>Usuário novo? </CreateAccountText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              <CreateAccountButtonText>Registrar</CreateAccountButtonText>
            </TouchableOpacity>
          </CreateAccountContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
