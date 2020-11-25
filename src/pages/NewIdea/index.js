import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo';
import Container from '../components/Container';

import './index.css';

export default function NewIdea() {
  const user_id = localStorage.getItem('user_id');
  const [fields, setFields] = useState([]);
  const history = useHistory();

  const handleChange = event => {
    const value = event.target.value;
    setFields({...fields, [event.target.name]: value})
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.target);

    const response = await fetch('http://localhost:5000/api/v1/ideas', {
      method: 'post',
      headers:{
        authorization: user_id
      },
      body: data
    })

    if(response.ok){
      alert('Ideia enviada com sucesso!')
      history.push('/brain')
    }
  }

  return (
    <Container>
      <div className="new_idea">
        <Logo />
        <form method="post" action="" enctype="multipart/form-data" onSubmit={handleFormSubmit}>
          <input type="text" name="ideaname" onChange={handleChange} autoComplete="off"/>
          <span>Qual o nome da sua idéia?</span>
          <input type="file" name="foto1" onChange={handleChange} autoComplete="off"/>
          <span>Adicione fotos que representem sua idéia!</span>
          <textarea name="description" onChange={handleChange}></textarea>
          <span>Descrição da sua idéia</span>
          <input type="range" min="0,00" max="1.000.000,00" name="value" onChange={handleChange}/>
          <span>Quanto vale essa idéia?</span>
          <input type="submit" value="Enviar idéia" className="button light"/>
        </form>
      </div>
    </Container>
  )
}
