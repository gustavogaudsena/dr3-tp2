import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import TP10Home from './home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TP10Carrinho from './carrinho';
import { Link, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

const TP10Stack = createNativeStackNavigator()
const produtos = [
    {
        id: 1,
        nome: 'Arroz Branco 5kg',
        uri: 'https://superprix.vteximg.com.br/arquivos/ids/174488-600-600/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
        descricao: 'Arroz branco tipo 1, pacote de 5kg. Ideal para o dia a dia, de excelente qualidade.',
        valor: 25.90
    },
    {
        id: 2,
        nome: 'Feijão Carioca 1kg',
        uri: 'https://redemix.vteximg.com.br/arquivos/ids/209460-1000-1000/7897136400155.jpg?v=638350604534800000',
        descricao: 'Feijão carioca, grãos selecionados, pacote de 1kg. Essencial para a culinária brasileira.',
        valor: 8.50
    },
    {
        id: 3,
        nome: 'Óleo de Soja 900ml',
        uri: 'https://obahortifruti.vtexassets.com/arquivos/ids/8447031/Oleo-De-Soja-Soya-900-Ml.jpg?v=638498191234930000',
        descricao: 'Óleo de soja 100% puro, garrafa de 900ml. Ideal para frituras e preparos diversos.',
        valor: 7.20
    },
    {
        id: 4,
        nome: 'Açúcar Refinado 1kg',
        uri: 'https://www.edona.com.br/arquivos/ids/160263-1000-1000/6871d3947e10884218d6f0804ecfef19.jpg?v=637523741581070000',
        descricao: 'Açúcar refinado, pacote de 1kg. Indicado para adoçar bebidas e preparos culinários.',
        valor: 4.30
    },
    {
        id: 5,
        nome: 'Café Torrado e Moído 500g',
        uri: 'https://avenidab2c.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Favenidab2c.vtexassets.com%2Farquivos%2Fids%2F347974%2FCafe-Torrado-e-Moido-Uniao-Tradicional-500g.jpg%3Fv%3D638624697989530000',
        descricao: 'Café torrado e moído, pacote de 500g. Rico em sabor, ideal para o café da manhã.',
        valor: 14.90
    }
];


export default function TP2_10() {
    const [carrinho, setCarrinho] = useState([]);
    const navigation = useNavigation(); // Obtendo o objeto navigation
    const NavigateCarrinho = () => <TouchableOpacity onPress={() => navigation.navigate('TP10Carrinho')}><Icon name='shopping-cart' size={24} color="#000" /></TouchableOpacity>

    const adicionaItem = (produto) => {
        setCarrinho(prev => [...prev, produto.id])
        Toast.show({
            text1: 'Item adicionado ao carrinho',
            text2: produto.nome,
            visibilityTime: 3000,
            position: 'bottom',
            type: 'success'
        });
    }
    const removeItem = (id) => {
        setCarrinho(prev => prev.filter((prod) => prod.id != id))
    }

    return (
        <TP10Stack.Navigator initialRouteName="TP10Home" screenOptions={{
            headerRight: NavigateCarrinho
        }}  >
            <TP10Stack.Screen name="TP10Home" options={{
                title: 'Lista de Compras',
                headerBackVisible: false,
            }}>
                {_ => <TP10Home {..._} carrinho={carrinho} adicionaItem={adicionaItem} produtos={produtos} />}
            </TP10Stack.Screen>
            <TP10Stack.Screen name="TP10Carrinho" options={{
                title: 'Carrinho'
            }} >
                {_ => <TP10Carrinho {..._} carrinho={carrinho} removeItem={removeItem} produtos={produtos} />}
            </TP10Stack.Screen>

        </TP10Stack.Navigator>
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