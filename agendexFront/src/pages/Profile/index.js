import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input} from '@rocketseat/unform'

import { updateProfileRequest} from '~/store/modules/user/actions'

import { Container } from './styled';

export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  return ( 
  <Container>
    <Form initialData={profile} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome Completo" />
      <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

      <hr/>

      <Input type="password" name="password" placeholder="Sua senha atual" /> 
      <Input type="password" name="password" placeholder="Sua nova Senha" /> 
      <Input type="password" name="password" placeholder="Confirme a nova Senha" />   

      <button type="submit">Atualizar</button> 
    </Form>

    <button type="button">
      Sair do MarcaJogo
    </button>
  </Container>
  );
}
