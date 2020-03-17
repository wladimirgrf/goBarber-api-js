import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Full Name" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign up</button>
        <Link to="/">Log in</Link>
      </form>
    </>
  );
}
