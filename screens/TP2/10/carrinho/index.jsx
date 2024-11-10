import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Pressable, Button } from "react-native";
import ItemCarrinho from "../itemCarrinho";

export default function TP10Carrinho({ route, navigation, carrinho, produtos }) {

    const meusProdutos = carrinho.reduce((acc, current) => {
        const produto = Array.from(produtos).find(item => item.id == current)

        if (!acc[produto.id]) acc[produto.id] = {};
        const quantidade = acc[produto.id].quantidade ? acc[produto.id].quantidade + 1 : 1;
        const precoFinal = quantidade * produto.valor
        acc[produto.id] = {
            ...produto,
            precoFinal,
            quantidade: acc[produto.id].quantidade ? acc[produto.id].quantidade + 1 : 1
        }

        return acc
    }, [])

    const valorTotal = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(meusProdutos.reduce((acc, current) => acc + current.precoFinal, 0));

    return (
        <View style={styles.container}>
            {
                meusProdutos.map((item, idx) => {
                    return <ItemCarrinho produto={item} />
                })
            }
            <View style={styles.containerValorTotal}>
                <Text style={styles.valorTotal}>
                    {valorTotal}
                </Text>
            </View>
            <Button title="Voltar" onPress={() => navigation.navigate('TP10Home')} />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'column',
        gap: 10
    },
    containerText: {
        flex: 0,
        gap: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontWeight: 'light'
    },
    containerValorTotal: {
        borderTopWidth: 1,
        padding: 6,
        flex: 1,
        alignItems: 'flex-end'
    },
    valorTotal: {
        fontSize: 25
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold"
    },
   
})