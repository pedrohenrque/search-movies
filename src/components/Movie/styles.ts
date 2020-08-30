import styled from 'styled-components';

export const Container = styled.div`
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
    }

    &:hover {
      /* transform: translateX(20px); */
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

  h1 {
    font-size: 22px;
    font-weight: 500;
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
