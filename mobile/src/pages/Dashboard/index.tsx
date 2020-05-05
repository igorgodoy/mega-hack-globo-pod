import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  ImageProperties,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import BottomMenu from '../../components/BottomMenu';

import { useAuth } from '../../hooks/auth';

import shortLogo from '../../assets/short-logo.png';
import playLogo from '../../assets/play-logo.png';
import gshowLogo from '../../assets/gshow-logo.png';
import sportsLogo from '../../assets/esportes-logo.png';
import box from '../../assets/Box.png';
import boxTwo from '../../assets/Box2.png';
import boxThree from '../../assets/Box3.png';

import {
  Container,
  HeaderContainer,
  LogoNameContainer,
  NameText,
  ProfileArrowIcon,
  TopMenuContainer,
  TopTextOption,
  ServiceContainerView,
  Service,
  ContentNameText,
  EpNameText,
  EpNumberText,
  EpInfo,
  PlayButton,
  DescriptionText,
} from './styles';

interface PlayServiceData {
  key: number;
  contentName: string;
  image: ImageProperties;
  epNumber: string;
  epName: string;
}

const playServiceData: PlayServiceData[] = [
  {
    key: 1,
    contentName: 'The Walking Dead',
    image: box,
    epNumber: 'T9:E4',
    epName: '"Faz favor"',
  },
  {
    key: 2,
    contentName: 'The Walking Dead',
    image: box,
    epNumber: 'T9:E4',
    epName: '"Faz favor"',
  },
  {
    key: 3,
    contentName: 'The Walking Dead',
    image: box,
    epNumber: 'T9:E4',
    epName: '"Faz favor"',
  },
  {
    key: 4,
    contentName: 'The Walking Dead',
    image: box,
    epNumber: 'T9:E4',
    epName: '"Faz favor"',
  },
];

interface SportsServiceData {
  key: number;
  contentName: string;
  image: ImageProperties;
  description: string;
}

const sportsServiceData: SportsServiceData[] = [
  {
    key: 1,
    contentName: 'Orgulhos da terra',
    image: boxTwo,
    description:
      'Nordeste é seleiro de grandes nomes para a Seleção Brasileira',
  },
  {
    key: 2,
    contentName: 'Orgulhos da terra',
    image: boxTwo,
    description:
      'Nordeste é seleiro de grandes nomes para a Seleção Brasileira',
  },
  {
    key: 3,
    contentName: 'Orgulhos da terra',
    image: boxTwo,
    description:
      'Nordeste é seleiro de grandes nomes para a Seleção Brasileira',
  },
  {
    key: 4,
    contentName: 'Orgulhos da terra',
    image: boxTwo,
    description:
      'Nordeste é seleiro de grandes nomes para a Seleção Brasileira',
  },
];

interface GShowServiceData {
  key: number;
  contentName: string;
  image: ImageProperties;
  description: string;
}

const gShowServiceData: GShowServiceData[] = [
  {
    key: 1,
    contentName: 'Casa de vidro BBB',
    image: boxThree,
    description:
      'Conheça a participante escolhida para entrar na casa mais vigiada do Brasil',
  },
  {
    key: 2,
    contentName: 'Casa de vidro BBB',
    image: boxThree,
    description:
      'Conheça a participante escolhida para entrar na casa mais vigiada do Brasil',
  },
  {
    key: 3,
    contentName: 'Casa de vidro BBB',
    image: boxThree,
    description:
      'Conheça a participante escolhida para entrar na casa mais vigiada do Brasil',
  },
  {
    key: 4,
    contentName: 'Casa de vidro BBB',
    image: boxThree,
    description:
      'Conheça a participante escolhida para entrar na casa mais vigiada do Brasil',
  },
];

const Dashboard: React.FC = () => {
  const [activeSlidePlay, setActiveSlidePlay] = useState<number>(0);
  const [activeSlideSports, setActiveSlideSports] = useState<number>(0);
  const [activeSlideGShow, setActiveSlideGShow] = useState<number>(0);

  const { user } = useAuth();

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <HeaderContainer>
          <TouchableOpacity>
            <Icon name="menu" size={24} color="#fff" />
          </TouchableOpacity>

          <LogoNameContainer>
            <Image source={shortLogo} />
            <NameText>{user.name.split(' ')[0]}</NameText>
          </LogoNameContainer>
        </HeaderContainer>
        <TouchableOpacity>
          <ProfileArrowIcon name="chevron-down" size={24} color="#fff" />
        </TouchableOpacity>

        <TopMenuContainer>
          <TopTextOption>Recomendado</TopTextOption>
          <TopTextOption>Novo</TopTextOption>
          <TopTextOption style={{ color: '#ff3030' }}>Continue</TopTextOption>
        </TopMenuContainer>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ServiceContainerView>
            <Image source={playLogo} />

            <Carousel
              layout="default"
              onSnapToItem={(index) => setActiveSlidePlay(index)}
              data={playServiceData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MovieMain');
                  }}
                >
                  <Service key={item.key} source={item.image}>
                    <ContentNameText>{item.contentName}</ContentNameText>
                    <EpInfo>
                      <EpNumberText>{item.epNumber} </EpNumberText>
                      <EpNameText>{item.epName}</EpNameText>
                    </EpInfo>
                    <PlayButton>
                      <Icon name="play-circle" size={30} color="#fff" />
                    </PlayButton>
                  </Service>
                </TouchableOpacity>
              )}
              sliderWidth={279}
              itemWidth={279}
            />
            <Pagination
              dotsLength={playServiceData.length}
              activeDotIndex={activeSlidePlay}
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
          </ServiceContainerView>

          <ServiceContainerView>
            <Image source={sportsLogo} />

            <Carousel
              layout="default"
              onSnapToItem={(index) => setActiveSlideSports(index)}
              data={sportsServiceData}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Service key={item.key} source={item.image}>
                    <ContentNameText>{item.contentName}</ContentNameText>
                    <DescriptionText>{item.description}</DescriptionText>
                  </Service>
                </TouchableOpacity>
              )}
              sliderWidth={279}
              itemWidth={279}
            />
            <Pagination
              dotsLength={playServiceData.length}
              activeDotIndex={activeSlideSports}
              containerStyle={{ paddingVertical: 0 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 4,
                backgroundColor: '#3b9c00',
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </ServiceContainerView>

          <ServiceContainerView>
            <Image source={gshowLogo} />

            <Carousel
              layout="default"
              onSnapToItem={(index) => setActiveSlideGShow(index)}
              data={gShowServiceData}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Service key={item.key} source={item.image}>
                    <ContentNameText>{item.contentName}</ContentNameText>
                    <DescriptionText>{item.description}</DescriptionText>
                  </Service>
                </TouchableOpacity>
              )}
              sliderWidth={279}
              itemWidth={279}
            />
            <Pagination
              dotsLength={gShowServiceData.length}
              activeDotIndex={activeSlideGShow}
              containerStyle={{ paddingVertical: 0 }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 4,
                backgroundColor: '#ec7d00',
              }}
              inactiveDotStyle={{
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </ServiceContainerView>
        </ScrollView>
      </Container>
      <BottomMenu />
    </>
  );
};

export default Dashboard;
