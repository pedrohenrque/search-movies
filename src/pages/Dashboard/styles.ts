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

export const Error = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  justify-content: center;
  font-size: 26px;
  font-weight: 500;
  color: #fe346e;
`;

export const Movie = styled.div`
  a {
    flex: 1;
    margin-top: 70px;
    background: rgba(255, 255, 255, 0.2);
    border: 3px solid rgba(255, 255, 255, 0);
    display: flex;
    border-radius: 18px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.2s;

    img {
      width: 200px;
      height: auto;

      @media (max-width: 640px) {
        display: none;
      }
    }

    &:hover {
      transform: translateY(-10px);
      border: 3px solid #fe346e;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  text-transform: uppercase;
  background: #fe346e;
  color: #2c003e;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 450px;

  @media (max-width: 610px) {
    max-width: 350px;
  }
`;

export const Sinopse = styled.p`
  padding: 10px 20px;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
`;

export const Tags = styled.div`
  padding: 10px 20px;
  display: flex;

  h2 {
    padding: 5px 15px;
    font-weight: 325;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 11.5px;

    & + h2 {
      margin-left: 20px;
    }
  }
`;
