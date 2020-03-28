import React from 'react';
import { Image } from 'react-native';

import Background from '~/components/Background';
import logo from '../../assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />

          <SubmitButton onPress={() => {}}>Log In</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Sign up today.</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
