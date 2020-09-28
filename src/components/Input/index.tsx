import React, { useState, useCallback } from 'react';

import { MdClose } from 'react-icons/md';
import { Container } from './styles';

interface InputProps {
  value?: string;
  onChange?: any;
  onClick?: any;
}

const Input: React.FC<InputProps> = ({ value, onChange, onClick }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <input
        placeholder="Digite o nome do filme"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        onChange={onChange}
      />
      {value && <button type="submit">Buscar</button>}
    </Container>
  );
};

export default Input;
