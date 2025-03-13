import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function News() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Últimas Notícias</Text>
        
        <View style={styles.newsSection}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/filme.jpeg')} style={styles.newsImage} /> 
          </View>

          <Text style={styles.newsTitle}>Prefeitura do Rio vai comprar imóvel onde foi gravado o filme 'Ainda Estou Aqui' e transformar em Casa do Cinema Brasileiro</Text>
          <Text style={styles.newsDate}>06 de Março de 2025</Text>
          <Text style={styles.text}>
            Segundo o decreto publicado pela Prefeitura do Rio nesta segunda-feira (3), o imóvel na Urca foi declarado de utilidade pública. O texto justifica a ação por levar em conta a relevância da obra de Marcelo Rubens Paiva, autor do livro que deu origem ao filme.
            <br></br>
            "(...) Ressalta o dever institucional do Estado de valorizar a memória dos brasileiros que resistiram e superaram o autoritarismo, contribuindo para a retomada da democracia. Outra consideração é o apelo turístico, já que o filme teve reconhecimento internacional", diz um trecho do decreto.
            <br></br>
            O proprietário do imóvel que serviu de cenário para o filme está pedindo R$ 14 milhões pela casa. Construída em 1937, a residência de 480 m² passou por uma adaptação para ficar idêntica a que morou a família Paiva, nos anos 1970. O imóvel foi reformado após as gravações.
            <br></br> 
            O filme "Ainda Estou Aqui", que se passa em 1971, conta a história de Eunice (interpretada por Fernanda Torres e Fernanda Montenegro), que estudou Direito e se reinventou como uma das mais importantes ativistas dos Direitos Humanos no Brasil depois do assassinato de seu marido, Rubens Paiva (Selton Mello), pela ditadura militar.
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
  newsSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  newsDate: {
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
    marginBottom: 20,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});