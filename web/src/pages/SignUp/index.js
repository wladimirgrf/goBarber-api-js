import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('E-mail is required.'),
  password: Yup.string()
    .min(6, 'Password is too short. It must be at least 6 characters long.')
    .required('Password is required.'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Sign up</button>
        <Link to="/">Log in</Link>
      </Form>
    </>
  );
}
