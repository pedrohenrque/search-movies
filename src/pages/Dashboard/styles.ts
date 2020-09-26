import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 15px 25px;
  border-radius: 30px;
  border: 3px solid rgba(255, 255, 255, 0.01);
  background: rgba(255, 255, 255, 0.2);
  transition: 0.2s;

  &:hover {
    border: 3px solid #fe346e;
  }

  &:focus {
    border: 3px solid #fe346e;
  }
`;
