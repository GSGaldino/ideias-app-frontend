import React from 'react';

import {Link} from 'react-router-dom';

import Addidea from '../../../assets/addidea';
import Home from '../../../assets/home';
import Info from '../../../assets/info';
import Perfil from '../../../assets/perfil';
import Brain from '../../../assets/brain';


import './index.css';

export default function NavigationBar() {
  return (
    <div className="navigation_bar">
      <nav>
        <Link>
          <Home />
        </Link>
        <Link to="/brain" title="Minhas ideias">
          <Brain />
        </Link>
        <Link to="/ideias/nova" title="Nova ideia">
          <Addidea />
        </Link>
        <Link to="profile" title="Meu perfil">
          <Perfil />
        </Link>
        <Link to="/info" title="Info">
          <Info />
        </Link>
      </nav>
    </div>
  )
}
