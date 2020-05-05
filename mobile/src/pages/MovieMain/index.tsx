import React from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import { ImageProperties, StatusBar } from 'react-native';

import BottomMenu from '../../components/BottomMenu';

import SMovieThumb1 from '../../assets/Rectangle24.png';
import SMovieThumb2 from '../../assets/Rectangle25.png';
import SMovieThumb3 from '../../assets/Rectangle26.png';

import MovieThumbImg from '../../assets/StreamMovieThumb.png';

import {
  Container,
  HeaderMovie,
  PlayButton,
  BackButton,
  StreamButton,
  StreamMovieThumb,
  MovieTitle,
  MovieDetails,
  InfoContainer,
  YearText,
  DurationText,
  CategoryView,
  Category,
  Casting,
  Sinopse,
  InteractiveMenu,
  InteractiveButton,
  InteractiveButtonText,
  SimilarMoviesContainer,
  SimilarMoviesTitle,
  Divider,
  MoviesContainer,
  MovieThumb,
  Touchable,
} from './styles';

interface SimilarMoviesData {
  key: number;
  name: string;
  image: ImageProperties;
}

const SimilarMoviesData: SimilarMoviesData[] = [
  {
    key: 1,
    name: 'Os 4400',
    image: SMovieThumb1,
  },
  {
    key: 2,
    name: 'Os 4400',
    image: SMovieThumb2,
  },
  {
    key: 3,
    name: 'Os 4400',
    image: SMovieThumb3,
  },
  {
    key: 4,
    name: 'Os 4400',
    image: SMovieThumb1,
  },
  {
    key: 5,
    name: 'Os 4400',
    image: SMovieThumb2,
  },
  {
    key: 6,
    name: 'Os 4400',
    image: SMovieThumb3,
  },
  {
    key: 7,
    name: 'Os 4400',
    image: SMovieThumb1,
  },
  {
    key: 8,
    name: 'Os 4400',
    image: SMovieThumb2,
  },
  {
    key: 9,
    name: 'Os 4400',
    image: SMovieThumb3,
  },
];

const MovieMain: React.FC = () => {
  return (
    <>
      <ScrollView>
        <Container>
          <HeaderMovie>
            <BackButton>
              <Icon name="chevron-left" size={42} color="#fff" />
            </BackButton>
            <StreamButton>
              <Icon name="airplay" size={30} color="#fff" />
            </StreamButton>
            <StreamMovieThumb source={MovieThumbImg}>
              <PlayButton>
                <Icon name="play-circle" size={64} color="#fff" />
              </PlayButton>
            </StreamMovieThumb>
            <MovieTitle>A Orfã</MovieTitle>
          </HeaderMovie>
          <MovieDetails>
            <InfoContainer>
              <YearText>2019</YearText>
              <DurationText>1h30m</DurationText>
            </InfoContainer>

            <CategoryView>
              <Category>Terror</Category>
              <Category>Suspense</Category>
            </CategoryView>
            <Casting>
              Elenco: Bill Skarsgård, James McAvoy, Jessica Chastain
            </Casting>
            <Sinopse>
              Um marido e uma mulher que recentemente perderam o bebê adotam uma
              menina de 9 anos de idade que não é tão inocente quanto parece
              ser.
            </Sinopse>
          </MovieDetails>
          <InteractiveMenu>
            <InteractiveButton>
              <Icon name="download" size={20} color="#fff" />
              <InteractiveButtonText>Download</InteractiveButtonText>
            </InteractiveButton>
            <InteractiveButton>
              <Icon name="heart" size={20} color="#fff" />
              <InteractiveButtonText>Compartilhar</InteractiveButtonText>
            </InteractiveButton>
            <InteractiveButton>
              <Icon name="plus" size={20} color="#fff" />
              <InteractiveButtonText>Lista</InteractiveButtonText>
            </InteractiveButton>
            <InteractiveButton>
              <Icon name="users" size={20} color="#fff" />
              <InteractiveButtonText>Convidar Amigos</InteractiveButtonText>
            </InteractiveButton>
          </InteractiveMenu>
          <SimilarMoviesContainer>
            <SimilarMoviesTitle>Filmes Semelhantes</SimilarMoviesTitle>
            <Divider />
            <MoviesContainer>
              <FlatList
                data={SimilarMoviesData}
                numColumns={3}
                renderItem={({ item }) => (
                  <Touchable>
                    <MovieThumb source={item.image} />
                  </Touchable>
                )}
              />
            </MoviesContainer>
          </SimilarMoviesContainer>
        </Container>
      </ScrollView>
      <BottomMenu />
    </>
  );
};

export default MovieMain;
