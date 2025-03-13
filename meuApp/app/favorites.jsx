import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Meus Favoritos</Text>
        
        <View style={styles.favoriteSection}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/centralb.jpeg')} style={styles.favoriteImage} /> 
          </View>

          <Text style={styles.favoriteTitle}>Filme Favorito: 'Central do Brasil'</Text>
          <Text style={styles.favoriteDate}>Adicionado em: 15 de Fevereiro de 2025</Text>
          <Text style={styles.text}>
            Dora, uma amargurada ex-professora, ganha a vida escrevendo cartas para pessoas analfabetas, que ditam o que querem contar às suas famílias. Ela embolsa o dinheiro sem sequer postar as cartas.
            <br></br>
            Este filme é um testemunho do poder do amor e da esperança, mesmo nas circunstâncias mais difíceis.
          </Text>
        </View>

        <View style={styles.favoriteSection}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/tropa.jpeg')} style={styles.favoriteImage} /> 
          </View>

          <Text style={styles.favoriteTitle}>Filme Favorito: 'Tropa de Elite'</Text>
          <Text style={styles.favoriteDate}>Adicionado em: 10 de Fevereiro de 2025</Text>
          <Text style={styles.text}>
          Em Tropa de Elite, o dia-a-dia do grupo de policiais e de um capitão do BOPE (Wagner Moura), que quer deixar a corporação e tenta encontrar um substituto para seu posto. Paralelamente dois amigos de infância se tornam policiais e se destacam pela honestidade e honra ao realizar suas funções, se indignando com a corrupção existente no batalhão em que atuam.


            <br></br>
            Uma trilogia que captura a luta do bem contra o mal e a importância da amizade e da coragem.
          </Text>
        </View>


        <View style={styles.favoriteSection}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/cidade.jpeg')} style={styles.favoriteImage} /> 
          </View>

          <Text style={styles.favoriteTitle}>Filme Favorito: 'Cidade de Deus'</Text>
          <Text style={styles.favoriteDate}>Adicionado em: 23 de Janeiro de 2025</Text>
          <Text style={styles.text}>
          Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento


          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 20,
    textAlign: 'center',
  },
  favoriteSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  favoriteTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  favoriteDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50,
    width: '20%',
  },
  favoriteImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});