import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Espaço para imagem de perfil */}
        <View style={styles.imageContainer}>
          <View style={styles.placeholderImage}>
            <Image
              source={{ uri: 'https://th.bing.com/th/id/OIF.e1pi8Fm9dLLYbZOxOo1lbg?w=259&h=180&c=7&r=0&o=5&pid=1.7' }}
              style={styles.profileImage}
            />
          </View>
        </View>

        {/* Informações do usuário */}
        <Text style={styles.title}>Meu Perfil</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoText}>Kylie Jenner</Text>
          
          <Text style={styles.infoLabel}>Idade:</Text>  
          <Text style={styles.infoText}>27 anos</Text>
          
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>kyle.jhenner@email.com</Text>
          
          <Text style={styles.infoLabel}>Cidade:</Text>
          <Text style={styles.infoText}>Xique Xique, BA</Text>
          
          <Text style={styles.infoLabel}>Ocupação:</Text>
          <Text style={styles.infoText}>Empresária e empreendedora</Text>
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
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  placeholderImage: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000', 
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
});