import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  width: 100%;
  display: flex;
  border: 3px solid rgba(255, 255, 255, 0.01);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  transition: 0.2s;
  align-items: center;

  &:hover {
    border: 3px solid #fe346e;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #fe346e;
    `}

  input {
    flex: 1;
    width: 100%;
    padding: 15px 25px;
    border: none;
    background: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  button {
    align-items: center;
    justify-content: center;
    margin: 5px 15px 0 0;
    background: none;
    border: none;

    svg {
      margin: 0;
      padding: 0;
    }
  }
`;
