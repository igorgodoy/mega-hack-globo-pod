import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, InteractiveButton, InteractiveButtonText } from './styles';

const BottomMenu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <InteractiveButton
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      >
        <Icon name="home" size={20} color="#fff" />
        <InteractiveButtonText>Início</InteractiveButtonText>
      </InteractiveButton>
      <InteractiveButton>
        <Icon name="file-text" size={20} color="#fff" />
        <InteractiveButtonText>Notícias</InteractiveButtonText>
      </InteractiveButton>
      <InteractiveButton
        onPress={() => {
          navigation.navigate('LiveProg');
        }}
      >
        <Icon name="tv" size={20} color="#fff" />
        <InteractiveButtonText>Agora Na TV</InteractiveButtonText>
      </InteractiveButton>
      <InteractiveButton>
        <Icon name="users" size={20} color="#fff" />
        <InteractiveButtonText>Amigos</InteractiveButtonText>
      </InteractiveButton>
    </Container>
  );
};

export default BottomMenu;
