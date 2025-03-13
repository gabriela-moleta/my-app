import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Adicione ícones para melhorar a UI

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Imagem de perfil */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIF.e1pi8Fm9dLLYbZOxOo1lbg?w=259&h=180&c=7&r=0&o=5&pid=1.7' }}
            style={styles.profileImage}
          />
        </View>

        {/* Título */}
        <Text style={styles.title}>Meu Perfil</Text>

        {/* Informações do usuário */}
        <View style={styles.infoCard}>
          <InfoItem icon="person" label="Nome" value="Kylie Jenner" />
          <InfoItem icon="calendar-today" label="Idade" value="27 anos" />
          <InfoItem icon="email" label="Email" value="kyle.jhenner@email.com" />
          <InfoItem icon="location-on" label="Cidade" value="Xique Xique, BA" />
          <InfoItem icon="work" label="Ocupação" value="Empresária e empreendedora" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Componente reutilizável para exibir informações
const InfoItem = ({ icon, label, value }) => (
  <View style={styles.infoItem}>
    <Icon name={icon} size={20} color="#FF0000" style={styles.infoIcon} />
    <View style={styles.infoTextContainer}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoText}>{value}</Text>
    </View>
  </View>
);

// Estilos
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
});