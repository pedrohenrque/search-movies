import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  div {
    font-size: 20px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #fe346e;
    }

    p {
      font-size: 20px;
      padding-left: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;

  img {
    margin: 20px 0 0 20px;
    width: 300px;
    height: auto;
    border-radius: 18px;
    transition: 0.2s;

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 640px) {
      display: none;
    }
  }
`;

export const Movie = styled.div`
  margin-top: 20px;
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0);
  /* display: flex; */
  border-radius: 18px;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    border-color: #fe346e;
    transform: translateY(-5px);
  }
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

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 450px;

  @media (max-width: 610px) {
    max-width: 350px;
  }
`;

export const ContentMovie = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.div`
  flex: 1;

  h1 {
    font-weight: 300;
    font-size: 22px;
    text-transform: uppercase;
    color: #fe346e;
  }

  p {
    padding-top: 20px;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    text-align: justify;
  }
`;

export const Tags = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;

  p {
    margin: 20px 20px 0 0;
    padding: 5px 15px;
    font-weight: 325;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 11.5px;
  }
`;

export const Cards = styled.div`
  margin-top: 20px;
  flex: 1;

  h1 {
    font-weight: 300;
    font-size: 22px;
    text-transform: uppercase;
    color: #fe346e;
  }
`;

export const Info = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 10px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

export const InfoTag = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  text-align: center;
  border-radius: 8px;
  padding: 20px 10px;
  border: 3px solid rgba(255, 255, 255, 0);
  transition: 0.2s;
  margin-right: 10px;

  @media (max-width: 640px) {
    margin-top: 10px;
  }

  &:hover {
    border-color: #fe346e;
    transform: translateY(-5px);
  }

  h2 {
    font-weight: 600;
    font-size: 13px;
  }

  p {
    padding-top: 35px;
    font-weight: 400;
    font-size: 13px;
  }
`;

export const Player = styled.div`
  margin: 20px 0 20px 0;
  flex: 1;
  width: 100%;
  height: 480px;
  border-radius: 18px;
  overflow: hidden;
`;

export const NoTrailer = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: #fe346e;
  font-size: 26px;
  font-weight: 400;
`;
