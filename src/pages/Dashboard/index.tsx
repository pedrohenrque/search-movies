import React from 'react';
import { HeaderLogo, Movie } from '../../components';
import { Container, Input } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderLogo />
      <Input />

      <Movie />
    </Container>
  );
};

export default Dashboard;
