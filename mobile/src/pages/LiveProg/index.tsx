import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';

import { ImageProperties } from 'react-native';
import BottomMenu from '../../components/BottomMenu';
import LiveProgBg1 from '../../assets/LiveProgBg1.png';

import logo from '../../assets/logoWht.png';
import Multishow from '../../assets/channels/multishow.png';

import {
  BackgroundImg,
  Logo,
  InfoContainer,
  Title,
  ChannelsContainer,
  Channel,
  ChannelLogo,
  ChannelInfo,
  LogoChannel,
  ScheduleText,
  ShowText,
  PlayButton,
  InfoView,
} from './styles';

interface ChannelsData {
  key: number;
  channelLogo: ImageProperties;
  schedule: string;
  show: string;
  bgColor: string;
}

const channelsData: ChannelsData[] = [
  {
    key: 1,
    channelLogo: Multishow,
    schedule: '21:00 - 23:30',
    show: 'Humor',
    bgColor: '#f83262',
  },
  {
    key: 2,
    channelLogo: Multishow,
    schedule: '21:00 - 23:30',
    show: 'Humor',
    bgColor: '#f83262',
  },
  {
    key: 3,
    channelLogo: Multishow,
    schedule: '21:00 - 23:30',
    show: 'Humor',
    bgColor: '#f83262',
  },
  {
    key: 4,
    channelLogo: Multishow,
    schedule: '21:00 - 23:30',
    show: 'Humor',
    bgColor: '#f83262',
  },
  {
    key: 5,
    channelLogo: Multishow,
    schedule: '21:00 - 23:30',
    show: 'Humor',
    bgColor: '#f83262',
  },
  {
    key: 6,
    channelLogo: Multishow,
    schedule: '21:00 - 23:30',
    show: 'Humor',
    bgColor: '#f83262',
  },
];

const LiveProg: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <>
      <BackgroundImg source={LiveProgBg1}>
        <Logo source={logo} />
        <InfoContainer>
          <Title>Assista agora</Title>
          <ChannelsContainer>
            <Carousel
              layout="default"
              onSnapToItem={(index) => setActiveSlide(index)}
              data={channelsData}
              renderItem={({ item }) => (
                <Channel key={item.key}>
                  <ChannelLogo>
                    <LogoChannel source={Multishow} />
                  </ChannelLogo>
                  <ChannelInfo>
                    <InfoView>
                      <ScheduleText>21:00 - 23:30</ScheduleText>
                      <ShowText>Humor</ShowText>
                    </InfoView>
                    <PlayButton>
                      <Icon name="play-circle" size={30} color={item.bgColor} />
                    </PlayButton>
                  </ChannelInfo>
                </Channel>
              )}
              sliderWidth={279}
              itemWidth={279}
            />
            <Pagination
              dotsLength={channelsData.length}
              activeDotIndex={activeSlide}
              containerStyle={{ paddingVertical: 0 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 4,
                backgroundColor: '#ff3030',
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </ChannelsContainer>
        </InfoContainer>
      </BackgroundImg>
      <BottomMenu />
    </>
  );
};

export default LiveProg;
