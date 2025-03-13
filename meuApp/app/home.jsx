import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/filmes.png')} style={styles.image} /> 
        </View>

        <Text style={styles.title}>Bem-vindo! 🍿</Text>
        <Text style={styles.subtitle}>App de Filmes e Séries</Text>
        <Text style={styles.text}>
          Seu guia de filmes e séries brasileiros! Explore histórias únicas, clássicos e novidades da nossa cultura. Confira agora!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
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