import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { ProvedorUsuario } from './data/contexts/ContextoUsuario';
import { ProvedorAgendamento } from './data/contexts/ContextoAgendamento';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <ProvedorUsuario>
      <ProvedorAgendamento>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Mobileaa</Text>
        </View>
      </ProvedorAgendamento>
    </ProvedorUsuario>
  );
};
