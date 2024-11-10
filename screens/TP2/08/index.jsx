import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Contato from './contato';

export default function TP2_08() {
    const contatos = [{
        uri: 'https://via.placeholder.com/150', // Placeholder avatar image
        nome: 'João Silva',
        endereco: 'Rua das Flores, 123, São Paulo - SP',
        telefone: '(11) 98765-4321',
    },
    {
        uri: 'https://via.placeholder.com/150',
        nome: 'Maria Souza',
        endereco: 'Av. Paulista, 456, São Paulo - SP',
        telefone: '(11) 91234-5678',
    },
    {
        uri: 'https://via.placeholder.com/150',
        nome: 'Carlos Pereira',
        endereco: 'Rua do Sol, 789, Rio de Janeiro - RJ',
        telefone: '(21) 99876-5432',
    },
    {
        uri: 'https://via.placeholder.com/150',
        nome: 'Ana Oliveira',
        endereco: 'Av. Atlântica, 321, Copacabana - RJ',
        telefone: '(21) 91111-2222',
    },
    ];
    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    contatos.map((contato, idx) => <Contato contato={contato} key={`list_${idx}`} />)
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