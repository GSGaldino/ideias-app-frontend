import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';

import Logo from '../../assets/logo';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';

import './index.css';

export default function Brain() {
  const [myIdeas, setMyIdeas] = useState([]);
  const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch('https://ideias-app-backend.herokuapp.com/api/v1/session/brain', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': user_id
          }
        })
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setMyIdeas(data);
        }
      } catch (error) {
        console.log(`Error /Brain => ideas request: ${error}`)
      }
    };
    loadData();
  }, [user_id])

  if (!user_id) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <>
      <Container>
        <div className="brain">
          <Logo />
          <div className="container_brain">
            {myIdeas.map((idea, index) => (
              <div className="my_idea" style={{backgroundImage: `url(${idea.image_url})`}}>
                <div className="name">
                  <h2>
                    {(idea.ideaname).toUpperCase()}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <NavigationBar />
    </>
  )
}
