import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Backgroud } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <header>
          <h1>Faça seu login</h1>
        </header>

        <Input name="email" icon={FiMail} type="text" placeholder="Email" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="SignUp">
        <FiLogIn size={16} />
        Criar conta
      </a>
    </Content>
    <Backgroud />
  </Container>
);

export default SignIn;
