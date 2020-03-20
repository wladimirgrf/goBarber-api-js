import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="E-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm you password"
        />

        <button type="submit">Update</button>
      </Form>
      <button type="button">Logout</button>
    </Container>
  );
}
