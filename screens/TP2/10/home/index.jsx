import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Produto from '../produto';

export default function TP10Home({ navigation, carrinho, adicionaItem, produtos }) {
    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    produtos.map((produto, idx) => <Produto produto={produto} key={`list_${idx}`} adicionaItem={adicionaItem} />)
                }
            </View>
        </ScrollView>
    )
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