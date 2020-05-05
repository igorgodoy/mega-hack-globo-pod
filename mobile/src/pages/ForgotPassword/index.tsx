import React, { useRef, useCallback, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/Button';

import {
  Container,
  ForgotPasswordTextContainer,
  ForgotPasswordText,
  LoginContainer,
  LoginText,
  LoginButtonText,
} from './styles';

interface ForgotPasswordData {
  email?: string;
  password?: string;
}

const ForgotPassword: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [radioButtonValue, setRadioButtonValueState] = useState<number>(1);

  const handleSubmit = useCallback(async (data: ForgotPasswordData) => {
    try {
      formRef.current?.setErrors({});

      const schema =
        typeof data.email !== 'undefined'
          ? Yup.object().shape({
              email: Yup.string().required('E-mail obrigatório').email(),
            })
          : Yup.object().shape({
              phone: Yup.string().required('Telefone obrigatório'),
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
          <ForgotPasswordTextContainer>
            <ForgotPasswordText>Recuperar Senha</ForgotPasswordText>
          </ForgotPasswordTextContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <RadioButton
              state={[radioButtonValue, setRadioButtonValueState]}
              options={[
                {
                  key: 1,
                  text: 'E-mail',
                },
                {
                  key: 2,
                  text: 'Telefone',
                },
              ]}
            />

            {radioButtonValue === 1 ? (
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                spanText="E-mail"
                placeholder="fulano@email.com"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            ) : (
              <Input
                keyboardType="phone-pad"
                name="phone"
                spanText="Telefone"
                placeholder="(99) 99999-9999"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
            )}

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              ENVIAR
            </Button>
          </Form>

          <LoginContainer>
            <LoginText>Lembrou a senha? </LoginText>
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

export default ForgotPassword;
