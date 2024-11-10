import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Postagem from '../postagem';

export default function TP9Home({ navigation }) {
    const postagens = [
        {
            titulo: 'Introdução ao React Native',
            resumo: 'Um guia rápido para começar com React Native.',
            texto: 'React Native é uma estrutura de desenvolvimento criada pelo Facebook que permite criar aplicativos nativos para iOS e Android usando JavaScript e React.',
            autor: 'João Silva',
            dataPostagem: '2024-10-01',
            curtidas: 120,
            compartilhamento: 30,
        },
        {
            titulo: 'Dicas de Performance no JavaScript',
            resumo: 'Aprenda como melhorar a performance do seu código JavaScript.',
            texto: 'Otimize loops, evite acessar o DOM desnecessariamente e use técnicas de memoização para tornar seu código JavaScript mais eficiente.',
            autor: 'Maria Souza',
            dataPostagem: '2024-10-15',
            curtidas: 200,
            compartilhamento: 45,
        },
        {
            titulo: 'Estilos no React Native',
            resumo: 'Entenda como funcionam os estilos no React Native.',
            texto: 'No React Native, usamos o conceito de StyleSheet para criar estilos de maneira semelhante ao CSS, porém com algumas limitações e diferenças.',
            autor: 'Carlos Pereira',
            dataPostagem: '2024-09-20',
            curtidas: 90,
            compartilhamento: 20,
        },
        {
            titulo: 'Hooks no React',
            resumo: 'Uma introdução aos Hooks no React.',
            texto: 'Hooks são funções que permitem usar estado e outras funcionalidades do React em componentes funcionais. Os hooks mais usados são useState e useEffect.',
            autor: 'Ana Oliveira',
            dataPostagem: '2024-10-05',
            curtidas: 150,
            compartilhamento: 60,
        },
    ];

    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    postagens.map((postagem, idx) => <Postagem postagem={postagem} key={`list_${idx}`} navigation={navigation} />)
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