import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import Background from '~/components/Background';
import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setPassword('');
    setOldPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        password,
        oldPassword,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Profile</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Name"
            returnKeyType="next"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail"
            ref={emailRef}
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Current Password"
            ref={oldPasswordRef}
            returnKeyType="next"
            value={oldPassword}
            onChangeText={setOldPassword}
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="New Password"
            ref={passwordRef}
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Update Profile</SubmitButton>
          <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
