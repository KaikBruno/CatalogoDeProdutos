import { Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Catálogo de Produtos</Text>
        <TextInput placeholder="Nome do produto"></TextInput>
        <TextInput placeholder="Preço"></TextInput>
        <TouchableOpacity>
            <Text>Adicionar produto</Text>
        </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      margin: 30
    },
    title:{
        fontSize: 28,
    }

  });