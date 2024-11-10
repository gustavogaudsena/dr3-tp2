import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TP2 from './screens/TP2';
import TP2_01 from './screens/TP2/01';
import TP2_02 from './screens/TP2/02';
import TP2_03 from './screens/TP2/03';
import TP2_06 from './screens/TP2/06';
import TP2_04 from './screens/TP2/04';
import TP2_05 from './screens/TP2/05';
import TP2_07 from './screens/TP2/07';
import TP2_08 from './screens/TP2/08';
import TP2_09 from './screens/TP2/09';
import TP2_10 from './screens/TP2/10';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TP2'>
        <Stack.Screen name="TP2" component={TP2} />
        <Stack.Screen name="TP2 - 1" component={TP2_01} />
        <Stack.Screen name="TP2 - 2" component={TP2_02} />
        <Stack.Screen name="TP2 - 3" component={TP2_03} />
        <Stack.Screen name="TP2 - 4" component={TP2_04} />
        <Stack.Screen name="TP2 - 5" component={TP2_05} />
        <Stack.Screen name="TP2 - 6" component={TP2_06} />
        <Stack.Screen name="TP2 - 7" component={TP2_07} />
        <Stack.Screen name="TP2 - 8" component={TP2_08} />
        <Stack.Screen name="TP2 - 9" component={TP2_09} />
        <Stack.Screen name="TP2 - 10" component={TP2_10} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
