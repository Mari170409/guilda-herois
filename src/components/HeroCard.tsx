import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeroCardProps {
  name: string;
  heroClass: string;
}

export default function HeroCard({ name, heroClass }: HeroCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{name}</Text>
      <Text style={styles.classe}>Classe: {heroClass}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C2C2C',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#FFD700',
    elevation: 3,
  },
  nome: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
  classe: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#B0B0B0',
    marginTop: 2,
  },
});