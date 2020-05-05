import styled from 'styled-components/native';

import { ScrollView } from 'react-native-gesture-handler';

export const BackgroundImg = styled.ImageBackground`
  flex: 1;
  position: relative;
`;

export const Logo = styled.Image`
  top: 80px;
  margin: 0 auto;
`;

export const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 26px;
  color: #fff;
`;

export const ChannelsContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

export const Channel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 5px 30px 0;
`;

export const ChannelLogo = styled.View`
  width: 94px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background: #f83262;
`;

export const LogoChannel = styled.Image``;

export const InfoView = styled.View``;

export const ChannelInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  height: 83px;
  background: #fff;
  padding: 15px;
`;

export const ScheduleText = styled.Text`
  font-family: 'Poppins';
  font-size: 10px;
  font-weight: bold;
  color: #c1c1c1;
`;

export const ShowText = styled.Text`
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: bold;
  color: #121212;
  margin: 5px 0;
`;

export const PlayButton = styled.View``;
