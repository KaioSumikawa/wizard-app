import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Botao from '../components/Botao';

export default function TelaSobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o WizardApp</Text>

      <View style={styles.cardInfo}>
        <Text style={styles.rotulo}>Aplicação:</Text>
        <Text style={styles.valor}>WizardApp — Catálogo Mágico de Filmes</Text>

        <Text style={styles.rotulo}>Disciplina:</Text>
        <Text style={styles.valor}>Programação para Dispositivos Móveis I</Text>

        <Text style={styles.rotulo}>Finalidade:</Text>
        <Text style={styles.valor}>
          Atividade avaliativa prática demonstrando conceitos de React Native, Expo Router, estado, efeitos e Flexbox.
        </Text>

        <Text style={styles.rotulo}>Versão:</Text>
        <Text style={styles.valor}>1.0.0</Text>
      </View>

      <Botao
        titulo="Voltar"
        onPress={() => router.back()}
        style={styles.botaoVoltar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#16161D', 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700', 
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  cardInfo: {
    backgroundColor: '#1C1C24', 
    padding: 20,
    borderRadius: 12,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)', 
  },
  rotulo: {
    color: '#D4AF37', 
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    letterSpacing: 0.5,
  },
  valor: {
    color: '#E0E0E0',
    fontSize: 15,
    marginTop: 3,
    lineHeight: 22,
  },
  botaoVoltar: {
    backgroundColor: 'rgba(28, 28, 36, 0.9)', 
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.5)', 
  },
});