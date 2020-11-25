import React from 'react';

import { Redirect } from 'react-router-dom';

import Logo from '../../assets/logo';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';

import './index.css';

export default function Brain() {
  const user_id = localStorage.getItem('user_id');

  if (!user_id) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <Container>
        <div className="Brain">
          <Logo />
        </div>
      </Container>
      <NavigationBar />
    </>
  )
}
