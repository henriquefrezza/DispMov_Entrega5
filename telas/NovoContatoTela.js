import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList } from 'react-native';
import ContatoInput from'../components/ContatoInput';

const NovoContatoTela = (props) => {
const[contatos, setContatos] = useState([]);
const[contadorContatos, setContadorContatos] = useState(10);

  const adicionarContato = (nome, numero) => {
    setContatos((contatos) => {
    setContadorContatos(contadorContatos + 2);
    return [...contatos, {key: contadorContatos.toString(), nome: 'Nome: ' + nome, numero: 'Numero: ' + numero}];
  });
  }

  return (
    <View style={estilos.telaPrincipalView}>
        <ContatoInput onAdicionarContato={adicionarContato}/>
    </View>
  )
};

NovoContatoTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight: () => {
            return(
    <Button
    title="Lista de Contatos"
    onPress={() => dadosNavegacao.navigation.navigate("ListaDeContatos", {contatos: dadosNavegacao.contatos})}    />
            )
        }
    }
}

const estilos = StyleSheet.create({
    itemNaListaView: {
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
      },
});

export default NovoContatoTela;