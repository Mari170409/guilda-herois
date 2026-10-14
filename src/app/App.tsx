import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import HeroCard from '../components/HeroCard';
import CustomModal from '../components/CustomModal';

interface Hero {
  id: string;
  name: string;
  heroClass: string;
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSaveHero = (newHero: Hero) => {
    setHeroes((prevHeroes) => [...prevHeroes, newHero]);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Guilda de Heróis</Text>
      </View>

      <FlatList
        data={heroes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum herói cadastrado na guilda.</Text>
            <Text style={styles.emptySubtext}>Clique no botão abaixo para recrutar!</Text>
          </View>
        }
        renderItem={({ item }) => (
          <HeroCard name={item.name} heroClass={item.heroClass} />
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoCadastrar} onPress={() => setModalVisible(true)}>
          <Text style={styles.textoBotaoCadastrar}>+ Cadastrar Herói</Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveHero}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 22,
    color: '#FFD700',
  },
  listaContainer: {
    padding: 16,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  emptySubtext: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
  },
  footer: {
    padding: 16,
    backgroundColor: '#121212',
  },
  botaoCadastrar: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoCadastrar: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#121212',
  },
});