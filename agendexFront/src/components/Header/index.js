import React from 'react';
import { Link } from 'react-router-dom'

import Notifications from '~/components/Notifications'

import logo from '~/assets/logoRoxa.svg'
import { Container, Content, Profile } from './styled';

export default function Header() {
  return (
   <Container>
      <Content>
        <nav>
          <img src={logo} alt="MarcaJogo"/>
          <Link to="/dashboard">Dashboard</Link>
    </nav>

    <aside>
      
      <Notifications/>
      <Profile>
        <div>
          <strong> Wallace Sanvier</strong>
          <Link to="/profile">Meu Perfil</Link>
        </div>
        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Wallace" />
      </Profile>
    </aside>
      </Content>

   </Container>
  );
}
