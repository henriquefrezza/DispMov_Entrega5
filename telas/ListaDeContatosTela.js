import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

const ListaDeContatosTela = (props) => {
    const[contatos, setContatos] = useState();

    const removerContato = (keyASerRemovida) => {
        setContatos(contatos => {
        return contatos.filter((contato) => {
            return contato.key !== keyASerRemovida
        })
        }); 
    }

  return (
    <View>
    <FlatList
    data={contatos}
    renderItem={
      (contato) => (
        <ContatoItem
          chave={contato.item.key} 
          nome={contato.item.nome}
          numero={contato.item.numero}
          onDelete={removerContato}  
        />
      )
    }
/>
    </View>
  )
};

ListaDeContatosTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight: () => {
            return(
    <Button
    title="Adicionar Contato"
    onPress={() => dadosNavegacao.navigation.navigate("NovoContato")}
    />
  )
}
}
}

const estilos = StyleSheet.create({

});

export default ListaDeContatosTela;