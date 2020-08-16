import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import Icon from 'react-native-vector-icons/Feather';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { providerId } = route.params as RouteParams;

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabelereiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
