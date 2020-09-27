import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { addMinutes, format } from 'date-fns';
import ReactPlayer from 'react-player';

import { apiMovieDetail, key } from '../../services/api';

import { IoIosArrowBack } from 'react-icons/io';
import NoImage from '../../assets/noImage.png';

import {
  Container,
  Content,
  Movie,
  Header,
  Title,
  ContentMovie,
  Description,
  Tags,
  Cards,
  Info,
  InfoTag,
  Player,
} from './styles';

interface RepositoryProps {
  id: string;
}

const MovieDetail: React.FC = () => {
  const { params } = useRouteMatch<RepositoryProps>();
  console.log(params.id);
  const [repository, setRepository] = useState<any>(null);
  const poster = 'http://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    apiMovieDetail
      .get(
        `${params.id}?api_key=${key}&language=pt-BR&append_to_response=videos`,
      )
      .then(response => setRepository(response.data));
  }, [params.id]);

  console.log(repository);

  function handleHours(minutes: any) {
    const hour = minutes / 60;
    let p = hour.toString().replace('.', 'h');
    let newHour = p.substr(0, 4);
    console.log(newHour);

    return newHour;
  }

  return (
    <Container>
      <div
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Link to="/">
          <IoIosArrowBack size={26} />
          <p>Voltar</p>
        </Link>

        <p>Detalhes</p>
      </div>

      {repository && (
        <>
          <Content>
            <Movie>
              <Header>
                <Title>{repository.title || repository.name}</Title>
                <p>{format(new Date(repository.release_date), 'yyyy')}</p>
              </Header>
              <ContentMovie>
                <Description>
                  <h1>sinopse</h1>

                  {repository.overview === '' ? (
                    <p>Sem sinopse adicionada...</p>
                  ) : (
                    <p>{repository.overview}</p>
                  )}
                </Description>
                <Tags>
                  {repository.genres.map((g: any) => (
                    <p key={g.id}>{g.name}</p>
                  ))}
                </Tags>
              </ContentMovie>
            </Movie>
            {`${poster}${repository.poster_path}` === `${poster}${null}` ? (
              <img src={NoImage} alt="Poster" />
            ) : (
              <img src={`${poster}${repository.poster_path}`} alt="Poster" />
            )}
          </Content>
          <Cards>
            <h1>Informações</h1>
            <Info>
              <InfoTag>
                <h2>Situação</h2>
                {repository.status === 'Released' ? (
                  <p>Lançado</p>
                ) : (
                  <p>Em desenvolvimento</p>
                )}
              </InfoTag>
              <InfoTag>
                <h2>Idioma</h2>
                {repository.original_language === 'en' ? (
                  <p>Inglês</p>
                ) : 'pt-BR ' ? (
                  <p>Português</p>
                ) : 'ru' ? (
                  <p>Russo</p>
                ) : 'ita' ? (
                  <p>Italiano</p>
                ) : null}
              </InfoTag>
              <InfoTag>
                <h2>Duração</h2>
                <p>
                  {/* {format(addMinutes(new Date(), repository.runtime), 'hh:mm')} */}
                  {handleHours(repository.runtime)}m
                </p>
              </InfoTag>
              <InfoTag>
                <h2>Orçamento</h2>
                <p>${repository.budget.toLocaleString()},00</p>
              </InfoTag>
              <InfoTag>
                <h2>Receita</h2>
                <p>${repository.revenue.toLocaleString()},00</p>
              </InfoTag>
              <InfoTag>
                <h2>Lucro</h2>
                <p>
                  ${(repository.revenue - repository.budget).toLocaleString()}
                  ,00
                </p>
              </InfoTag>
            </Info>
          </Cards>
          {repository?.videos?.results[0]?.key === undefined ? null : (
            <Player>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${repository.videos.results[0].key}`}
                width="100%"
                height="100%"
              />
            </Player>
          )}
        </>
      )}
    </Container>
  );
};

export default MovieDetail;
