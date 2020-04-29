import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input} from '@rocketseat/unform'

import { signOut} from '~/store/modules/auth/actions'
import { updateProfileRequest} from '~/store/modules/user/actions'

import AvatarInput from './AvatarInput'

import { Container } from './styled';

export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }
  
  function handleSignOut() {
    dispatch(signOut())
  }
  
  return ( 
  <Container>
    <Form initialData={profile} onSubmit={handleSubmit}>
      <AvatarInput name="avatar_id"/>
      <Input name="name" placeholder="Nome Completo" />
      <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

      <hr/>

      <Input type="password" name="password" placeholder="Sua senha atual" /> 
      <Input type="password" name="password" placeholder="Sua nova Senha" /> 
      <Input type="password" name="password" placeholder="Confirme a nova Senha" />   

      <button type="submit">Atualizar</button> 
    </Form>

    <button type="button" onClick={handleSignOut}>
      Sair do MarcaJogo
    </button>
  </Container>
  );
}
