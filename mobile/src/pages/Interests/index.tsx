import React, { useState, useCallback } from 'react';
import {
  FlatList,
  ImageProps,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import InterestOne from '../../assets/interest_1.png';
import InterestTwo from '../../assets/interest_2.png';
import InterestThree from '../../assets/interest_3.png';
import InterestFour from '../../assets/interest_4.png';
import InterestFive from '../../assets/interest_5.png';
import InterestSix from '../../assets/interest_6.png';
import InterestSeven from '../../assets/interest_7.png';
import InterestEight from '../../assets/interest_8.png';
import InterestNine from '../../assets/interest_9.png';

import {
  Container,
  HelloTextContainer,
  NameText,
  HelloText,
  QuestionText,
  InterestImage,
  InterestImageTextContainer,
  InterestImageText,
  CheckIcon,
} from './styles';

interface InterestData {
  key: number;
  img: ImageProps;
  text: string;
  selected: boolean;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const navigation = useNavigation();

  const interestList: InterestData[] = [
    {
      key: 1,
      img: InterestOne,
      text: 'Filmes',
      selected: false,
    },
    {
      key: 2,
      img: InterestTwo,
      text: 'Terror',
      selected: false,
    },
    {
      key: 3,
      img: InterestThree,
      text: 'Reality',
      selected: false,
    },
    {
      key: 4,
      img: InterestFour,
      text: 'Futebol',
      selected: false,
    },
    {
      key: 5,
      img: InterestFive,
      text: 'Podcast',
      selected: false,
    },
    {
      key: 6,
      img: InterestSix,
      text: 'Economia',
      selected: false,
    },
    {
      key: 7,
      img: InterestSeven,
      text: 'Series',
      selected: false,
    },
    {
      key: 8,
      img: InterestEight,
      text: 'Games',
      selected: false,
    },
    {
      key: 9,
      img: InterestNine,
      text: 'Novelas',
      selected: false,
    },
  ];

  const [interestData, setInterestData] = useState<InterestData[]>(
    interestList,
  );

  const handleSelectInterest = useCallback(
    (interestKey: number) => {
      const newInterestData = [...interestData];

      const selectedInterestIndex = newInterestData.findIndex(
        (interest) => interest.key === interestKey,
      );

      newInterestData[selectedInterestIndex].selected = !newInterestData[
        selectedInterestIndex
      ].selected;

      setInterestData([...newInterestData]);
    },
    [interestData],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <HelloTextContainer>
          <HelloText>Olá, </HelloText>
          <NameText>{user.name}</NameText>
        </HelloTextContainer>

        <QuestionText>Sobre o que você quer ficar por dentro?</QuestionText>

        <FlatList
          numColumns={3}
          data={interestData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectInterest(item.key)}>
              <InterestImage source={item.img}>
                {item.selected && (
                  <CheckIcon name="check-circle" size={12} color="#fff" />
                )}
                <InterestImageTextContainer>
                  <InterestImageText style={{ color: '#fff' }}>
                    {item.text}
                  </InterestImageText>
                </InterestImageTextContainer>
              </InterestImage>
            </TouchableOpacity>
          )}
        />

        <Button
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        >
          CONFIRMAR
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
