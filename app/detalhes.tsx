import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Botao from '../components/Botao';

export default function TelaDetalhes() {
  const params = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: params.imagem as string }} style={styles.imagem} />
      <Text style={styles.titulo}>{params.titulo}</Text>
      
      <View style={styles.infoRow}>
        <Text style={styles.tag}>Gênero: {params.genero}</Text>
        <Text style={styles.tag}>Ano: {params.ano}</Text>
      </View>

      <Text style={styles.secaoTitulo}>Sinopse</Text>
      <Text style={styles.descricao}>{params.descricao}</Text>

      <Botao
        titulo="Voltar ao Catálogo"
        onPress={() => router.back()}
        style={styles.botaoVoltar}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 300,
    borderRadius: 12,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  tag: {
    color: '#E50914',
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: 'bold',
  },
  secaoTitulo: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 15,
    color: '#CCC',
    lineHeight: 22,
    marginBottom: 30,
    textAlign: 'justify',
  },
  botaoVoltar: {
    width: '100%',
    backgroundColor: '#333',
  },
});