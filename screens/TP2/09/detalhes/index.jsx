import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Pressable, Button } from "react-native";

export default function TP9Detalhes({ route, navigation }) {
    const params = route.params
    const postagem = params.postagem
    const dataPostagem = new Intl.DateTimeFormat('pt-BR').format(new Date(postagem.dataPostagem))
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>{postagem.titulo}</Text>
            <View style={styles.containerText}>
                <Text style={styles.curtidas}>Curtidas: {postagem.curtidas}</Text>
                <Text style={styles.compartilhamento}>Compartilhamentos: {postagem.compartilhamento}</Text>
            </View>
            <ScrollView>
                <Text>{postagem.texto}</Text>
            </ScrollView>
            <Text style={styles.autor}>Autor: {postagem.autor}</Text>
            <Text style={styles.data}>Postado em: {dataPostagem}</Text>
            <Button title="Voltar" onPress={() => navigation.navigate('TP9Home')} />
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
    titulo: {
        fontSize: 24,
        fontWeight: "bold"
    },
})