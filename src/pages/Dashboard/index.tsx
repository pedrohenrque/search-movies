import React, { useState } from 'react';
import { HeaderLogo, Movie, Input } from '../../components';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <HeaderLogo />
      <Input
        value={inputValue}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setInputValue(e.target.value)
        }
        onClick={() => setInputValue('')}
      />
      <Movie searchMovie={inputValue} />
    </Container>
  );
};

export default Dashboard;
