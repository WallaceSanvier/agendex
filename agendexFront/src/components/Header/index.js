import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Notifications from '~/components/Notifications'

import logo from '~/assets/logoRoxa.svg'
import { Container, Content, Profile } from './styled';

export default function Header() {
  const profile = useSelector(state => state.user.profile)
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
          <strong>{profile.name}</strong>
          <Link to="/profile">Meu Perfil</Link>
        </div>
        <img src={profile.avatar.url} alt="avatar imagem"/>
      </Profile>
    </aside>
      </Content>

   </Container>
  );
}
