import React from 'react';

import Logo from '../../assets/logo';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';

import './index.css';

export default function Info() {
  const Item = ({ title, subtitle }) => (
    <div className="info_item">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  )

  return (
    <>
      <Container>
        <div className="info">
          <Logo />
          <Item
            title="Quem somos nós?"
            subtitle="Uma aplicação criada com o intuito de facilitar a exposição de ideias."
          />
          <Item
            title="O que nós queremos?"
            subtitle="Queremos ajudar você que tem uma ideia incrível mas não consegue tirá-la do papel, e você que quer investir em ideias incríveis."
          />
          <Item
            title="Como funciona a exposição das ideias?"
            subtitle="A pessoa que pensou na ideia escreve tudo sobre ela, adiciona imagens do projeto da ideia ou de algo que represente aquilo e responde a algumas perguntas sobre a ideia. Após uma avaliação, a ideia fica disponível para todos."
          />
          <Item
            title="Como funciona a proteção aos direitos?"
            subtitle="Hoje em dia, se você tem uma ideia, primeiro você tem que descobrir se ela é patenteável. Se for, você tem que ir ao INPI, um órgão do governo que analisa tudo e aprova ou não. Porém é isso que queremos mudar com esse aplicativo, então se você sabe como ajudar, se sabe sobre patentes, marcas, registros e leis, fale conosco!"
          />
          <Item
            title="Como funciona a compra das ideias?"
            subtitle="A pessoa interessada na ideia manda uma mensagem para o criador da mesma, e as duas entram em um acordo."
          />
        </div>
      </Container>
      <NavigationBar />
    </>
  )
}