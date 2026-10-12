import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import Botao from '../components/Botao';

export default function TelaDetalhes() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const listaImagens: { [key: string]: any } = {
    '1': require('../assets/images/filme-01.jpg'),
    '2': require('../assets/images/filme-02.jpg'),
    '3': require('../assets/images/filme-03.jpg'),
    '4': require('../assets/images/filme-04.jpg'),
    '5': require('../assets/images/filme-05.jpg'),
    '6': require('../assets/images/filme-06.jpg'),
    'filme-01.jpg': require('../assets/images/filme-01.jpg'),
    'filme-02.jpg': require('../assets/images/filme-02.jpg'),
    'filme-03.jpg': require('../assets/images/filme-03.jpg'),
    'filme-04.jpg': require('../assets/images/filme-04.jpg'),
    'filme-05.jpg': require('../assets/images/filme-05.jpg'),
    'filme-06.jpg': require('../assets/images/filme-06.jpg'),
  };

  const resolverImagem = () => {
    const id = params.id ? String(params.id) : '';
    const imgParam = params.imagem ? String(params.imagem) : '';
    const titulo = params.titulo ? String(params.titulo) : '';

    if (id && listaImagens[id]) {
      return listaImagens[id];
    }

    if (imgParam && listaImagens[imgParam]) {
      return listaImagens[imgParam];
    }

    if (titulo.includes('Pedra Filosofal')) return require('../assets/images/filme-01.jpg');
    if (titulo.includes('Câmara Secreta')) return require('../assets/images/filme-02.jpg');
    if (titulo.includes('Prisioneiro de Azkaban')) return require('../assets/images/filme-03.jpg');
    if (titulo.includes('Cálice de Fogo')) return require('../assets/images/filme-04.jpg');
    if (titulo.includes('Ordem da Fênix')) return require('../assets/images/filme-05.jpg');
    if (titulo.includes('Enigma do Príncipe')) return require('../assets/images/filme-06.jpg');

    return require('../assets/images/filme-01.jpg');
  };

  const imagemSource = resolverImagem();

  const handleVoltar = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/catalogo');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen
        options={{
          title: 'Detalhes do Filme',
        }}
      />

      <Image source={imagemSource} style={styles.imagem} resizeMode="cover" />

      <Text style={styles.titulo}>{params.titulo || 'Detalhes do Filme'}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.tag}>Gênero: {params.genero || 'Fantasia / Aventura'}</Text>
        <Text style={styles.tag}>Ano: {params.ano || '2001'}</Text>
      </View>

      <Text style={styles.secaoTitulo}>Sinopse</Text>
      <Text style={styles.descricao}>
        {params.descricao || params.sinopse || 'Sem descrição disponível para este filme.'}
      </Text>

      <Botao
        titulo="Voltar ao Catálogo"
        onPress={handleVoltar}
        style={styles.botaoVoltar}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16161D',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  imagem: {
    width: 220,
    height: 320,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#D4AF37',
  },
  titulo: {
    fontSize: 24,
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
    color: '#D4AF37',
    backgroundColor: '#2A2A38',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#D4AF37',
  },
  secaoTitulo: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D4AF37',
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
    backgroundColor: '#2A2A38',
    borderWidth: 1,
    borderColor: '#D4AF37',
  },
});