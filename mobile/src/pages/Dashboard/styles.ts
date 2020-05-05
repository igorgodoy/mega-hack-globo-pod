import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #121212;

  padding: 30px 40px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const LogoNameContainer = styled.View`
  width: 100%;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NameText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  margin-left: 5px;
`;

export const ProfileArrowIcon = styled(Icon)`
  margin-top: 5px;
`;

export const TopMenuContainer = styled.View`
  width: 75%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const TopTextOption = styled.Text`
  color: #fff;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 12px;
`;

export const ServiceContainerView = styled.View`
  width: 100%;
  margin-top: 35px;
  align-items: center;
`;

export const Service = styled.ImageBackground`
  flex-direction: column;
  padding-right: 24px;
  margin: 30px 20px 30px 0;
  width: 279px;
  height: 291px;
`;

export const ContentNameText = styled.Text`
  position: absolute;
  left: 20px;
  bottom: 90px;
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 24px;
  color: #fff;
`;

export const EpInfo = styled.View`
  position: absolute;
  left: 24px;
  bottom: 60px;
  flex-direction: row;
  justify-content: center;
`;

export const EpNumberText = styled.Text`
  font-family: 'Poppins-Bold';
  font-weight: bold;
  font-size: 17px;
  color: #fff;
`;

export const EpNameText = styled.Text`
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 17px;
  color: #fff;
`;

export const DescriptionText = styled.Text`
  position: absolute;
  left: 24px;
  bottom: 10px;
  font-family: 'Poppins-Medium';
  font-weight: 500;
  font-size: 17px;
  color: #fff;
`;

export const PlayButton = styled.View`
  position: absolute;
  left: 24px;
  bottom: 30px;
`;
