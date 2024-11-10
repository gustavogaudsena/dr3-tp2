import { Image, StyleSheet, Text, View } from "react-native";

export default function Contato({ contato }) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: contato.uri }} />
            <View style={styles.containerText}>
                <Text style={styles.nome}>{contato.nome}</Text>
                <Text style={styles.endereco}>{contato.endereco}</Text>
                <Text style={styles.telefone}>{contato.telefone}</Text>
            </View>
        </View>
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
        flexDirection: 'row',
        gap: 10
    },
    containerText: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 0,
        gap: 10
    },
    avatar: {
        width: '30%',
        height: '100%'
    },
    text: {
        fontSize: 16
    }
})