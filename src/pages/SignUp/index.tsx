import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Container, Content, Backgroud } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Backgroud />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <header>
          <h1>Faça seu logon</h1>
        </header>

        <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

        <Input name="email" icon={FiMail} type="text" placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="forgot">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
