import React, { useState, useEffect } from 'react';
import { HeaderLogo, Input } from '../../components';
import noImage from '../../assets/noImage.png';

import moment from 'moment';

import {
  Container,
  Movie,
  Content,
  Header,
  Sinopse,
  Tags,
  Title,
  Error,
} from './styles';
import { Link } from 'react-router-dom';
import { apiPage } from '../../services/api';

import genreList from '../../util/genreList';

interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: Date;
  overview: string;
  genre_ids: [];
}

const Dashboard: React.FC = () => {
  const [newMovie, setNewMovie] = useState('');
  const [, setInputError] = useState('');
  const [resultError, setResultError] = useState('');
  const poster = 'http://image.tmdb.org/t/p/w342/';

  const [repositories, setRepositories] = useState(() => {
    const storageRepositories = sessionStorage.getItem('@movie:repositories');

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  useEffect(() => {
    sessionStorage.setItem('@movie:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleSearch(event: any) {
    event.preventDefault();

    if (!newMovie) {
      setInputError('Digite o nome de um filme ou gênero');
      return;
    }

    setResultError('');
    setInputError('');

    const replaceMovies = newMovie.replace(' ', '+');

    const { data } = await apiPage.get(`&page=1&query=${replaceMovies}`);

    if (!data.results[0]) {
      setResultError('Não foi encontrado o filme desejado');
    }

    setNewMovie('');
    setRepositories(data);
    console.log(data.results);
  }

  function searchGenre(value: any) {
    let search = genreList.map(g => {
      return value === g.id ? g.name : null;
    });
    return search;
  }

  return (
    <Container>
      <HeaderLogo />
      <form onSubmit={handleSearch}>
        <Input
          value={newMovie}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setNewMovie(e.target.value)
          }
          onClick={() => setNewMovie('')}
        />
      </form>

      {resultError && (
        <>
          <Error>{resultError}</Error>
        </>
      )}

      {repositories?.results && (
        <>
          {repositories.results.map((repo: MovieProps) => (
            <Movie key={repo.id}>
              <Link to={`/movies${repo.id}`}>
                {`${poster}${repo.poster_path}` === `${poster}${null}` ? (
                  <img src={noImage} alt="Poster" />
                ) : (
                  <img src={`${poster}${repo.poster_path}`} alt="Poster" />
                )}
                <Content>
                  <Header>
                    <Title>{repo.title || repo.name}</Title>
                    <p>{moment(repo.release_date).format('YYYY')}</p>
                  </Header>
                  <div
                    style={{
                      display: 'flex',
                      height: '80%',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Sinopse>
                      {repo.overview === '' ? (
                        <p> Sem sinopse adicionada...</p>
                      ) : (
                        <>{repo.overview}</>
                      )}
                    </Sinopse>
                    <Tags>
                      {repo.genre_ids.map((e: any, index: any) => (
                        <h2 key={index}>{searchGenre(e)}</h2>
                      ))}
                    </Tags>
                  </div>
                </Content>
              </Link>
            </Movie>
          ))}
        </>
      )}
    </Container>
  );
};

export default Dashboard;
