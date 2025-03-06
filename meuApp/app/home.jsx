import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.imageContainer}>
          
              <Image source={require('../assets/filmes.png')} style={styles.image} /> 
          
        </View>

        
        <Text style={styles.title}>Bem-vindo! 🍿</Text>
        <Text style={styles.subtitle}>App de Filmes e Séries</Text>
        <Text style={styles.text}>
      Seu guia de filmes e séries brasileiros! Explore histórias únicas, clássicos e novidades da nossa cultura. Confira agora!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 15,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
});