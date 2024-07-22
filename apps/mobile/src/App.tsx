import { View, Text } from 'react-native';
import { somar } from '@barba/core';

export const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{somar(2, 3)}</Text>
    </View>
  );
};
