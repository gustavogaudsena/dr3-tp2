import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Postagem({ postagem, navigation }) {

    const handlePress = () => {
        navigation.navigate('TP9Detalhes', {
            postagem
        })
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Text style={styles.titulo}>{postagem.titulo}</Text>
                <Text style={styles.resumo}>{postagem.resumo}</Text>
                <View style={styles.containerText}>
                    <Text style={styles.curtidas}>Curtidas: {postagem.curtidas}</Text>
                    <Text style={styles.compartilhamento}>Compartilhamentos: {postagem.compartilhamento}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        backgroundColor: '#e6e6e6',
        borderColor: '#32302e',
        flex: 0,
        flexDirection: 'column',
        gap: 10
    },
    containerText: {
        flex: 0,
        gap: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 16
    }
})