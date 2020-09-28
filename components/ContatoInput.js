import React,  {useState } from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const ContatoInput = (props) => {

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const capturarNome = (nome) => {
        setNome(nome);
    }
    const capturarNumero = (numero) => {
        setNumero(numero);
    }
    return (
        <View style={estilos.View}>
            <TextInput
                placeholder="Nome"
                style={estilos.TextInput}
                onChangeText={capturarNome}
                value={nome}
            />
            <TextInput
                placeholder="Número"
                style={estilos.TextInput}
                onChangeText={capturarNumero}
                value={numero}
            />
            <Button
                title="Adicionar"
                onPress={() => props.onAdicionarContato(nome, numero)}
            />
        </View>
    );
};

const estilos = StyleSheet.create({
    View: {
        marginBottom: 8
    },
    TextInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 8,
        marginBottom: 8,
        textAlign: "center"
    }
});

export default ContatoInput;