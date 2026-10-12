import React, { useEffect } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import FilmeCard, { Filme } from '../components/FilmeCard';

const filmesMock: Filme[] = [
  {
    id: '1',
    titulo: 'Harry Potter e a Pedra Filosofal',
    genero: 'Fantasia / Aventura',
    ano: 2001,
    imagem: require('../assets/images/filme-01.jpg'),
    descricao: 'Harry Potter, um garoto órfão, descobre em seu décimo primeiro aniversário que é um bruxo e foi aceito na Escola de Magia e Bruxaria de Hogwarts.',
  },
  {
    id: '2',
    titulo: 'Harry Potter e a Câmara Secreta',
    genero: 'Fantasia / Aventura',
    ano: 2002,
    imagem: require('../assets/images/filme-02.jpg'),
    descricao: 'Avisado por Dobby, Harry ignora os perigos e retorna para o seu segundo ano em Hogwarts, onde uma misteriosa câmara se abre.',
  },
  {
    id: '3',
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    genero: 'Fantasia / Mistério',
    ano: 2004,
    imagem: require('../assets/images/filme-03.jpg'),
    descricao: 'Harry retorna para seu terceiro ano em Hogwarts, descobrindo que Sirius Black, um perigoso prisioneiro, fugiu de Azkaban com o objetivo de caçá-lo.',
  },
  {
    id: '4',
    titulo: 'Harry Potter e o Cálice de Fogo',
    genero: 'Fantasia / Aventura',
    ano: 2005,
    imagem: require('../assets/images/filme-04.jpg'),
    descricao: 'Harry é misteriosamente selecionado para competir no perigoso Torneio Tribruxo, enfrentando desafios mortais e o retorno de Voldemort.',
  },
  {
    id: '5',
    titulo: 'Harry Potter e a Ordem da Fênix',
    genero: 'Fantasia / Aventura',
    ano: 2007,
    imagem: require('../assets/images/filme-05.jpg'),
    descricao: 'Enfrentando a descrença do Ministério da Magia sobre o retorno de Voldemort, Harry treina secretamente seus colegas para a guerra que se aproxima.',
  },
  {
    id: '6',
    titulo: 'Harry Potter e as Relíquias da Morte - Parte 1',
    genero: 'Fantasia / Aventura',
    ano: 2010,
    imagem: require('../assets/images/filme-06.jpg'),
    descricao: 'Harry, Rony e Hermione partem em uma missão perigosa para encontrar e destruir as Horcruxes restantes de Voldemort.',
  },
];

export default function TelaCatalogo() {
  useEffect(() => {
    console.log('Catálogo de filmes de Harry Potter carregado com sucesso!');
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen
        options={{
          title: 'Catálogo de Filmes',
        }}
      />

      <Text style={styles.subtitulo}>Selecione um filme para ver mais detalhes:</Text>
      {filmesMock.map((filme) => (
        <FilmeCard key={filme.id} filme={filme} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16161D', 
  },
  content: {
    padding: 16,
  },
  subtitulo: {
    color: '#D4AF37', 
    fontSize: 14,
    marginBottom: 16,
    letterSpacing: 0.5,
  },
});