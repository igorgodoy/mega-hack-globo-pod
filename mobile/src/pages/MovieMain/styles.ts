import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #101010;
`;

export const HeaderMovie = styled.View``;

export const PlayButton = styled.TouchableOpacity``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  top: 40px;
  left: 20px;
`;

export const StreamButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 3;
  top: 50px;
  right: 35px;
`;

export const StreamMovieThumb = styled.ImageBackground`
  width: 100%;
  height: 317px;
  align-items: center;
  justify-content: center;
`;

export const MovieTitle = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 26px;
  color: #fff;

  margin-left: 40px;
  position: absolute;
  bottom: 0;
`;
export const MovieDetails = styled.View`
  margin: 10px 40px;
`;

export const CategoryView = styled.View`
  flex-direction: row;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const YearText = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  margin-right: 10px;
`;

export const DurationText = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
`;

export const Category = styled.Text`
  font-size: 12px;
  font-family: 'Poppins';
  color: #ff3030;

  padding: 2px 10px;

  border: 1px solid #ff3030;
  border-radius: 10px;

  margin: 0 10px 10px 0;
`;

export const Casting = styled.Text`
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;
  color: #fff;
`;

export const Sinopse = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  line-height: 21px;
  color: #fff;

  margin: 30px 0 0 0;
`;

export const InteractiveMenu = styled.View`
  flex-direction: row;
  margin: 20px 40px;
`;

export const InteractiveButton = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
`;

export const InteractiveButtonText = styled.Text`
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 18px;
  color: #fff;
`;

export const SimilarMoviesContainer = styled.View`
  margin: 30px 40px;
`;

export const SimilarMoviesTitle = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Divider = styled.View`
  height: 2px;
  width: 45%;
  background: #ff3030;
  margin: 5px 0;
`;

export const MoviesContainer = styled.View`
  margin: 30px 0 0 0;
  align-items: center;
`;

export const MovieThumb = styled.Image`
  width: 94px;
  height: 143px;
  border-radius: 4px;

  margin: 10px;
`;

export const Touchable = styled.TouchableOpacity``;
