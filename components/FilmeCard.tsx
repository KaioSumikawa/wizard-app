import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export interface Filme {
  id: string;
  titulo: string;
  imagem: any; 
  genero: string;
  ano: number;
  descricao: string;
}

interface FilmeCardProps {
  filme: Filme;
}

export default function FilmeCard({ filme }: FilmeCardProps) {
  const router = useRouter();
  const [favorito, setFavorito] = useState(false);

  const toggleFavorito = () => {
    setFavorito(!favorito);
  };

  const irParaDetalhes = () => {
    router.push({
      pathname: '/detalhes',
      params: {
        titulo: filme.titulo,
        genero: filme.genero,
        ano: filme.ano,
        descricao: filme.descricao,
      },
    });
  };

  return (
    <View style={[styles.card, favorito && styles.cardFavorito]}>
      <Pressable onPress={irParaDetalhes} style={styles.containerInfo}>
        <Image source={filme.imagem} style={styles.imagem} />
        <View style={styles.detalhes}>
          <Text style={styles.titulo}>{filme.titulo}</Text>
          <Text style={styles.texto}>Gênero: {filme.genero}</Text>
          <Text style={styles.texto}>Ano: {filme.ano}</Text>
        </View>
      </Pressable>

      <Pressable
        onPress={toggleFavorito}
        style={({ pressed }) => [
          styles.botaoFavorito,
          favorito && styles.botaoFavoritoAtivo,
          pressed && styles.botaoPressionado,
        ]}
      >
        <Text style={[styles.textoFavorito, favorito && styles.textoFavoritoAtivo]}>
          {favorito ? '★ Favorito' : '☆ Favoritar'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#16161D', 
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.25)', 
  },
  cardFavorito: {
    borderColor: '#FFD700', 
    backgroundColor: '#1B1515', 
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagem: {
    width: 80,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D4AF37',
    resizeMode: 'cover',
  },
  detalhes: {
    flex: 1,
    marginLeft: 16,
  },
  titulo: {
    color: '#FFD700', 
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  texto: {
    color: '#B8B8B8',
    fontSize: 13.5,
    marginBottom: 4,
  },
  botaoFavorito: {
    marginTop: 12,
    paddingVertical: 10,
    backgroundColor: '#242433', 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  botaoFavoritoAtivo: {
    backgroundColor: '#740001', 
    borderColor: '#FFD700',
  },
  botaoPressionado: {
    opacity: 0.75,
  },
  textoFavorito: {
    color: '#C0C0C0',
    fontWeight: '600',
    fontSize: 14,
  },
  textoFavoritoAtivo: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});