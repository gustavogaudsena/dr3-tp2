import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TP9Home from './home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TP9Detalhes from './detalhes';
import { useNavigation } from '@react-navigation/native';

const TP9Stack = createNativeStackNavigator()

export default function TP2_09() {
    return (
        <TP9Stack.Navigator initialRouteName="TP9Home" screenOptions={{ headerShown: false }}  >
            <TP9Stack.Screen name="TP9Home" component={TP9Home} />
            <TP9Stack.Screen name="TP9Detalhes" component={TP9Detalhes} />
        </TP9Stack.Navigator>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        gap: 15,
        paddingHorizontal: 5,
        marginVertical: 15,
        flexDirection: 'column',
    },
})