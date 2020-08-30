import React from 'react';
import cover from '../../assets/example.jpg';
import { Container, Content, Header, Sinopse, Tags } from './styles';
import { Link } from 'react-router-dom';

const Movie: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={cover} alt="Cover" />
        <Content>
          <Header>
            <h1>de volta para o futuro</h1>
            <p>1985</p>
          </Header>
          <Sinopse>
            Marty McFly (Michael J. Fox), um adolescente que inevitavelmente
            volta no tempo até 1955. Ele conhece seus futuros pais no colégio e
            acidentalmente faz sua futura mãe ficar romanticamente interessada
            por ele. Marty deve consertar o dano na história fazendo com que
            seus pais se apaixonem e, com a ajuda do Dr. Emmett Brown
            (Christopher Lloyd), encontrar um modo de voltar para 1985.
          </Sinopse>
          <Tags>
            <h2>Ficção cientifica</h2>
            <h2>Aventura</h2>
          </Tags>
        </Content>
      </Link>
    </Container>
  );
};

export default Movie;
