import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (hero: { id: string; name: string; heroClass: string }) => void;
}

export default function CustomModal({ visible, onClose, onSave }: CustomModalProps) {
  const [name, setName] = useState('');
  const [heroClass, setHeroClass] = useState('');

  const handleSave = () => {
    if (!name.trim() || !heroClass.trim()) {
      Alert.alert('Campos Obrigatórios', 'Por favor, preencha o Nome e a Classe do herói antes de salvar.');
      return;
    }

    onSave({
      id: Date.now().toString(),
      name: name.trim(),
      heroClass: heroClass.trim(),
    });

    // Limpa os campos
    setName('');
    setHeroClass('');
  };

  const handleCancel = () => {
    setName('');
    setHeroClass('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={handleCancel}>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.avatar}
          />

          <Text style={styles.titulo}>Novo Herói</Text>

          <Text style={styles.label}>Nome do Personagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Arthur Pendragon"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Classe do Personagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Paladino"
            placeholderTextColor="#888"
            value={heroClass}
            onChangeText={setHeroClass}
          />

          <TouchableOpacity style={styles.botaoSalvar} onPress={handleSave}>
            <Text style={styles.textoBotaoSalvar}>Salvar Herói</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoCancelar} onPress={handleCancel}>
            <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  avatar: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  titulo: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#FFD700',
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#E0E0E0',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#2C2C2C',
    color: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#444',
  },
  botaoSalvar: {
    backgroundColor: '#FFD700',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  textoBotaoSalvar: {
    fontFamily: 'Poppins_700Bold',
    color: '#121212',
    fontSize: 16,
  },
  botaoCancelar: {
    marginTop: 12,
    paddingVertical: 8,
  },
  textoBotaoCancelar: {
    fontFamily: 'Poppins_400Regular',
    color: '#FF5252',
    fontSize: 14,
  },
});