import React, { useCallback, useMemo } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OKButtonText,
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

interface RouteParams {
  date: number;
}

const AppointmentCreate: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(
      routeParams.date,
      "EEEE', dia ' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h' ",
      { locale: ptBR },
    );
  }, []);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento Concluído</Title>
      <Description>{formattedDate}</Description>
      <OkButton onPress={handleOkPressed}>
        <OKButtonText>OK</OKButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreate;
